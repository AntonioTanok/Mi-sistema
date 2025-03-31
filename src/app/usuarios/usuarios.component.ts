// import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Modal } from 'bootstrap';

// @Component({
//     selector: 'app-usuarios',
//     standalone: true,
//     imports: [CommonModule, FormsModule],
//     templateUrl: './usuarios.component.html',
//     styleUrls: ['./usuarios.component.css']
// })
// export class UsuariosComponent implements OnInit, AfterViewInit {
//     usuarios: any[] = [];
//     filteredUsuarios: any[] = [];
//     pageSize: number = 5;
//     currentPage: number = 1;
//     totalRecords: number = 0;
//     searchQuery: string = '';
//     newUser = { id: null, name: '', email: '', password: '', role: '' };
//     isEditMode: boolean = false;
//     errorMessage: string = '';
//     successMessage: string = '';

//     @ViewChild('userModal') modalElement!: ElementRef;
//     private modalInstance: Modal | undefined;

//     constructor(private http: HttpClient) { }

//     ngOnInit(): void {
//         this.getUsuarios();
//     }

//     ngAfterViewInit(): void {
//         this.modalInstance = new Modal(this.modalElement.nativeElement);
//     }

//     getUsuarios(): void {
//         this.http.get<any[]>('http://localhost:8000/usuarios')
//             .subscribe(response => {
//                 this.usuarios = response;
//                 this.totalRecords = response.length;
//                 this.filteredUsuarios = this.usuarios;
//             });
//     }

//     onSearch(): void {
//         this.filteredUsuarios = this.usuarios.filter(user =>
//             user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
//         );
//         this.totalRecords = this.filteredUsuarios.length;
//         this.currentPage = 1;
//     }

//     onPageChange(page: number): void {
//         this.currentPage = page;
//     }

//     onPageSizeChange(event: Event): void {
//         const selectElement = event.target as HTMLSelectElement;
//         this.pageSize = Number(selectElement.value);
//         this.currentPage = 1;
//     }

//     get paginatedUsuarios() {
//         const startIndex = (this.currentPage - 1) * this.pageSize;
//         return this.filteredUsuarios.slice(startIndex, startIndex + this.pageSize);
//     }

//     editUser(user: any): void {
//         this.isEditMode = true;
//         this.newUser = { ...user, password: '' }; // No prellenar la contraseña por seguridad
//         this.openModal();
//     }

//     deleteUser(user: any): void {
//         if (confirm(`¿Estás seguro de eliminar a ${user.name}?`)) {
//             this.http.delete(`http://localhost:8000/eliminar/${user.id}`)
//                 .subscribe(() => {
//                     this.successMessage = 'Usuario eliminado correctamente';
//                     this.getUsuarios();
//                 }, error => {
//                     this.errorMessage = 'Error al eliminar usuario';
//                 });
//         }
//     }

//     onRegister(): void {
//         if (this.isEditMode) {
//             this.http.put(`http://localhost:8000/editar/${this.newUser.id}`, this.newUser)
//                 .subscribe(() => {
//                     this.successMessage = 'Usuario actualizado correctamente';
//                     this.getUsuarios();
//                     this.closeModal();
//                 }, error => {
//                     this.errorMessage = 'Error al actualizar usuario';
//                 });
//         } else {
//             this.http.post('http://localhost:8000/registrar', this.newUser)
//                 .subscribe(() => {
//                     this.successMessage = 'Usuario registrado exitosamente';
//                     this.getUsuarios();
//                     this.closeModal();
//                 }, error => {
//                     this.errorMessage = 'Error al registrar usuario';
//                 });
//         }
//     }

//     openModal(): void {
//         this.modalInstance?.show();
//     }

//     closeModal(): void {
//         this.isEditMode = false;
//         this.newUser = { id: null, name: '', email: '', password: '', role: '' };
//         this.modalInstance?.hide();
//     }
// }







//codigo fucnionando 17/03/2024

// import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Modal } from 'bootstrap';

// @Component({
//     selector: 'app-usuarios',
//     standalone: true,
//     imports: [CommonModule, FormsModule],
//     templateUrl: './usuarios.component.html',
//     styleUrls: ['./usuarios.component.css']
// })
// export class UsuariosComponent implements OnInit, AfterViewInit {
//     usuarios: any[] = [];
//     filteredUsuarios: any[] = [];
//     pageSize: number = 5;
//     currentPage: number = 1;
//     totalRecords: number = 0;
//     searchQuery: string = '';
//     newUser = { name: '', email: '', password: '', role: '' };
//     errorMessage: string = '';
//     successMessage: string = '';

//     @ViewChild('userModal') modalElement!: ElementRef;
//     private modalInstance: Modal | undefined;

//     constructor(private http: HttpClient) { }

//     ngOnInit(): void {
//         this.getUsuarios();
//     }

//     ngAfterViewInit(): void {
//         this.modalInstance = new Modal(this.modalElement.nativeElement);
//     }

//     getUsuarios(): void {
//         this.http.get<any[]>('http://localhost:8000/usuarios')
//             .subscribe(response => {
//                 this.usuarios = response;
//                 this.totalRecords = response.length;
//                 this.filteredUsuarios = this.usuarios;
//             });
//     }

//     onSearch(): void {
//         this.filteredUsuarios = this.usuarios.filter(user =>
//             user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
//         );
//         this.totalRecords = this.filteredUsuarios.length;
//         this.currentPage = 1;
//     }

//     onPageChange(page: number): void {
//         this.currentPage = page;
//     }

//     onPageSizeChange(event: Event): void {
//         const selectElement = event.target as HTMLSelectElement;
//         this.pageSize = Number(selectElement.value);
//         this.currentPage = 1;
//     }

