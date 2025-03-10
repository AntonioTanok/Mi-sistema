import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent {
  proveedores = [
    { nombre: 'Juan Pérez', telefono: '555-123-4567', correo: 'juan@example.com' },
    { nombre: 'María López', telefono: '555-987-6543', correo: 'maria@example.com' },
  ];

  agregarProveedor() {
    console.log('Abrir modal o formulario para agregar proveedor');
  }

  editarProveedor(proveedor: any) {
    console.log('Editar proveedor:', proveedor);
  }

  eliminarProveedor(proveedor: any) {
    console.log('Eliminar proveedor:', proveedor);
  }
}
