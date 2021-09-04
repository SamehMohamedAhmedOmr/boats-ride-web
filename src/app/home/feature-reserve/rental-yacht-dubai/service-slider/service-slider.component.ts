import {Component, Input, OnInit} from '@angular/core';
import {Services} from "../../../../../Models/services";

@Component({
  selector: 'app-service-slider',
  templateUrl: './service-slider.component.html',
  styleUrls: ['./service-slider.component.css']
})
export class ServiceSliderComponent implements OnInit {

  @Input() Services: Services [] = [];
  @Input() numberOfCell: number = 4;

  constructor() {
  }

  ngOnInit(): void {
  }

}
