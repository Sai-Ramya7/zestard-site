import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  careers: any[];
  careerDetails: any[];
  id: Array<{cid: number}> = [];
  careerCategory: Array<{cat: object}> = [];

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getCareers();
    this.getCareerDetails();
  }
  getCareers() {
    this.service.getCareers().subscribe((result: any) => {
      this.careers = result;
      console.log('career', this.careers);
    });
  }
  getCareerDetails() {
    this.service.getCareerDetails().subscribe((res: any) => {
      this.careerDetails = res;
      console.log('careerList', this.careerDetails);
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < res.length; i++) {
        // this.id.push(res[i].career_category[0]);
        const catid = res[i].career_category[0];
        this.service.getCareerCategory(catid).subscribe((response: any) => {
          this.careerCategory.push(response);
          // console.log(response);
        });
      }
      console.log('response', this.careerCategory);
      // console.log('id', this.id);
    });
  }
  // getCareerCategory() {
  //   this.
  // }

}
