import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { FacturasComponent } from './facturas/facturas.component';
import { AltaProveedorComponent } from './alta-proveedor/alta-proveedor.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DocumentacionProveedorComponent } from './documentacion-proveedor/documentacion-proveedor.component';
import { FacturaPagoComponent } from './factura-pago/factura-pago.component';
import { RestaurarCredencialesComponent } from './restaurar-credenciales/restaurar-credenciales.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'proveedores', component: ProveedoresComponent},
  { path: 'facturas', component: FacturasComponent },
  { path: 'alta-proveedor', component: AltaProveedorComponent },
  { path: 'registrar', component: RegistrarComponent },  // Ruta para Registrar
  { path: 'usuarios', component: UsuariosComponent },  // Ruta para Registrar
  { path: 'perfil', component: PerfilComponent },  // Ruta para Perfil
  { path: 'documentacion-proveedor', component: DocumentacionProveedorComponent },  // Ruta para revisar documentacion
  { path: 'factura-pago', component: FacturaPagoComponent },  // Ruta para revisar documentacion
  { path: 'restaurar-credenciales', component: RestaurarCredencialesComponent },  // Ruta para revisar documentacion




];
