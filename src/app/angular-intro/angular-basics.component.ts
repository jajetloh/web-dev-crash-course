import { Component } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalContentComponent } from "../modal-content/modal-content.component";

@Component({
  selector: 'app-angular-basics',
  templateUrl: './angular-basics.component.html',
  styleUrls: ['./angular-basics.component.css']
})
export class AngularBasicsComponent {
    numberToAddThreeTo: number = 2 // This is the default value

    constructor(private modalService: NgbModal) {

    }

    openModal() {
        this.modalService.open(ModalContentComponent)
    }
}
