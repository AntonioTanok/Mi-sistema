import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Modal } from 'bootstrap';  // ✅ Importar Modal de Bootstrap correctamente

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent {
  proveedorForm: FormGroup;
  proveedores = [
    { nombre: 'Proveedor 1', telefono: '555-1234', correo: 'proveedor1@example.com' },
    { nombre: 'Proveedor 2', telefono: '555-5678', correo: 'proveedor2@example.com' }
  ];

  constructor(private fb: FormBuilder) {
    this.proveedorForm = this.fb.group({
      nombre: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  guardarProveedor() {
    if (this.proveedorForm.valid) {
      this.proveedores.push(this.proveedorForm.value);
      console.log('Proveedor agregado:', this.proveedorForm.value);
      this.proveedorForm.reset(); // Limpiar el formulario después de guardar
      this.cerrarModal(); // Cierra el modal
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }

  editarProveedor(proveedor: any) {
    console.log('Editar proveedor:', proveedor);
  }

  eliminarProveedor(proveedor: any) {
    this.proveedores = this.proveedores.filter(p => p !== proveedor);
    console.log('Proveedor eliminado:', proveedor);
  }

  cerrarModal() {
    const modalElement = document.getElementById('proveedorModal');
    if (modalElement) {
      const modalInstance = Modal.getInstance(modalElement);
      modalInstance?.hide(); // Cierra el modal correctamente
    }
  }
}
