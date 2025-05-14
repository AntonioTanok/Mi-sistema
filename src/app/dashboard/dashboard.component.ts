// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {
//   username: string = '';

//   ngOnInit() {
//     this.username = localStorage.getItem('username') || 'Usuario';
//   }
// }


import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string = '';
  totalUsers: number = 0;
  totalAdmins: number = 0;
  @ViewChild('usersChart') usersChart!: ElementRef;
  @ViewChild('usersPieChart') usersPieChart!: ElementRef;
  private chartInstance: any;
  private pieChartInstance: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.username = localStorage.getItem('username') || 'Usuario';
    this.loadUserStatistics();
  }
  

  loadUserStatistics(): void {
    this.http.get<any[]>('http://localhost:8000/usuarios').subscribe(response => {
      this.totalUsers = response.filter(user => user.role === 'Proveedor').length;
      this.totalAdmins = response.filter(user => user.role === 'admin').length;
      this.renderChart();
      this.renderPieChart();
    }, error => {
      console.error('Error al obtener los datos:', error);
    });
  }
  

  renderChart(): void {
    if (this.chartInstance) {
      this.chartInstance.destroy(); // Eliminar gráfico anterior si existe
    }

    this.chartInstance = new Chart(this.usersChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Proveedores', 'Administradores'],
        datasets: [{
          label: 'Cantidad',
          data: [this.totalUsers, this.totalAdmins],
          backgroundColor: ['#aed6f1', '#3DEAC5'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1 // Asegura que solo se muestren números enteros
            }
          }
        },
        plugins: {
          legend: {
            display: false // Ocultamos la leyenda por defecto
          },
          tooltip: {
            enabled: true // Activamos los tooltips
          }
        }
      }
    });
  }

  renderPieChart(): void {
    if (this.pieChartInstance) {
      this.pieChartInstance.destroy(); // Eliminar gráfico anterior si existe
    }

    this.pieChartInstance = new Chart(this.usersPieChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Proveedores', 'Administradores'],
        datasets: [{
          data: [this.totalUsers, this.totalAdmins],
          backgroundColor: ['#aed6f1', '#3DEAC5'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top' // Mostrar la leyenda en la parte superior
          }
        }
      }
    });
  }
}
