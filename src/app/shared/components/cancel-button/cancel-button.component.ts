import { OverlayService } from './../../../core/services/overlay.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancel-button',
  template: `

      <ion-button (click)="voltar()" expand="block" fill="outline">
        Voltar
      </ion-button>

  `
})
export class CancelButtonComponent implements OnInit {
  constructor(
    private navCtrl: NavController,
    private overlayService: OverlayService
  ) {}

  ngOnInit() {}

  async voltar(): Promise<void> {
    await this.navCtrl.navigateRoot('/home-list');
  }

}
