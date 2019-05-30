import { NavController, NavParams } from 'ionic-angular'

import { Component } from '@angular/core'

@Component({
  selector: 'page-balance',
  templateUrl: 'balance.html'
})
export class BalancePage {

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    let client = navParams.get('client')
    console.log(client)
  }

}
