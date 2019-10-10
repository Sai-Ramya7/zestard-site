import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ReactComponent implements OnInit {

  react: any;
  developmentDesc: any;
  developmentService: any;
  developmentProject: any;
  developmentbenefits: any;

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getReact();
  }

  getReact() {
    this.service.getReact().subscribe((result: any) => {
      this.react = result;
      console.log('react', this.react);
      this.developmentDesc = result.acf.technology_content_modules[0];
      console.log('developmentDesc', this.developmentDesc);
      this.developmentService = result.acf.technology_content_modules[1];
      console.log('developmentService', this.developmentService);
      this.developmentProject = result.acf.technology_content_modules[2];
      console.log('developmentProject', this.developmentProject);
      this.developmentbenefits = result.acf.technology_content_modules[3];
    });
  }

}
