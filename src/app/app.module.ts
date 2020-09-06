import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MapComponent } from './map/map.component';
import { FeedComponent } from './feed/feed.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';
import { AdminGuard } from './guards/admin.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { UnSavedChangesGuard } from './guards/un-saved-changes.guard';
import { ResolveGuard } from './guards/resolve.guard';
import { UserServiceService } from './user-service.service';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},

  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent, children: [
    {path: 'location', outlet: 'map', component: MapComponent},
    {path: 'feedback', outlet: 'feeds', component: FeedComponent}
  ]},
  {path: 'user', component: UserComponent,
  resolve: { data: ResolveGuard},
  // canActivate: [AuthGuard]
},
  {path: 'user/:id', component: UserDetailsComponent,
  canActivate: [AuthGuard],
  canActivateChild : [AdminGuard],
  children: [
    // {path: '', pathMatch: 'full', redirectTo: 'address'},
    {path: 'address', component: AddressComponent},
    {path: 'company', component: CompanyComponent},
  ]},
  {path: 'addUser', component: AddUserComponent, canDeactivate:[UnSavedChangesGuard]},
  {path: '**', pathMatch: 'full', redirectTo: '/home'}
];
@NgModule({
  declarations: [
    // tslint:disable-next-line: max-line-length
    AppComponent, HomeComponent, AboutComponent, MapComponent, FeedComponent, UserComponent, UserDetailsComponent, AddressComponent, CompanyComponent, AddUserComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [UserServiceService, AuthGuard, AuthService, AdminGuard, UnSavedChangesGuard, ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
