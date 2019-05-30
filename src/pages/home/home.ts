import { NavController } from 'ionic-angular'

import { Component } from '@angular/core'
import { Http, Response } from '@angular/http'

import { BalancePage } from '../balance/balance'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private http: Http) { }

  rfid = null

  async signIn() {
    const url = 'http://3.211.115.166/api/clients/?format=json&rfid=' + this.rfid

    this.http.get(url).subscribe((result: Response) => {
      const body = result.json()
      if (body.count === 0) {
        console.log('RFID não encontrado')
      } else {
        this.navCtrl.push(BalancePage, { client: body.results[0] })
      }
    })
  }

}
