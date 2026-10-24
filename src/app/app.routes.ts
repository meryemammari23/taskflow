import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { About } from './about/about';
import { MyComponent } from './my-component/my-component';
import { NgModuleEx } from './ng-module-ex/ng-module-ex';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: About },
  { path: 'my-component', component: MyComponent },
  { path: 'ng-module-ex', component: NgModuleEx },
  { path: '**', redirectTo: '' }
];