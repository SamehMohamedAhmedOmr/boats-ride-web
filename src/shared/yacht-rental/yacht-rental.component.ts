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
  public yachts: Yacht [] = [];
  lang = localStorage.getItem('lang');

  is_loading:boolean = true;

  constructor(private resizeServiceService: ResizeServiceService,
              private yachtService: YachtService,
              private cdr: ChangeDetectorRef) {
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

  getYachts() {
    this.yachtService.getYachts().subscribe(data => {
      this.yachts = data;
      this.is_loading = false;
      this.cdr.markForCheck();
    });
  }

  firstImage(images: any){
    // @ts-ignore
    let target = images.find((value, index) => index == 0);
    // @ts-ignore
    return target?.image;
  }
}
