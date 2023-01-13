import {Component, Input, OnInit} from '@angular/core';
import {Yacht} from "../../../../Models/yacht";
import {LocalStorageService} from "../../../../core/services/localStorage.service";

@Component({
  selector: 'app-destinations-specification',
  templateUrl: './destinations-specification.component.html',
  styleUrls: ['./destinations-specification.component.css']
})
export class DestinationsSpecificationComponent implements OnInit {

  // @ts-ignore
  @Input() yacht: Yacht;
  lang:string | null = 'en';

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.lang = this.localStorageService.getItem('lang');
  }

}
