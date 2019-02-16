import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    private movieProvider: MovieProvider) 
  {
  }

  public somaDoisNumeros(num1:number, num2:number): void{
    alert(num1+num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLastestMovies().subscribe(
      data => {
        const response = (data as any);
        //const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = response.results;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
