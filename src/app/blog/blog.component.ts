import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogComponent implements OnInit {

  posts: any;
  categories: any;

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getAllPosts();
    this.getAllCategories();
  }

  getAllPosts() {
    this.service.getAllPosts().subscribe((result: any) => {
      this.posts = result;
      console.log('posts', this.posts);
    });
  }

  getAllCategories() {
    this.service.getAllCategories().subscribe((result: any) => {
      this.categories = result;
      console.log('categories', this.categories);
    });
  }

  // document.getElementsByClassName('nav-link')[10].addEventListener('mouseover', () => {
  //   console.log('asd');
  //   })
}