//     get paginatedUsuarios() {
//         const startIndex = (this.currentPage - 1) * this.pageSize;
//         return this.filteredUsuarios.slice(startIndex, startIndex + this.pageSize);
//     }

//     openModal(): void {
//         const modalElement = document.getElementById('userModal');
//         if (modalElement) {
//             modalElement.classList.add('show');
//             modalElement.style.display = 'block';
//             document.body.classList.add('modal-open');
//         }
//     }

//     closeModal(): void {
//         if (this.modalInstance) {
//             this.modalInstance.hide();
//         } else {
//             const modalElement = document.getElementById('userModal');
//             if (modalElement) {
//                 modalElement.classList.remove('show');
//                 modalElement.style.display = 'none';
//                 document.body.classList.remove('modal-open');
//             }
//         }
//     }

//     onRegister(): void {
//         this.http.post('http://localhost:8000/registrar', this.newUser)
//             .subscribe(
//                 response => {
//                     this.successMessage = 'Usuario registrado exitosamente';
//                     this.errorMessage = '';
//                     this.getUsuarios(); // Recargar los usuarios
//                     // Cerrar el modal usando la instancia de Bootstrap
//                     if (this.modalInstance) {
//                         this.modalInstance.hide();
//                     }
//                 },
//                 error => {
//                     this.successMessage = '';
//                     if (error.error.detail.includes('correo')) {
//                         this.errorMessage = 'El correo ya está registrado';
//                     } else {
//                         this.errorMessage = 'Error al registrar usuario';
//                     }
//                 }
//             );
//     }

//     editUser(user: any): void {
//         console.log('Editar usuario', user);
//         // Aquí va la lógica de edición
//     }

//     deleteUser(user: any): void {
//       if (confirm(`¿Estás seguro de eliminar a ${user.name}?`)) {
//                     this.http.delete(`http://localhost:8000/eliminar/${user.id}`)
//                         .subscribe(() => {
//                             this.successMessage = 'Usuario eliminado correctamente';
//                             this.getUsuarios();
//                         }, error => {
//                             this.errorMessage = 'Error al eliminar usuario';
//                         });
//     }
// }
// }



//Nuevo codigo para editar informacion

import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Modal } from 'bootstrap';

@Component({
    selector: 'app-usuarios',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './usuarios.component.html',
    styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit, AfterViewInit {
    usuarios: any[] = [];
    filteredUsuarios: any[] = [];
    pageSize: number = 5;
    currentPage: number = 1;
    totalRecords: number = 0;
    searchQuery: string = '';
    newUser = { id: null, name: '', email: '', password: '', role: '' };
    isEditMode: boolean = false;
    errorMessage: string = '';
    successMessage: string = '';

    @ViewChild('userModal') modalElement!: ElementRef;
    private modalInstance: Modal | undefined;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.getUsuarios();
    }

    ngAfterViewInit(): void {
        this.modalInstance = new Modal(this.modalElement.nativeElement);
    }

    getUsuarios(): void {
        this.http.get<any[]>('http://localhost:8000/usuarios')
            .subscribe(response => {
                this.usuarios = response;
                this.totalRecords = response.length;
                this.filteredUsuarios = this.usuarios;
            });
    }

    onSearch(): void {
        this.filteredUsuarios = this.usuarios.filter(user =>
            user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
        this.totalRecords = this.filteredUsuarios.length;
        this.currentPage = 1;
    }

    onPageChange(page: number): void {
        this.currentPage = page;
    }

    onPageSizeChange(event: Event): void {
        const selectElement = event.target as HTMLSelectElement;
        this.pageSize = Number(selectElement.value);
        this.currentPage = 1;
    }

    get paginatedUsuarios() {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        return this.filteredUsuarios.slice(startIndex, startIndex + this.pageSize);
    }

    openModal(): void {
        const modalElement = document.getElementById('userModal');
        if (modalElement) {
            modalElement.classList.add('show');
            modalElement.style.display = 'block';
            document.body.classList.add('modal-open');
        }
    }

    closeModal(): void {
        if (this.modalInstance) {
            this.modalInstance.hide();
        } else {
            const modalElement = document.getElementById('userModal');
            if (modalElement) {
                modalElement.classList.remove('show');
                modalElement.style.display = 'none';
                document.body.classList.remove('modal-open');
            }
        }
        this.isEditMode = false;
        this.newUser = { id: null, name: '', email: '', password: '', role: '' };
    }

    onRegister(): void {
        if (this.isEditMode) {
            this.http.put(`http://localhost:8000/editar/${this.newUser.id}`, this.newUser)
                .subscribe(() => {
                    this.successMessage = 'Usuario actualizado correctamente';
                    this.getUsuarios();
                    this.closeModal();
                }, error => {
                    this.errorMessage = 'Error al actualizar usuario';
                });
        } else {
            this.http.post('http://localhost:8000/registrar', this.newUser)
                .subscribe(() => {
                    this.successMessage = 'Usuario registrado exitosamente';
                    this.getUsuarios();
                    this.closeModal();
                }, error => {
                    this.errorMessage = 'Error al registrar usuario';
                });
        }
        this.closeModal();
    }

    editUser(user: any): void {
        this.isEditMode = true;
        this.newUser = { id: user.id, name: user.name, email: user.email, password: '', role: user.role };
        this.openModal();
    }

    deleteUser(user: any): void {
        if (confirm(`¿Estás seguro de eliminar a ${user.name}?`)) {
            this.http.delete(`http://localhost:8000/eliminar/${user.id}`)
                .subscribe(() => {
                    this.successMessage = 'Usuario eliminado correctamente';
                    this.getUsuarios();
                }, error => {
                    this.errorMessage = 'Error al eliminar usuario';
                });
        }
    }
}
