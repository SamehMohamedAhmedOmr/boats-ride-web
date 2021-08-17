import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Yacht} from '../../../Models/yacht';
import {YachtService} from '../../../core/services/yacht.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public yachts: Yacht [] = [];
  is_loading:boolean = true;
  lang = localStorage.getItem('lang');

  constructor(private yachtService: YachtService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getYachts();
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
