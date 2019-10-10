import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TermsOfUseComponent implements OnInit {

  terms: any[];
  termsDetails: any[];

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getTerms();
    this.getTermsDetails();
  }

  getTerms() {
    this.service.getTerms().subscribe((result: any) => {
      this.terms = result;
      console.log('terms', this.terms);
    });
  }
  getTermsDetails() {
    this.service.getTermsDetails().subscribe((res: any) => {
      this.termsDetails = res;
      console.log('termsDetails', this.termsDetails);
    });
  }

}
