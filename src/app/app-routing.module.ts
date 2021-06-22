import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {OffersComponent} from './offers/offers.component';
import {MainAboutComponent} from './main-about/main-about.component';
import {MainYachtRentalComponent} from './main-yacht-rental/main-yacht-rental.component';
import {MainDestinationComponent} from './main-destination/main-destination.component';
import {FishingTripComponent} from './fishing-trip/fishing-trip.component';
import {ServicesComponent} from './services/services.component';
import {WaterSportsComponent} from './water-sports/water-sports.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
    {path:'contact',component:ContactComponent},
  {path:'offers',component:OffersComponent},
  {path:'about',component:MainAboutComponent},
  {path:'yachtrental',component:MainYachtRentalComponent},
  {path:'destination',component:MainDestinationComponent},
  {path:'fishingtrip',component:FishingTripComponent},
  {path:'services',component:ServicesComponent},
  {path:'watersports',component:WaterSportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
