import { environment } from './../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';
import { UserlContextRenderComponent } from 'src/app/user-contextrender';
import { UserMComponent } from 'src/app/modal/user-m';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private loading = false;
  private divStyle = 1;

  private apiEndPoint = environment.apiEndPoint;
  private gridDatasource: ServerDataSource;
  private gridSettings: object;


  constructor(private http: HttpClient, private modalService: NgbModal) { 
    /*
      Constructor vs OnInit -               https://ultimatecourses.com/blog/exploring-angular-lifecycle-hooks-oninit
      Angular constructor versus ngOnInit - https://ultimatecourses.com/blog/angular-constructor-ngoninit-lifecycle-hook
      Arrow functions -                     https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/
    */
  }

  ngOnInit() {
    this.setupGrid();
    this.loadGrid();
  }


  setupGrid() {
    var _this = this;

    this.gridSettings = {
      pager: { perPage: 50 },
      hideSubHeader: true,
      actions: { add: false, edit: false, delete: false },
      attr: { class: "table table-hover table-striped" },
      columns: {
        Actions: {
          title: 'Actions',
          type: 'custom',
          renderComponent: UserlContextRenderComponent,
          onComponentInitFunction(instance: UserlContextRenderComponent) {

            instance.editUser.subscribe(function (exchange) {

              const modalRef = _this.modalService.open(UserMComponent);
              modalRef.componentInstance.id = exchange;
              console.log("1", exchange);
              
            });

          }
        },
        thumbnailUrl: {
          title: 'thumbnailUrl',
        },
        title: {
          title: 'title'
        },
        url: {
          title: 'url', 
        }
      },
    };
  }


  loadGrid() {
    this.loading = true;
    this.divStyle = 0.3;

    this.gridDatasource = new ServerDataSource(this.http, { endPoint: './assets/data.json' });

    //when loading completed
    this.gridDatasource.onChanged().subscribe(e => {
      console.log("!!");
      this.loading = false;
      this.divStyle = 1;
    });
  }


}





