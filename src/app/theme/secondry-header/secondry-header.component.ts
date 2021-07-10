import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-secondry-header',
  templateUrl: './secondry-header.component.html',
  styleUrls: ['./secondry-header.component.css']
})
export class SecondryHeaderComponent implements OnInit {
@Input() public drawer: any;
  constructor() { }

  ngOnInit(): void {
  }

}
