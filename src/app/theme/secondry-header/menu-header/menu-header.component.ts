import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {
  @Input() public drawer: any;
  constructor() { }

  ngOnInit(): void {
  }

}
