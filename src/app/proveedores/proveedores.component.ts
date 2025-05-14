import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Modal } from 'bootstrap';


interface Proveedor {
  nombre: string;
  telefono: string;
  correo: string;
  codigoIdentificador: string;
  codigoNumerico: number;
  tipo: string;
}

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})


export class ProveedoresComponent {
  proveedores: Proveedor[] = [];
  filteredProveedores: Proveedor[] = [];
  paginatedProveedores: Proveedor[] = [];

  newProveedor: Proveedor = {
    nombre: '',
    telefono: '',
    correo: '',
    codigoIdentificador: '',
    codigoNumerico: 0,
    tipo: ''
  };



  searchQuery = '';
  currentPage = 1;
  pageSize = 5;
  totalRecords = 0;

  errorMessage = '';
  successMessage = '';
  

  onSearch() {
    const query = this.searchQuery.toLowerCase();
    this.filteredProveedores = this.proveedores.filter(p =>
      p.nombre.toLowerCase().includes(query) ||
      p.correo.toLowerCase().includes(query) ||
      p.tipo.toLowerCase().includes(query)
    );
    this.updatePagination();
  }

  onRegister() {
    if (!this.newProveedor.nombre || !this.newProveedor.correo || !this.newProveedor.tipo) {
      this.errorMessage = 'Todos los campos son obligatorios.';
      return;
    }

    this.proveedores.push({ ...this.newProveedor });
    this.successMessage = 'Proveedor registrado correctamente.';
    this.closeModal();
    this.onSearch();
  }

  editProveedor(proveedor: Proveedor) {
    this.newProveedor = { ...proveedor };
    const modal = new (window as any).bootstrap.Modal(document.getElementById('proveedorModal'));
    modal.show();
  }

  deleteProveedor(proveedor: Proveedor) {
    this.proveedores = this.proveedores.filter(p => p !== proveedor);
    this.onSearch();
  }

  openModal() {
    this.newProveedor = {
      nombre: '',
      telefono: '',
      correo: '',
      codigoIdentificador: '',
      codigoNumerico: 0,
      tipo: ''
    };
    const modal = new (window as any).bootstrap.Modal(document.getElementById('proveedorModal'));
    modal.show();
  }

  closeModal() {
    const modalElement = document.getElementById('proveedorModal');
    const modal = (window as any).bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  onPageSizeChange(event: any) {
    this.pageSize = +event.target.value;
    this.updatePagination();
  }

  updatePagination() {
    this.totalRecords = this.filteredProveedores.length;
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = this.currentPage * this.pageSize;
    this.paginatedProveedores = this.filteredProveedores.slice(startIndex, endIndex);
  }

  ngOnInit() {
    this.filteredProveedores = [...this.proveedores];
    this.updatePagination();
  }
}

