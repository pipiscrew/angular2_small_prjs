import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-user-m',
  templateUrl: './user-m.html'
})

export class UserMComponent  {
  @Input() id : string;

  constructor(private activeModal: NgbActiveModal) { }

}