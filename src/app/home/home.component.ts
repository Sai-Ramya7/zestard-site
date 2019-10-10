import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from '../config.service';
// declare var jQuery: any;
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class HomeComponent implements OnInit {

  // $: any;
  selected: any;
  posts: any;
  home: any;
  technologyTabs: any;
  whatwedo: any;
  casestudy: any;
  clients: any;
  homeblog: any;

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getHome();
    // $('.nav-pills').on('mouseenter', '[data-toggle="tab"]', () => {
    //   console.log('123');
    //   $(this).tab('show');
    // });
  }

  getHome() {
    this.service.getHome().subscribe((result: any) => {
      this.home = result;
      console.log('home', this.home);
      this.technologyTabs = result.acf.home_content_modules[0].technology_tabs_repeater;
      console.log('technologyTabs', this.technologyTabs);
      this.whatwedo = result.acf.home_content_modules[1];
      console.log('whatwedo', this.whatwedo);
      this.casestudy = result.acf.home_content_modules[2];
      console.log('casestudy', this.casestudy);
      this.clients = result.acf.home_content_modules[4];
      console.log('clients', this.clients);
      this.homeblog = result.acf.home_content_modules[5];
      console.log('homeblog', this.homeblog);
    });
    this.service.getAllPosts().subscribe((res: any) => {
      this.posts = res;
      console.log('posts', this.posts);
    });
  }
  select(e, item) {
    this.selected = item;
    // e.preventDefault();
    // $(e).tab('show');
  }
  isActive(item) {
      return this.selected === item;
  }
}
