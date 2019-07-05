import { NgbModalOptions, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

export class Helper {

    //avoid modal close by ESC or by clicking outside the modal - https://stackoverflow.com/a/41590107
    //https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/modal/modal-config.ts
    static ngbModalOptions: NgbModalOptions = {
        backdrop: 'static',
        keyboard: false,
        size: 'lg'
    };



    //https://github.com/ng-bootstrap/ng-bootstrap/blob/master/demo/src/app/components/modal/demos/basic/modal-basic.ts
    static getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}