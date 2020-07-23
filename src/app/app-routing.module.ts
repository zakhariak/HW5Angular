import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { WorksCenzorComponent } from './pages/works/works-cenzor/works-cenzor.component';
import { WorksUserlistComponent } from './pages/works/works-userlist/works-userlist.component';
import { WorksTasklistComponent } from './pages/works/works-tasklist/works-tasklist.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'works', redirectTo: 'works/cenzor', pathMatch: 'full' },
  {
    path: 'works', component: WorksComponent, children: [
      { path: 'cenzor', component: WorksCenzorComponent },
      { path: 'userlist', component: WorksUserlistComponent },
      { path: 'tasklist', component: WorksTasklistComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
