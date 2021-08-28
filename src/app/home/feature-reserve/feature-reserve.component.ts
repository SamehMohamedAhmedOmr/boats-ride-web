import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-reserve',
  templateUrl: './feature-reserve.component.html',
  styleUrls: ['./feature-reserve.component.css']
})
export class FeatureReserveComponent implements OnInit {

  lang = localStorage.getItem('lang');

  constructor() { }

  ngOnInit(): void {
  }

}
