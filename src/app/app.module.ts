import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { PresentersPage } from '../pages/presenters/presenters';
import { PresenterDetailsPage } from '../pages/presenter-details/presenter-details';
import { VenuesPage } from '../pages/venues/venues';
import { VenueDetailsPage } from '../pages/venue-details/venue-details';
import { WdiconfVenues } from '../providers/wdiconf-venues';
import { WdiconfPresenters } from '../providers/wdiconf-presenters';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { EventsPage } from '../pages/events/events';
import { EventDetailsPage } from '../pages/event-details/event-details';
import { WdiconfEvents } from '../providers/wdiconf-events';
import { ProfilePage } from '../pages/profile/profile';
import { UserLogin } from '../providers/user-login';
import { PurchasePage } from '../pages/purchase/purchase';

// AUthentication
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { tokenNotExpired } from 'angular2-jwt';

let storage = new Storage();



export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'bearer',
    noJwtError: true,
    globalHeaders: [{'Accept': 'application/json'}],
    tokenGetter: (() => storage.get('id_token')),
  }), http);
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PresentersPage,
    PresenterDetailsPage,
    VenuesPage,
    VenueDetailsPage,
    ProfilePage,
    EventsPage,
    EventDetailsPage,
    AboutPage,
    PurchasePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PresentersPage,
    PresenterDetailsPage,
    VenuesPage,
    VenueDetailsPage,
    ProfilePage,
    EventsPage,
    EventDetailsPage,
    AboutPage,
    PurchasePage

  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WdiconfVenues,
    WdiconfPresenters,
    WdiconfEvents,
    UserLogin,
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    }
  ]

})
export class AppModule {}
