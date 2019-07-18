import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service/service.service';
import { AddPage } from '../add/add.page';




@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.page.html',
  styleUrls: ['./listagem.page.scss'],
})
export class ListagemPage implements OnInit {
  
  lancamentos;
  
  constructor(public loadingController: LoadingController, private http: HttpClient, public service: ServiceService, public modalController: ModalController) { 
    this.loadingController.create({
      message: "Carregando"
    }).then((loader) => {
      loader.present()
      this.service.list().subscribe(
        (data) => {
          this.lancamentos = data
          loader.dismiss()
        }
      )
    })
  }
  
  ngOnInit() {
  }

  add(lancamento) {
    this.loadingController.create({
      message: "Carregando"
    }).then((loader) => {
      loader.present()
      this.service.add(lancamento).subscribe(
        (data) => {
          this.lancamentos.push(data)
          loader.dismiss()
        }
      )
    })
  }

  delete(lancamento) {
    this.loadingController.create({
      message: "Carregando"
    }).then((loader) => {
      loader.present()
      this.service.delete(lancamento.id).subscribe(
        (data) => {
          var i = this.lancamentos.indexOf(lancamento);
          this.lancamentos.splice(i, 1);
          loader.dismiss()
        }
      )
    })
  }

  async modal() {
    const modal = await this.modalController.create({
      component: AddPage
    });
    await modal.present();

    modal.onDidDismiss().then((dados) => {
      this.add(dados.data)
    })
  }

}
