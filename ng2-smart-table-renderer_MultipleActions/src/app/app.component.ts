import { environment } from './../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';
import { UserlContextRenderComponent } from 'src/app/user-contextrender';
import { UserMComponent } from 'src/app/modal/user-m';
import { Helper } from 'src/app/modal/helper';

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

            instance.callback = [
              {
                Name: 'Edit',
                Action: _this.contextEdit.bind(_this)
              },
              {
                Name: 'Show row data',
                Action: _this.contextDelete.bind(_this)
              }
            ];

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

  contextEdit(x) {
    console.log(x);

    if (x) {
      if (!x.id) {
        alert("something wrong");
        return;
      }
    } 

    //show modal
    const modalRef = this.modalService.open(UserMComponent, Helper.ngbModalOptions);
    
    modalRef.componentInstance.title = "Edit User";
    modalRef.componentInstance.id = x.id;

    //find how closed
    modalRef.result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${Helper.getDismissReason(reason)}`);
    });

  }

  contextDelete(x) {
    alert("row data : " + JSON.stringify(x, null, 4));
    console.log(x);
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





