import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HelloComponent } from './app/hello.component';
import { RetoComponent } from './reto/reto.component';
import { AhorroComponent } from './app/ahorro/ahorro.component';

const routes: Routes = [
  { path:  '', redirectTo:  'contacts', pathMatch:  'full' },
  { path: 'my-app', component: AppComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'reto', component: RetoComponent },
  { path: 'app-ahorro', component: AhorroComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 