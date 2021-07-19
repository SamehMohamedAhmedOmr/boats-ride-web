import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";
import {FormErrorService} from "../../core/services/Helpers/FormError.service";
import {AuthNoticeService} from "../../core/services/Helpers/auth-notice.service";
import {HelperService} from "../../core/services/Helpers/helper.service";
import {YachtBookingModel} from "../../Models/yachts/yacht.booking.model";
import {YachtBookingService} from "../../core/services/Booking/yacht.booking.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-yacht-booking-form',
  templateUrl: './yacht-booking-form.component.html',
  styleUrls: ['./yacht-booking-form.component.css']
})
export class YachtBookingFormComponent implements OnInit {

  // @ts-ignore
  form: FormGroup;
  isLoadingResults: any = true;

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<YachtBookingFormComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: any,
              private service: YachtBookingService,
              private formErrorService: FormErrorService,
              private cdr: ChangeDetectorRef,
              private route: ActivatedRoute,
              private router: Router,
              public translateService: TranslateService,
              private authNoticeService: AuthNoticeService,
              private helper: HelperService) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required] ,
      email: ['', Validators.required] ,

      phone: ['', Validators.required] ,
      yacht: ['', Validators.required] ,

      message: ['', Validators.required] ,
    });
  }

  submitForm () {
    const controls = this.form.controls;
    /** showing Errors  */
    if (this.form.invalid) {
      this.formErrorService.markAsTouched(controls);
      return;
    }

    const model = new YachtBookingModel();

    model.name = controls['name'].value;
    model.email = controls['email'].value;
    model.phone = controls['phone'].value;
    model.yacht = controls['yacht'].value;
    model.message = controls['message'].value;


    // call service to store Banner
    this.isLoadingResults = true;
    this.service.create(model).subscribe((resp: unknown) => {
      this.form.reset();
      this.isLoadingResults = false;
      // this.authNoticeService.setNotice(this.translateService.instant('COMMON.Added_successfully',
      //   {name : this.content_name}),
      //   'success');
      this.router.navigate(['../'], { relativeTo: this.route }).then();
    } , (handler: any) => {
      this.authNoticeService.setNotice(this.helper.showingErrors(handler.error), 'danger');
      this.isLoadingResults = false;
    });
  }

}
