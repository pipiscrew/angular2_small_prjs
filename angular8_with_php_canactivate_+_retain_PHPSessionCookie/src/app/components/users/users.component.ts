import { Component, OnInit } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';
import { PostServerDataSource } from 'src/app/postserverdatasource';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private baseUrl = environment.baseUrl;

  title = 'AngularProject';

  settings = {
    pager: { perPage: 50 },                            //pagination – rows per page
    hideSubHeader: true,                             //hide columns searchboxes for search
    actions: { add: false, edit: false, delete: false },   //hide first column having ADD DELETE anchors
    attr: { class: "table table-hover table-striped" },  //use bootstrap zebra style
    columns: {
      id: {
        title: 'ID',
      },
      albumId: {
        title: 'App',
      },
      title: {
        title: 'Developer',
      },
      url: {
        title: 'Url',
      },
    },
  };

  source: ServerDataSource;

  constructor(http: HttpClient) {
    //this.source = new ServerDataSource(http, { endPoint: 'https://jsonplaceholder.typicode.com/photos' });
    this.source = new PostServerDataSource(http, { endPoint: this.baseUrl + '/api/users.php' });

  }

  ngOnInit(): void {

  }
}
