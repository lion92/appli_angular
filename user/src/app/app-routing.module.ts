import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import{CardComponent} from './card/card.component';
const routes: Routes = [  {
                            path:'user2',
                            component:UserComponent
                          },{
                          path:"add",
                          component:CardComponent}
                     ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
