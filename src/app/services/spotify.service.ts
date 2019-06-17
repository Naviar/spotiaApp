import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('spotify service listo');
   }

   getQuery(query: string){
     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQANHvHU4sieRWGmPJjaosXFW2T7NhbcBcsyQ24HFHDRSJJ7AR2zlB9AROOkR1mMY0Kp5weTtrGD4E8pJVw'
     });
     return this.http.get(url , { headers });
   }

   getNewReleases(){
  
    return this.getQuery('browse/new-releases?limit=20')
    .pipe(map( data => {
    return data['albums'].items;
    }));
   }

   getArtista(termino: string){
   
    return this.getQuery(`search?query=${termino}&type=artist&market=CO&offset=0&limit=15`)
    .pipe(map(data => {
    return data['artists'].items;
    }));
   }
   
}
