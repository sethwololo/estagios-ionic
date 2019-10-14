import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OporService } from '../../services/opor.service';
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-opor-save',
  templateUrl: './opor-save.page.html',
  styleUrls: ['./opor-save.page.scss']
})
export class OporSavePage implements OnInit {
  oporForm: FormGroup;
  pageTitle = '...';
  oporId: string = undefined;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private route: ActivatedRoute,
    private oporService: OporService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.init();
  }

  init(): void {
    const oporId = this.route.snapshot.paramMap.get('id');
    if (!oporId) {
      this.pageTitle = 'Adicionar vaga';
      return;
    }
    this.oporId = oporId;
    this.pageTitle = 'Editar vaga';
    this.oporService
      .get(oporId)
      .pipe(take(1))
      .subscribe(({ title, descricao }) => {
        this.oporForm.get('title').setValue(title);
        this.oporForm.get('descricao').setValue(title);

      });
  }

  private createForm(): void {
    this.oporForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.minLength(4)]],
      area: ['', Validators.required]
    });
  }

  async onSubmit(): Promise<void> {
    const loading = await this.overlayService.loading({
      message: 'Adicionando'
    });
    try {
      const opor = !this.oporId
        ? await this.oporService.create(this.oporForm.value)
        : await this.oporService.update({
          id: this.oporId,
          ...this.oporForm.value
        });
      this.navCtrl.navigateBack('/opor');
      await this.overlayService.toast({message: 'Vaga adicionada com sucesso'});
    } catch (erro) {
      await this.overlayService.toast({message: 'Erro ao adicionar vaga'});
    } finally {
      loading.dismiss();
    }
  }
}
