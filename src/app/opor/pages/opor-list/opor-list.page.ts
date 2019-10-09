import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Opor } from '../../models/opor.model';
import { OporService } from '../../services/opor.service';

@Component({
  selector: 'app-opor-list',
  templateUrl: './opor-list.page.html',
  styleUrls: ['./opor-list.page.scss'],
})
export class OporListPage {

  opor$: Observable<Opor[]>;

  constructor(private oporService: OporService) { }

  ionViewDidEnter(): void {
    this.opor$ = this.oporService.getAll();
  }

}
