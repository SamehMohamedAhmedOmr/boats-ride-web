import {ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {ResizeServiceService} from '../../core/services/Helpers/resize-service.service';
import {YachtService} from '../../core/services/yacht.service';
import {Yacht} from '../../Models/yacht';

@Component({
  selector: 'app-yacht-rental',
  templateUrl: './yacht-rental.component.html',
  styleUrls: ['./yacht-rental.component.css']
})
export class YachtRentalComponent implements OnInit {
  public yachts : Yacht [] = [];
  constructor(private resizeServiceService: ResizeServiceService,private yachtService:YachtService, private cdr:ChangeDetectorRef) {
  }

  numberofcells = 3;

  ngOnInit(): void {
    this.numberofcells = this.resizeServiceService.checkWindowSize();
    this.getYachts();
  }


  @HostListener('window:resize', ['$event'])

  // tslint:disable-next-line:typedef
  onResize(event: { target: { innerWidth: any; }; }) {
    this.numberofcells = this.resizeServiceService.checkWindowSize();
  }

  getYachts(){
    this.yachtService.getYachts().subscribe(data =>{
      this.yachts = data;
      console.log(this.yachts);
      this.cdr.markForCheck();
    })
  }
}
