import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToggleHeaderService} from '../../core/services/Helpers/toggle.header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy{

  constructor(private toggleHeader:ToggleHeaderService) {
  }

  ngOnInit(): void {
    this.toggleHeader.changeHeader(true);
  }

  ngOnDestroy(): void {
    this.toggleHeader.changeHeader(false);
  }

}
