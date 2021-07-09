import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogsComponent} from './blogs/blogs.component';
import {BlogDetailsComponent} from './blogs/blog-details/blog-details.component';

const routes: Routes = [
  {
    path: '', // <= Page URL ,
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'contact', // <= Page URL ,
    loadChildren: () => import('./contact/contact.module')
      .then(m => m.ContactModule)
  },
  {
    path: 'offers', // <= Page URL ,
    loadChildren: () => import('./offers/offers.module')
      .then(m => m.OffersModule)
  },
  {
    path: 'about', // <= Page URL ,
    loadChildren: () => import('./main-about/about.module')
      .then(m => m.AboutModule)
  },
  {
    path: 'destination', // <= Page URL ,
    loadChildren: () => import('./main-destination/destination.module')
      .then(m => m.DestinationModule)
  },
  {
    path: 'fishing-trip', // <= Page URL ,
    loadChildren: () => import('./fishing-trip/fishing-trip.module')
      .then(m => m.FishingTripModule)
  },
  {
    path: 'services', // <= Page URL ,
    loadChildren: () => import('./services/services.module')
      .then(m => m.ServicesModule)
  },
  {
    path: 'water-sports', // <= Page URL ,
    loadChildren: () => import('./water-sports/water-sports.module')
      .then(m => m.WaterSportsModule)
  },
  {
    path: 'yachts', // <= Page URL ,
    loadChildren: () => import('./yachts/yachts.module')
      .then(m => m.YachtsModule)
  },
  {
    path: 'blogs', // <= Page URL ,
    loadChildren: () => import('./blogs/blogs.module')
      .then(m => m.BlogsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
