import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PerfilPage } from '../perfil/perfil.page';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario = {
    "nome":"",
    "foto":"",
  }

  constructor(public modalController: ModalController) {}

  async modal() {
    const modal = await this.modalController.create({
      component: PerfilPage
    });
    await modal.present();

    modal.onDidDismiss().then((dados) => {
      this.usuario = dados.data
    })
  }

}
