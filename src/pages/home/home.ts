import { LoadingController, NavController, ToastController } from 'ionic-angular'

import { Component } from '@angular/core'
import { Http, Response } from '@angular/http'

import { BalancePage } from '../balance/balance'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(
    public navCtrl: NavController,
    private http: Http,
    private loadingController: LoadingController,
    private toastController: ToastController) { }

  cpf = null

  async signIn() {
    const loadingElement = await this.loadingController.create({
      content: 'Por favor, aguarde...',
      spinner: 'crescent',
    })
    await loadingElement.present();
    const url = 'http://3.211.115.166/api/clients/?format=json&cpf=' + this.cpf

    this.http.get(url).subscribe(async (result: Response) => {
      const body = result.json()
      if (body.count === 0) {
        const toast = await this.toastController.create({
          message: 'CPF não encontrado',
          duration: 2000
        })
        toast.present()

      } else {
        this.navCtrl.push(BalancePage, { client: body.results[0] })
      }

      loadingElement.dismiss()
    })
  }
}
