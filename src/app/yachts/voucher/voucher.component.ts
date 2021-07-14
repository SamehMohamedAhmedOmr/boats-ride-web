import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {YachtService} from '../../../core/services/yacht.service';
import {ActivatedRoute} from '@angular/router';
import {Voucher} from '../../../Models/voucher';
import { DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit {
  // @ts-ignore
  voucher: Voucher;
  booking_number:any;
  voucher_link:any;
  constructor(private voucherService:YachtService,
              private route: ActivatedRoute,
              private cdr:ChangeDetectorRef,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.booking_number = this.route.snapshot.params['booking_number'];
    this.getVoucher();
  }
  getVoucher(){
    this.voucherService.getVoucher(this.booking_number).subscribe(data => {
      this.voucher=data;
      this.cdr.markForCheck();
      if (this.voucher){
        this.transform();
      }
    })
  }
  transform() {
    this.voucher_link =  this.sanitizer.bypassSecurityTrustResourceUrl(this.voucher.url);
    this.cdr.markForCheck();
  }
}
