import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutusComponent implements OnInit {

  home: any;
  whoweare: any;
  ourValues: any;
  industry: any;
  whychooseus: any;
  footer: any;

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getAboutUs();
  }

  getAboutUs() {
    this.service.getAboutUs().subscribe((result: any) => {
      this.home = result;
      console.log('home', this.home);
      this.whoweare = result.acf.gen_content_modules[0];
      console.log('who we are:', this.whoweare);
      this.ourValues = result.acf.gen_content_modules[1];
      console.log('ourValues:', this.ourValues);
      this.industry = result.acf.gen_content_modules[2];
      console.log('industry:', this.industry);
      this.whychooseus = result.acf.gen_content_modules[3];
      console.log('whychooseus:', this.whychooseus);
      this.footer = result.acf.gen_content_modules[4];
      console.log('footer:', this.footer);
    });
  }

}
