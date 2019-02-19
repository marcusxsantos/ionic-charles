import { FilmeDetalhesPage } from './../filme-detalhes/filme-detalhes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public lista_filmes = new Array<any>();
  private loader;
  private refresher;
  private isRefresher: boolean = false;
  private infiniteScroll;
  public page = 1;

  public objeto_feed = {
    titulo: "Marcus Santos",
    data: "15/05/2019",
    descricao: "Analista de Sistemas",
    qtd_likes: "32",
    time_comment: "11h atrás",
    coments: 5
  }
  
  public nomeUsuario:string = "Marcus Xavier vindo do código";
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController) 
  {
  }

  abrrirCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando...",
    });
    this.loader.present();
  }

  fecharCarregamento() {
    this.loader.dismiss();
  }

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefresher = true;
    this.carregarFilmes();
  }

  ionViewDidEnter() {
    this.carregarFilmes();
  }

  carregarFilmes(newpage: boolean = false)
  {
    this.abrrirCarregando();
    this.movieProvider.getLastestMovies(this.page).subscribe(
      data => {
        const response = (data as any);
        //const objeto_retorno = JSON.parse(response._body);

        if(newpage)
        {
          this.lista_filmes = this.lista_filmes.concat(response.results);
          this.infiniteScroll.complete();
        }
        else
        {
          this.lista_filmes = response.results;
        }
        
        this.fecharCarregamento();
        if(this.isRefresher)
        {
          this.refresher.complete();
          this.isRefresher = false;
        }
      },
      error => {
        console.log(error);
        this.fecharCarregamento();
        if(this.isRefresher)
        {
          this.refresher.complete();
          this.isRefresher = false;
        }
      }
    );
  }
  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);
  }

  abrirDetalhes(filme){
    this.navCtrl.push(FilmeDetalhesPage, { id: filme.id});
  }
}
