import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//COMPONENTES
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

//RUTAS
import { APP_ROUTES } from './app.routes';

//MODULOS
import { PagesModule } from './pages/pages.module';

//TEMPORALES
import { FormsModule } from '@angular/forms';

//SERVICIOS
import { ServiceModule } from './services/service.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTES,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
