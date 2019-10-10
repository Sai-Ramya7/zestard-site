import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolio: any[];
  portfolioPosts: any[];
  img: any;

  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.getPortfolio();
    this.getPortfolioPosts();
  }

  getPortfolio() {
    this.service.getPortfolio().subscribe((result: any) => {
      this.portfolio = result;
      console.log('portfolio', this.portfolio);
    });
  }
  getPortfolioPosts() {
    this.service.getPortfolioPosts().subscribe((res: any) => {
      this.portfolioPosts = res;
      console.log('portfolioPosts', this.portfolioPosts);
      // this.img = res.
    });
  }

}
