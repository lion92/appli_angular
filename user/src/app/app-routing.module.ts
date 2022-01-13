import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import{AddComponent} from './add/add.component';
const routes: Routes = [  {
                            path:'user2',
                            component:UserComponent
                          },{
                          path:"add",
                          component:AddComponent}
                     ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
