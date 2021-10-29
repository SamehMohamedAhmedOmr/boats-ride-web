import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Yacht} from '../../../Models/yacht';
import {YachtService} from '../../../core/services/yacht.service';
import {SeoService} from "../../../core/services/seo.service";
import {LocalStorageService} from "../../../core/services/localStorage.service";

@Component({
  selector: 'app-new-year-yachts',
  templateUrl: './new-year-yachts.component.html',
  styleUrls: ['./new-year-yachts.component.css']
})
export class NewYearYachtsComponent implements OnInit {

  public yachts: Yacht [] = [];
  is_loading:boolean = true;
  lang:string | null = 'en';
  yachts_prices: any;
  new_year_yachts_slugs: any;

  constructor(private yachtService: YachtService,
              private seoService:SeoService,
              private localStorageService: LocalStorageService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.lang = this.localStorageService.getItem('lang');
    this.getSeo();
    this.getYachts();
    this.prepareNewYearPrices();
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

prepareNewYearPrices(){
  this.yachts_prices = [
    {
         slug: 'mini-yacht',
         price: 8000
    },
    {
      slug: 'gulf-craft-45ft',
      price: 14000
    },
    {
      slug: 'azimot-52ft',
      price: 18000
    },
    {
      slug: 'majesty-48ft',
      price: 17000
    },
    {
      slug: 'gulf-craft-55ft',
      price: 23000
    },
    {
      slug: 'majesty-56ft',
      price: 25000
    },
    {
      slug: 'sunseeker-56ft',
      solid_out: true,
      price: 25000
    },
    {
      slug: 'majesty-63ft',
      price: 30000,
    },
    {
      slug: 'seline-yacht-63ft',
      price: 26000,
    },
    {
      slug: 'sunseeker-64ft',
      price: 33000,
    },
    {
      slug: 'nuvari-68ft',
      price: 30000,
    },
    {
      slug: '68ft',
      price: 28000,
    },
    {
      slug: 'gulf-craft-71ft',
      price: 35000,
    },
    {
      slug: '72ft-vip-princess',
      solid_out: true,
      price: 35000
    },
    {
      slug: 'majesty-ruby-75ft',
      price: 58000,
    },
    {
      slug: 'azimut-with-jacuzzi-80ft',
      price: 48000,
    },
    {
      slug: 'duretti-80ft-with-jacuzzi',
      price: 45000,
    },
    {
      slug: 'abu-mubarak-with-jacuzzi-85ft',
      price: 52000,
    },
    {
      slug: 'majesty-88ft',
      price: 68000,
    },
    {
      slug: 'dream-yacht-90ft',
      price: 65000,
    },
    {
      slug: 'black-diamond-101ft',
      price: 75000,
    },
    {
      slug: '95ft-with-jacuzzi',
      price: 68000,
    },
    {
      slug: '90ft',
      price: 65000,
    },
    {
      slug: 'boat-32ft',
      price: 5000,
    },
    {
      slug: 'boat-36ft',
      price: 8000,
    },
    {
      slug: 'dinner-cruise',
      price: 1999,
    },
    
  ];
    let result: any[] = [];
  
    this.yachts_prices.forEach(function(element: any){
    result.push(element.slug);  
  });
   
  this.new_year_yachts_slugs  = result;
   
}  

isValidYacht(slug: string){
  return this.new_year_yachts_slugs.includes(slug);
}

getNewYearPrice(slug: string){
  
  let target = this.yachts_prices.find((value: any, index: any) => value.slug == slug);
console.log(target, slug);
  if(target){
    return target.price;
  }

  return 0;
}

isSoldOut(slug: any){
  let target = this.yachts_prices.find((value: any, index: any) => value.slug == slug);

    return target?.solid_out;  
}

}
