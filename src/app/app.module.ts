import { FilmeDetalhesPage } from './../pages/filme-detalhes/filme-detalhes';
import { PerfilPageModule } from './../pages/perfil/perfil.module';
import { SobrePageModule } from './../pages/sobre/sobre.module';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { FeedPageModule } from "../pages/feed/feed.module";
import { IntroPageModule } from "../pages/intro/intro.module";
import { MovieProvider } from '../providers/movie/movie';
import { ConfigProvider } from '../providers/config/config';
import { ConfiguracoesPageModule } from "../pages/configuracoes/configuracoes.module";
import { FilmeDetalhesPageModule } from '../pages/filme-detalhes/filme-detalhes.module';

@NgModule({
  declarations: [MyApp, AboutPage, ContactPage, HomePage, TabsPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    FeedPageModule,
    IntroPageModule,
    ConfiguracoesPageModule,
    SobrePageModule,
    PerfilPageModule,
    FilmeDetalhesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, AboutPage, ContactPage, HomePage, TabsPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MovieProvider,
    ConfigProvider
  ]
})
export class AppModule {}
