import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent {

    numberToAddThreeTo: number = 2 // This is the default value

    constructor() {

    }

}
