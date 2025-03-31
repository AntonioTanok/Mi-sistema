import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurar-credenciales',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],  // ✅ Importar los módulos necesarios
  templateUrl: './restaurar-credenciales.component.html',
  styleUrls: ['./restaurar-credenciales.component.css'],
})
export class RestaurarCredencialesComponent {
  resetForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  solicitarNuevaContrasena() {
    if (this.resetForm.valid) {
      const email = this.resetForm.value.email;
      console.log(`Solicitud enviada para: ${email}`);
      alert('Se ha enviado una solicitud al administrador para restablecer tu contraseña.');
    }
  }
}
