import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServicesService} from '../../../core/services/services.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  slug: any;
  service: any;

  constructor(private route: ActivatedRoute, private services: ServicesService ,private cdr:ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];
    this.getService();
  }

  getService() {
    this.services.getService(this.slug).subscribe(data => {
      this.service = data;
      console.log(this.service);
      this.cdr.markForCheck();
    });
  }
}
