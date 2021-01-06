import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//PETICIONES HTTP
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HerosComponent } from './components/heros/heros.component';
import { AboutComponent } from './components/about/about.component';

//ROUTE
import { RouterModule } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { Error404Component } from './components/error404/error404.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HomeComponent } from './components/home/home.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CapitalizadoPipe } from './pipes/capitalizado/capitalizado.pipe';
import { DomSeguroPipe } from './pipes/domseguro/domseguro.pipe';
import { PasswordPipe } from './pipes/password/password.pipe';
import { CustomHerosComponent } from './components/custom-heros/custom-heros.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HerosComponent,
    AboutComponent,
    BuscadorComponent,
    Error404Component,
    HeroCardComponent,
    HomeComponent,
    PipesComponent,
    NavbarComponent,
    FooterComponent,
    CapitalizadoPipe,
    DomSeguroPipe,
    PasswordPipe,
    CustomHerosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component:HomeComponent},
      {path: '', component:HomeComponent},
      {path: 'heros', component:HerosComponent},
      {path: 'añadir', component:CustomHerosComponent},
      {path: 'about', component:AboutComponent},
      {path: 'pipes', component:PipesComponent},
      {path: 'hero/:id', component:HeroComponent},
      {path: 'results/:termino', component:BuscadorComponent},
      {path: '**', pathMatch:'full', component:Error404Component}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
