import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../../../core/services/localStorage.service";

@Component({
  selector: 'app-feature-reserve',
  templateUrl: './feature-reserve.component.html',
  styleUrls: ['./feature-reserve.component.css']
})
export class FeatureReserveComponent implements OnInit {

  lang:string | null = 'en';

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.lang = this.localStorageService.getItem('lang');
  }

}
