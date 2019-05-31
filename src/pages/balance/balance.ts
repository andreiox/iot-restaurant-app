import { LoadingController, NavController, NavParams } from 'ionic-angular'

import { Component } from '@angular/core'
import { Http, Response } from '@angular/http'

import { HistoryPage } from '../history/history'

@Component({
  selector: 'page-balance',
  templateUrl: 'balance.html'
})

export class BalancePage {
  client
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    private loadingController: LoadingController, ) {

    this.client = navParams.get('client')
  }

  async seeTransactionHistory() {
    const loadingElement = await this.loadingController.create({
      content: 'Por favor, aguarde...',
      spinner: 'crescent',
    })
    await loadingElement.present();
    const url = 'http://3.211.115.166/api/transactions/?format=json&client_id=' + this.client.id

    this.http.get(url).subscribe(async (result: Response) => {
      const body = result.json()
      this.navCtrl.push(HistoryPage, { transactions: body.results })

      loadingElement.dismiss()
    })
  }

  async update() {
    const loadingElement = await this.loadingController.create({
      content: 'Por favor, aguarde...',
      spinner: 'crescent',
    })
    await loadingElement.present();
    const url = 'http://3.211.115.166/api/clients/?format=json&cpf=' + this.client.cpf

    this.http.get(url).subscribe(async (result: Response) => {
      const body = result.json()
      this.client = body.results[0]
      loadingElement.dismiss()
    })
  }
}
