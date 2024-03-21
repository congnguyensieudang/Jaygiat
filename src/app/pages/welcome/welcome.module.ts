import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { FormsModule } from '@angular/forms';
import { MainComponent } from '../main/main.component';
import { CommonModule } from '@angular/common';
import { SellComponent } from '../sell/sell.component';
import { ClosedComponent } from '../sell/closed/closed.component';
import { OnGoingComponent } from '../sell/on-going/on-going.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { LiveAuctionComponent } from '../sell/live-auction/live-auction.component';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    CommonModule,
    FormsModule,
    IconsProviderModule,
    ComponentsModule

  ],
  declarations: [
    WelcomeComponent,
    MainComponent,
    SellComponent,
    ClosedComponent,
    OnGoingComponent,
    LiveAuctionComponent,
    ClosedComponent
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
