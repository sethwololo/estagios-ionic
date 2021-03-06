import { OverlayService } from './../../../core/services/overlay.service';
import { NavController } from '@ionic/angular';
import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout-button',
  template: `
    <ion-buttons>
      <ion-button (click)="logout()">
        <ion-icon name="exit" slot="icon-only"></ion-icon>
      </ion-button>
    </ion-buttons>
  `
})
export class LogoutButtonComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private overlayService: OverlayService
  ) { }

  ngOnInit() {}
    async logout(): Promise<void> {
      await this.overlayService.alert({
        message: 'Deseja realmente sair?',
        buttons: [
          {
            text: 'Sim',
            handler: async () => {
              await this.authService.logout();
              this.navCtrl.navigateRoot('/login');
            }
          },
          'Não'
        ]
      });
    }
}
