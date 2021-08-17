import {Component, Input, OnInit} from '@angular/core';
import {Yacht} from "../../../../Models/yacht";

@Component({
  selector: 'app-destinations-specification',
  templateUrl: './destinations-specification.component.html',
  styleUrls: ['./destinations-specification.component.css']
})
export class DestinationsSpecificationComponent implements OnInit {

  // @ts-ignore
  @Input() yacht: Yacht;
  lang = localStorage.getItem('lang');

  constructor() {
  }

  ngOnInit(): void {
  }

}
