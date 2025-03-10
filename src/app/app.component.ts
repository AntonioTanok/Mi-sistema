import { Component, HostListener, OnInit, signal } from '@angular/core';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LeftSidebarComponent, MainComponent, LoginComponent, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(window.innerWidth);

  sesionActiva: boolean = false;
  tokenValue: string | null = null;

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    }
  }

  ngOnInit(): void {
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }

  constructor() {
    this.verificarSesion();
    //hablar con la API
  }

   verificarSesion(): void {
    console.log("funcion verificarSesion()")
    //Objetivo: Ir a local storage y verifica si existe un token y si existe toma el valor del token ,y revisa si el valor es diferene a null o vacio y si si es diferente cambia el valor de sesion actiuva a true

    //1. Obtener el valor token de localstorage
    this.tokenValue = localStorage.getItem('token'); 
    console.log("token value: ", this.tokenValue)
    //2. Comparar si no es null
    if(this.tokenValue){
      console.log("token existe")
      this.sesionActiva = true;
    }else{
      console.log("token no existe")
      this.sesionActiva = false;
    }
   }


  
}
