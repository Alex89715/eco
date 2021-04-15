import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberoneComponent } from './components/numberone/numberone.component';
import { NumbertwoComponent } from './components/numbertwo/numbertwo.component';
import { NumberthreeComponent } from './components/numberthree/numberthree.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';

const appRoutes: Routes = [
  {path: '', component: MainpageComponent},
  {path: 'microplastic', component: NumberoneComponent},
  {path: 'kak_perestat_byt_varvarom', component: NumbertwoComponent},
  {path: 'decyat_privychek', component: NumberthreeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NumberoneComponent,
    NumbertwoComponent,
    NumberthreeComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }