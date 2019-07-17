import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'; // Passo 3 - Câmera

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario = {
    "nome": "",
    "foto": "",
  }

  constructor(public modalController: ModalController, private camera: Camera) { }

  
  ngOnInit() {
  }
  
  add() {
    this.modalController.dismiss(this.usuario)
  }

  foto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.usuario.foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert(err)
    });
  }
}
