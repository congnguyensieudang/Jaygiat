import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { MainComponent } from '../main/main.component';
import { SellComponent } from '../sell/sell.component';
import { OnGoingComponent } from '../sell/on-going/on-going.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: MainComponent
      },
      {
        path: 'sell',
        component: SellComponent,
        // children: [
        //   {
        //     path: '',
        //     redirectTo: 'on-going',
        //     pathMatch: 'full'
        //   },
        //   {
        //     path: 'on-going',
        //     component: OnGoingComponent
        //   },
        //   {
        //     path: 'closed'
        //   }
        // ]
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
