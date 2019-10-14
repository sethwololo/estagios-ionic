import { OverlayService } from './../../../core/services/overlay.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Opor } from '../../models/opor.model';
import { OporService } from '../../services/opor.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-opor-list',
  templateUrl: './opor-list.page.html',
  styleUrls: ['./opor-list.page.scss']
})
export class OporListPage {
  opor$: Observable<Opor[]>;

  constructor(
    private navCtrl: NavController,
    private oporService: OporService,
    private overlayService: OverlayService
  ) {}

  async ionViewDidEnter(): Promise<void> {
    const loading = await this.overlayService.loading();
    this.opor$ = this.oporService.getAll();
    this.opor$.pipe(take(1)).subscribe(opor => loading.dismiss());
  }

  onUpdate(opor: Opor): void {
    this.navCtrl.navigateForward(`/opor/edit/${opor.id}`);
  }

  async onDelete(opor: Opor): Promise<void> {
    await this.overlayService.alert({
      message: `Realmente desejar a vaga "${opor.title}"?`,
      buttons: [
        {
          text: 'Sim',
          handler: async () => {
            await this.oporService.delete(opor),
            await this.overlayService.toast({
              message: `Vaga "${opor.title}" excluída com sucesso!`
            });
          }
        },
        'Não'
      ]
    });
  }
}
