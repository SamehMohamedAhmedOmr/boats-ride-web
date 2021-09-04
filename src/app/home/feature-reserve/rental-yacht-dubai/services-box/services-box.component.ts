import {Component, Input, OnInit} from '@angular/core';
import {Services} from "../../../../../Models/services";

@Component({
  selector: 'app-services-box',
  templateUrl: './services-box.component.html',
  styleUrls: ['./services-box.component.css']
})
export class ServicesBoxComponent implements OnInit {

  @Input() Services: Services [] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
