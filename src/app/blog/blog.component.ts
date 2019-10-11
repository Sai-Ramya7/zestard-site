import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConfigService } from '../config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BlogComponent implements OnInit {

  posts: any;
  catPosts: any;
  clickCat = false;
  catName: string;
  categories: any;

  constructor(private service: ConfigService,
              private route: ActivatedRoute) { }

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

  clickCategory(id, name) {
    this.catName = name;
    this.clickCat = true;
    console.log('catid', id);
    this.service.getPostsByCategory(id).subscribe((result: any) => {
      this.catPosts = result;
      console.log('postsbyCategory', this.catPosts);
    });
  }

  // document.getElementsByClassName('nav-link')[10].addEventListener('mouseover', () => {
  //   console.log('asd');
  //   })
}
