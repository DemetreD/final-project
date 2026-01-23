import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/role.guard';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'products', component: ProductsComponent },
  { 
  path: 'products', 
  loadComponent: () =>
    import('./pages/products/products.component').then(m => m.ProductsComponent)
  },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  // { path: 'checkout', loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent) },
  { path: 'checkout', canActivate: [authGuard], loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent) },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent) },
  { path: 'admin', component: AdminComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'blog', component: BlogComponent },
  { path: 'admin', canActivate: [adminGuard], loadComponent: () => import('./pages/admin/admin.component').then(m => m.AdminComponent) },
  { path: '**', redirectTo: '' },
];
