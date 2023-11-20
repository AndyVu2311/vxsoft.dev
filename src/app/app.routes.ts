import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { LayoutComponent } from './shared/layout.component'
import { AboutComponent } from './pages/about/about.component'
import { UsesComponent } from './pages/uses/uses.component'
import { WorksComponent } from './pages/works/works.component'

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'uses', component: UsesComponent },
      { path: 'works', component: WorksComponent },
    ],
  },
]
