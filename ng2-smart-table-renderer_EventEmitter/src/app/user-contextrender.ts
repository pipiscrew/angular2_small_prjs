import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
    template: `
  <div ngbDropdown class="d-inline-block dropdown">
  <a class="btn btn-outline-primary" ngbDropdownToggle>Toggle dropdown</a>
  <div ngbDropdownMenu>
      <button class="dropdown-item" (click)="childEditUser(UserID)" >Edit</button>
      <button class="dropdown-item disabled">Another Action</button>
      <button class="dropdown-item disabled">Something else is here</button>
  </div>
</div>
  `,
})

export class UserlContextRenderComponent implements OnInit {
    public UserID: string;

    @Input()
    rowData: any;

    @Output() editUser = new EventEmitter();


    ngOnInit() {
        this.UserID = this.rowData.id; //field at JSON
    }

    childEditUser(UserID: string) {
        this.editUser.emit(UserID);
    }


}