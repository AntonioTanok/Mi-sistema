import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, CommonModule, RouterModule] // Importamos ReactiveFormsModule
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  iniciarSesion() {
    console.log("iniciarSesion() function");
    console.log("Datos del formulario:", this.loginForm.value);
  
    // Verificación de formulario
    if (this.loginForm.invalid) {
      console.error('Formulario inválido');
      alert('¡Formulario Inválido!.'); // Alerta si el formulario es inválido
      return;
    }
  
    console.log("Formulario válido, procediendo con la llamada a la API");
  
    // Obtenemos los datos del formulario
    const loginData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
  
    // Llamada a la API de login
    console.log("loginData:", loginData);
    console.log("Realizando llamada al endpoint login...");
  
    this.http.post<{ token: string, name: string }>('http://localhost:8000/login', loginData).subscribe({
      next: (response) => {
        console.log("Llamada a la API exitosa");
  
        // Verificar si la respuesta contiene el token
        if (response && response.token) {
          localStorage.setItem('token', response.token); // Guardar el token en localStorage
          localStorage.setItem('username', response.name); // Guardar el nombre en localStorage
          console.log('Token almacenado en localStorage:', response.token);
          
          // Recargar la página para reflejar el inicio de sesión
          location.reload();
        } else {
          console.warn('No se recibió un token en la respuesta.');
        }
      },
      error: (error) => {
        console.error('Error durante la llamada a la API:', error);
  
        // Manejo de error por status code 401
        if (error.status === 401) {
          alert('Credenciales incorrectas, por favor intenta nuevamente.');
        } else {
          alert('Error en el inicio de sesión. Verifica las credenciales.');
        }
      }
    });
  }
  
}
