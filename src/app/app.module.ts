import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import "@angular/common/locales/global/es";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './componentes/about/about.component';
import { HomeComponent } from './componentes/home/home.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoteriaComponent } from './componentes/loteria/loteria.component';
import { GenerarloteriaComponent } from './componentes/generarloteria/generarloteria.component';
import { MultiplicarComponent } from './componentes/multiplicar/multiplicar.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { SaludorutaComponent } from './componentes/saludoruta/saludoruta.component';
import { TuberiasComponent } from './componentes/tuberias/tuberias.component';
import { NumerosPipe } from './pipes/numeros.pipe';
import { DniPipe } from './pipes/dni.pipe';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';
import { FormularioClaseComponent } from './componentes/formulario-clase/formulario-clase.component';
import { CrudLocalComponent } from './componentes/crud-local/crud-local.component';
import { CrudMovilComponent } from './componentes/crud-movil/crud-movil.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { EnviarTokenInterceptor } from './auth/enviar-token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavegacionComponent,
    LoteriaComponent,
    GenerarloteriaComponent,
    MultiplicarComponent,
    CalculadoraComponent,
    SaludorutaComponent,
    TuberiasComponent,
    NumerosPipe,
    DniPipe,
    EstructurasComponent,
    FormularioClaseComponent,
    CrudLocalComponent,
    CrudMovilComponent,
    RegistroComponent,
    CrudComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{provide:LOCALE_ID, useValue:"es"}, {provide: HTTP_INTERCEPTORS, useClass:EnviarTokenInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }