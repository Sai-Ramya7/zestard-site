import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TestimonialsComponent implements OnInit {

  testimonial: any[];
  testimonialDetails: any[];

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getTestimonial();
    this.getTestimonialDetails();
  }

  getTestimonial() {
    this.service.getTestimonials().subscribe((result: any) => {
      this.testimonial = result;
      console.log('testimonial', this.testimonial);
    });
  }
  getTestimonialDetails() {
    this.service.getTestimonialDetails().subscribe((res: any) => {
      this.testimonialDetails = res;
      console.log('testimonialDetails', this.testimonialDetails);
    });
  }

}
