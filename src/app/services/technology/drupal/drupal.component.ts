import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-drupal',
  templateUrl: './drupal.component.html',
  styleUrls: ['./drupal.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class DrupalComponent implements OnInit {

  drupal: any[];
  developmentDesc: any[];
  developmentService: any[];
  developmentProject: any[];
  developmentbenefits: any[];

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getDrupal();
  }

  getDrupal() {
    this.service.getDrupal().subscribe((result: any) => {
      this.drupal = result;
      console.log('drupal', this.drupal);
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
