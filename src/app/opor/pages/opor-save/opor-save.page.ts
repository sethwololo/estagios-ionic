import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OporService } from '../../services/opor.service';
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';

@Component({
  selector: 'app-opor-save',
  templateUrl: './opor-save.page.html',
  styleUrls: ['./opor-save.page.scss']
})
export class OporSavePage implements OnInit {
  oporForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private oporService: OporService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.oporForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.minLength(4)]]
      // adicionar area
    });
  }

  async onSubmit(): Promise<void> {
    try {
      const opor = await this.oporService.create(this.oporForm.value);
      console.log('Oportunidade adicionada! \n', opor);
      this.navCtrl.navigateBack('/opor');
    } catch (erro) {
      console.log('Erro ao adicionar: ', erro);
    }
  }
}
