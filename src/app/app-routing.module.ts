import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { LoteriaComponent } from './componentes/loteria/loteria.component';
import { MultiplicarComponent } from './componentes/multiplicar/multiplicar.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { SaludorutaComponent } from './componentes/saludoruta/saludoruta.component';
import { TuberiasComponent } from './componentes/tuberias/tuberias.component';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';
import { FormularioClaseComponent } from './componentes/formulario-clase/formulario-clase.component';
import { CrudLocalComponent } from './componentes/crud-local/crud-local.component';
import { CrudMovilComponent } from './componentes/crud-movil/crud-movil.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { UserRouterGuard } from './auth/user-router.guard';
import { ListarPerfilesComponent } from './componentes/listar-perfiles/listar-perfiles.component';
import { MensajesComponent } from './componentes/mensajes/mensajes.component';
import { GraficaComponent } from './componentes/grafica/grafica.component';
import { MapaComponent } from './componentes/mapa/mapa.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "loteria", component:LoteriaComponent},
  {path: "calculadora", component:CalculadoraComponent},
  {path: "multiplicar/:factor", component:MultiplicarComponent},
  {path: "saludoRutaDinamica/:nombre/:apellido", component:SaludorutaComponent},
  {path: "tuberia", component:TuberiasComponent},
  {path: "estructuras", component:EstructurasComponent},
  {path: "formulario", component:FormularioClaseComponent},
  {path: "crud", component:CrudLocalComponent},
  {path: "moviles", component:CrudMovilComponent},
  {path: "registro", component:RegisterComponent},
  {path: "crud_bd", component:CrudComponent},
  {path: "login", component:LoginComponent},
  {path: "perfil", component:PerfilComponent, canActivate:[UserRouterGuard]},
  {path: "perfiles", component:ListarPerfilesComponent},
  {path: "mensajes", component:MensajesComponent},
  {path: "grafica", component:GraficaComponent},
  {path: "mapa", component:MapaComponent},
  {path: "**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }