import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloWorld } from './primerComponente/primer.component';
import { TeteraComponent } from './tetera/tetera.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';

const routes: Route[] = [
  { path: '', component: AppComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    TeteraComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
