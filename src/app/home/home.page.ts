import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class HomePage {

  headerLogo = '/assets/imgs/logo.png';
  homePageImage = '/assets/imgs/site/front_office2.jpg';
  customerSatisfactionImage = '/assets/img/site/customer_satisfaction_2.png';
  constructor() {}

  openFMLModal() {}

}
