import {ChangeDetectorRef, Component, HostListener, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ResizeServiceService} from '../../core/services/Helpers/resize-service.service';
import {YachtService} from '../../core/services/yacht.service';
import {Yacht} from '../../Models/yacht';
import {LocalStorageService} from "../../core/services/localStorage.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-yacht-rental',
  templateUrl: './yacht-rental.component.html',
  styleUrls: ['./yacht-rental.component.css']
})
export class YachtRentalComponent implements OnInit {
  public yachts: Yacht [] = [];
  lang:string | null = 'en';

  is_loading:boolean = true;
  isBrowser: boolean = false;

  constructor(private resizeServiceService: ResizeServiceService,
              private yachtService: YachtService,
              @Inject(PLATFORM_ID) private platformId: any,
              private localStorageService: LocalStorageService,
              private cdr: ChangeDetectorRef) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  numberofcells = 3;

  ngOnInit(): void {
    this.lang = this.localStorageService.getItem('lang');
    this.numberofcells = this.resizeServiceService.checkWindowSize();
    this.getYachts();
  }


  @HostListener('window:resize', ['$event'])

  // tslint:disable-next-line:typedef
  onResize(event: { target: { innerWidth: any; }; }) {
    this.numberofcells = this.resizeServiceService.checkWindowSize();
  }

  getYachts() {
    this.yachtService.getYachtsForHome().subscribe(data => {
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
