import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowdropdownComponent } from './showdropdown/showdropdown.component';

const routes: Routes = [
  {path:"open",component:ShowdropdownComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
