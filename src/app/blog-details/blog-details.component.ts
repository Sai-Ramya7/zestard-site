import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from '../config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogDetailsComponent implements OnInit {

  blogDetails: any;

  constructor(private service: ConfigService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBlogDetails();
  }
  getBlogDetails() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getPostById(id).subscribe((result: any) => {
      this.blogDetails = result;
      console.log('blogDetails', this.blogDetails);
    });
  }

}
