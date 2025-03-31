import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProveedoresComponent } from '../proveedores/proveedores.component';
import { FacturasComponent } from '../facturas/facturas.component';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css'],
})
export class LeftSidebarComponent {
  @Input() isLeftSidebarCollapsed!: boolean;
  @Output() changeIsLeftSidebarCollapsed = new EventEmitter<boolean>();

  items = [
    // { routeLink: 'dashboard', icon: 'fal fa-home', label: 'Dashboard' }, // Perfil admin 
    { routeLink: 'perfil', icon: 'fal fa-user-circle', label: 'Perfil' }, // Perfil proveedor
    // { routeLink: 'usuarios', icon: 'fal fa-user', label: 'Usuarios' }, // Perfil admin
    // { routeLink: 'proveedores', icon: 'fal fa-truck', label: 'Proveedores' }, // Se agrega "Proveedores"
    { routeLink: 'alta-proveedor', icon: 'fal fa-user-plus', label: 'Alta-Proveedor' }, // Perfil proveedor
    // { routeLink: 'documentacion-proveedor', icon: 'fal fa-file', label: 'Documentos/Proveedor' }, // Perfil admin


    { routeLink: 'facturas', icon: 'fal fa-file-invoice-dollar', label: 'Facturas' }, // Perfil user
    // { routeLink: 'factura-pago', icon: 'fal fa-file-invoice-dollar', label: 'Facturas/Proveedor' }, // Perfil admin

    // { routeLink: 'products', icon: 'fal fa-box-open', label: 'Products' },
   // { routeLink: 'pages', icon: 'fal fa-file', label: 'Pages' },
    // { routeLink: 'settings', icon: 'fal fa-cog', label: 'Settings' },
    // { routeLink: 'registrar', icon: 'fal fa-cog', label: 'Usuariosprueba' },
    { routeLink: 'restaurar-credenciales', icon: 'fal fa-key', label: 'Restaurar' },
  
    { routeLink: 'logout', icon: 'fal fa-sign-out', label: 'Cerrar Sesión' },
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed);
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }

  // Función para manejar el cierre de sesión
  logout(): void {
    // Eliminar el token del localStorage
    localStorage.removeItem('token');

    // Refrescar la página
    location.reload();  // Esto recargará la página para reflejar el estado de sesión actualizado
  }
}
