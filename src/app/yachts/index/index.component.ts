import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Yacht} from '../../../Models/yacht';
import {YachtService} from '../../../core/services/yacht.service';
import {SeoService} from "../../../core/services/seo.service";
import {LocalStorageService} from "../../../core/services/localStorage.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public yachts: Yacht [] = [];
  is_loading:boolean = true;
  lang:string | null = 'en';

  constructor(private yachtService: YachtService,
              private seoService:SeoService,
              private localStorageService: LocalStorageService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.lang = this.localStorageService.getItem('lang');
    this.getSeo();
    this.getYachts();
  }

  getYachts() {
    this.yachtService.getYachts().subscribe(data => {
      this.yachts = data;
      this.is_loading = false;
      this.cdr.markForCheck();
    });
  }

  getSeo(){
    this.seoService.Seo('yachts').subscribe(seo => {
      this.seoService.updateMetaTags(seo);
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
