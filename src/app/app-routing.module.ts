import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

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
  {
    path: 'terms-and-conditions', // <= Page URL ,
    loadChildren: () => import('./terms-and-conditions/terms-and-conditions.module')
      .then(m => m.TermsAndConditionsModule)
  },
  {
    path: 'policy-and-policy', // <= Page URL ,
    loadChildren: () => import('./privacy-and-policy/privacy-and-policy.module')
      .then(m => m.PrivacyAndPolicyModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'top',
 //   useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
