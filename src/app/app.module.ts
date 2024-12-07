import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AboutComponent } from './pages/about/about.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { PipesComponent } from './pages/pipes/pipes.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    AboutComponent,
    CapitalizadoPipe,
    PipesComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
