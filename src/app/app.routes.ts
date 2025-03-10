import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { FacturasComponent } from './facturas/facturas.component';
import { AltaProveedorComponent } from './alta-proveedor/alta-proveedor.component';
// import { RegistrarComponent } from './registrar/registrar.component';

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
  // { path: 'registrar', component: RegistrarComponent },  // Ruta para Registrar
];
