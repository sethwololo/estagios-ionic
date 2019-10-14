import { OverlayService } from './../../../core/services/overlay.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-button',
  template: `
    <ion-buttons>
      <ion-button (click)="loginAdm()">
        <ion-icon name="contact" slot="icon-only"></ion-icon>
      </ion-button>
    </ion-buttons>
  `
})
export class LoginButtonComponent implements OnInit {

  constructor(
    private navCtrl: NavController,
    private overlayService: OverlayService
  ) { }

  ngOnInit() {}
    async loginAdm(): Promise<void> {
      await this.overlayService.alert({
        message: 'Login de administrador necessário. Deseja prosseguir?',
        buttons: [
          {
            text: 'Sim',
            handler: async () => {
              this.navCtrl.navigateRoot('/login');
            }
          },
          'Não'
        ]
      });
    }
}
