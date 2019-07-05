import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  template: `
  <div ngbDropdown class="d-inline-block dropdown">
  <a class="btn btn-outline-primary" ngbDropdownToggle>Toggle dropdown</a>
  <div ngbDropdownMenu>
  
      <button *ngFor="let item of callback; let i = index" class="dropdown-item" (click)="item.Action(this.rowData)" >{{item.Name}}</button>
      <button class="dropdown-item disabled">Another Action</button>
      <button class="dropdown-item disabled">Something else is here</button>
  </div>
</div>
  `,
})

export class UserlContextRenderComponent {
  public callback: object[];

  @Input()
  rowData: any;

}

