import { NavController, NavParams } from 'ionic-angular'

import { Component } from '@angular/core'

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})

export class HistoryPage {
  transactions = null
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.transactions = navParams.get('transactions')
  }

  async back() {
    this.navCtrl.pop()
  }
}
