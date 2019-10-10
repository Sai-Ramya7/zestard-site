import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.component.html',
  styleUrls: ['./wordpress.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WordpressComponent implements OnInit {

  wordpress: any;
  developmentDesc: any;
  developmentService: any;
  developmentProject: any;
  developmentbenefits: any;

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getWordpress();
  }

  getWordpress() {
    this.service.getWordpress().subscribe((result: any) => {
      this.wordpress = result;
      console.log('wordpress', this.wordpress);
      this.developmentDesc = result.acf.technology_content_modules[0];
      console.log('developmentDesc', this.developmentDesc);
      this.developmentService = result.acf.technology_content_modules[1];
      console.log('developmentService', this.developmentService);
      this.developmentProject = result.acf.technology_content_modules[2];
      console.log('developmentProject', this.developmentProject);
      this.developmentbenefits = result.acf.technology_content_modules[3];
      console.log('developmentbenefits', this.developmentbenefits);
    });
  }

}
