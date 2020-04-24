import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { RetoComponent } from './reto/reto.component';

const routes: Routes = [
  { path:  '', redirectTo:  'contacts', pathMatch:  'full' },
    {
    path: 'app-reto',
    component: RetoComponent
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 