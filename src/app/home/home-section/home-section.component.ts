import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeSectionComponent implements OnInit {

  @Input() settings: any;

  sanitizedContent: SafeHtml | null = null;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.settings?.home_section);
  }

}
