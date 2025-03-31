import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-documentacion-proveedor',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Asegurarse de que FormsModule está importado
  templateUrl: './documentacion-proveedor.component.html',
  styleUrl: './documentacion-proveedor.component.css'
})
export class DocumentacionProveedorComponent implements OnInit {
  usuarios: any[] = [];
  usuarioSeleccionado: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.http.get<any[]>('http://localhost:8000/usuarios').subscribe(response => {
      this.usuarios = response; // Cargar usuarios completos
    });
  }

  cargarDocumentos(): void {
    console.log('Cargando documentos para:', this.usuarioSeleccionado);
    // Se desactiva la funcionalidad del botón por ahora
  }
}

