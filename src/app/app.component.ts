import {Component, OnInit} from '@angular/core';
import { NgxUiLoaderService } from "ngx-ui-loader";
import {ToggleHeaderService} from '../core/services/Helpers/toggle.header.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private ngxService: NgxUiLoaderService,private toggleHeader:ToggleHeaderService) {}
  title = 'Boats Ride - Yacht Rental Dubai Marina | Yacht Charter Dubai | Boats Rental Dubai Marina | www.boatsride.com';
  isHome :boolean = false;
  ngOnInit() {
    this.subscribeHeader();
    this.ngxService.start(); // start foreground spinner of the master loader with 'default' taskId
    // Stop the foreground loading after 5s
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 3000);
  }

  subscribeHeader(){
    this.toggleHeader.currentHeader.subscribe(data =>{
      this.isHome = data;
    })
  }
}
