import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  usuario = {
    nombre: localStorage.getItem('username') || 'Usuario',
    email: localStorage.getItem('userEmail') || 'correo@example.com',
    role: localStorage.getItem('userRole') || 'Invitado'
  };
}
