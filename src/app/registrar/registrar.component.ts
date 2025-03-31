// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common'; 
// import { RouterModule } from '@angular/router'; 

// @Component({
//   selector: 'app-registrar',
//   standalone: true,
//   imports: [CommonModule, RouterModule],  
//   templateUrl: './registrar.component.html',
//   styleUrls: ['./registrar.component.css']
// })
// export class RegistrarComponent {
//   constructor() { }
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.registroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  registrarUsuario() {
    if (this.registroForm.valid) {
      this.http.post('http://localhost:8000/registrar', this.registroForm.value).subscribe({
        next: () => {
          alert('Registro exitoso');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Error en el registro:', err);
        }
      });
    }
  }
}
