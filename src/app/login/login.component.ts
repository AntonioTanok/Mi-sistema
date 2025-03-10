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
  loginForm: FormGroup ;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  iniciarSesion() {
    console.log("iniciarSesion() function")
    console.log("Datos del formulario:", this.loginForm.value);

    if (this.loginForm.invalid) {
       console.error('Formulario inválido');
       alert('¡Formulario Invalido!.'); //sustituir por estilos dentro del form login
       return;
    }

    console.log("la info del form es valida, se procedera a realiza la llamada de login a la api")

    //json con datos de email y password a utilizar para la llamada de la api
    const loginData = this.loginForm.value;

    //llamada a api de login

    console.log("loginData: ", loginData)
    console.log("llamando endpoint login...")

    this.http.post<{ token: string}> ('http://localhost:8000/login', loginData).subscribe({
      next: (response) => {
        console.log("llamada api existosa")
        //lo que va a pasar cuando la api responda exitosamente con codigo 200 (el json recibido desde la api cae en response)

        // Extraer el token del response y guardarlo en localStorage
        if (response && response.token) {
          localStorage.setItem('token', response.token); // Guardar token en localStorage
          console.log('Token almacenado en localStorage:', response.token);
          // Recargar la página después de guardar el token
          location.reload();
        } else {
          console.warn('No se recibió un token en la respuesta.');
        }
      },
      error: (error) => {
        console.log("error durante llamada a la api")
        //lo que sucede cuando la api responde con un error
      }
    });






    // this.http.post<{ token: string }>('http://localhost:8000/login', loginData).subscribe({
    //   next: (response) => {
    //     console.log('Respuesta recibida:', response);

    //     if (response && response.token) {
    //       localStorage.setItem('token', response.token);
    //       console.log('Token almacenado en localStorage:', response.token);
    //       // Recargar la página después de un inicio de sesión exitoso
    //       location.reload();

    //     } else {
    //       console.warn('No se recibió un token en la respuesta.');
    //     }
    //   },
    //   error: (error) => {
    //     console.error('Error en la solicitud:', error);
    //   }
    // });
  }


}
