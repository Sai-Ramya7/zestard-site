import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(public http: HttpClient) { }

  getHome() {
    return this.http.get('https://www.zestard.com/wp-json/acf/v3/pages/2');
  }

  // company
  getAboutUs() {
    return this.http.get('https://www.zestard.com/wp-json/acf/v3/pages/163');
  }
  getCulture() {
    return this.http.get('https://www.zestard.com/wp-json/acf/v3/pages/169');
  }
  getCultureEvents() {
    return this.http.get('https://zestard.com/wp-json/wp/v2/event');
  }
  getCareers() {
    return this.http.get('https://zestard.com/wp-json/acf/v3/pages/167');
  }
  getCareerDetails() {
    return this.http.get('https://zestard.com/wp-json/wp/v2/career');
  }
  getCareerCategory(id) {
    return this.http.get(`https://www.zestard.com/wp-json/wp/v2/career_category/${id}`);
  }
  getTestimonials() {
    return this.http.get('https://www.zestard.com/wp-json/acf/v3/pages/1646');
  }
  getTestimonialDetails() {
    return this.http.get('https://zestard.com/wp-json/wp/v2/testimonials');
  }
  getPartnership() {
    return this.http.get('https://www.zestard.com/wp-json/acf/v3/pages/103');
  }

  // services
  getEcommerce() {
    return this.http.get('https://www.zestard.com/wp-json/acf/v3/pages/1491');
  }
  getCms() {
    return this.http.get('https://www.zestard.com/wp-json/acf/v3/pages/1493');
  }
  getJsFrameworks() {
    return this.http.get('https://www.zestard.com/wp-json/acf/v3/pages/1495');
  }
  getHireDeveloper() {
    return this.http.get('https://www.zestard.com/wp-json/acf/v3/pages/1651');
  }
  getDigitalMarketing() {
    return this.http.get('https://www.zestard.com/wp-json/acf/v3/pages/1600');
  }

  // services technology

  getMagento() {
    return this.http.get('https://www.zestard.com/wp-json/acf/v3/pages/128');
  }
  getShopify() {
    return this.http.get('https://www.zestard.com/wp-json/acf/v3/pages/1501');
  }
  getWoocommerce() {
    return this.http.get('https://www.zestard.com/wp-json/acf/v3/pages/1503');
  }
  getWordpress() {
    return this.http.get('https://www.zestard.com/wp-json/acf/v3/pages/1505');
  }
  getDrupal() {
    return this.http.get('https://www.zestard.com/wp-json/acf/v3/pages/1507');
  }
  getReact() {
    return this.http.get('https://www.zestard.com/wp-json/acf/v3/pages/1511');
  }
  getAngular() {
    return this.http.get('https://www.zestard.com/wp-json/acf/v3/pages/1509');
  }

  // work
  getPortfolio() {
    return this.http.get('https://www.zestard.com/wp-json/acf/v3/pages/85');
  }
  getPortfolioPosts() {
    return this.http.get('https://zestard.com/wp-json/wp/v2/portfolio');
  }


  // blog
  getAllPosts() {
    return this.http.get('https://zestard.com/wp-json/wp/v2/posts?_embed');
  }
  getPostImage(id) {
    return this.http.get(`https://zestard.com/wp-json/wp/v2/media/${id}`);
  }
  getPostById(id) {
    return this.http.get(`https://zestard.com/wp-json/wp/v2/posts/${id}?_embed`);
  }
  getAllCategories() {
    return this.http.get('https://zestard.com/wp-json/wp/v2/categories');
  }
  getPostsByCategory(id) {
    return this.http.get(`https://zestard.com/wp-json/wp/v2/posts/?categories=${id}`);
  }
  getAuthor(id) {
    return this.http.get(`https://zestard.com/wp-json/wp/v2/users/${id}`);
  }

  // contact
  getContact() {
    return this.http.get('https://www.zestard.com/wp-json/acf/v3/pages/57');
  }

  // privacy
  getPrivacy() {
    return this.http.get('https://www.zestard.com/wp-json/acf/v3/pages/1664');
  }
  getPrivacyDetails() {
    return this.http.get('https://zestard.com/wp-json/wp/v2/pages/1664');
  }
  getTerms() {
    return this.http.get('https://www.zestard.com/wp-json/acf/v3/pages/1667');
  }
  getTermsDetails() {
    return this.http.get('https://zestard.com/wp-json/wp/v2/pages/1667');
  }
}
