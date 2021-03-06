import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

nuevasCanciones: any[] = [];
loading: boolean;

constructor(private spotify: SpotifyService) {

  this.loading = true;

  this.spotify.getNewReleases()
      .subscribe((data: any) => {
      console.log(data);
      this.nuevasCanciones =  data;
      this.loading = false;
      });
 }

ngOnInit(){}
 
 /* paises: any[] = [];

  constructor( private http: HttpClient) {

    this.http.get('https://restcountries.eu/rest/v2/lang/es')
              .subscribe( (midata: any) => {
                this.paises = midata;
                console.log(midata); });
  }*/
}
