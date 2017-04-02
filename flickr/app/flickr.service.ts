import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FlickrService {
constructor (private http: Http) {}

    public getImages() {
    /*
            let g = {
            'per_page' : 5,
            'api_key' : '0eb28a07a69f3c7484b9709f148ce289'
        }
        

        let body = JSON.stringify(g);
        */

/*
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

        
        return this.http.post("https://api.flickr.com/services/rest/?method=flickr.photos.getRecent", body, { headers });
  */    
  
        //https://www.flickr.com/services/api/
        //http://stackoverflow.com/a/40027725 -- remove the json obj parent
        //http://stackoverflow.com/a/23911125 -- show the full url on json
        return this.http.post("https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=5&format=json&nojsoncallback=1&extras=url_t&api_key=_YOUR_KEY_HERE", "");
    }
    
}