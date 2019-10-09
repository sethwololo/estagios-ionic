import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Opor } from '../../models/opor.model';

@Component({
  selector: 'app-opor-list',
  templateUrl: './opor-list.page.html',
  styleUrls: ['./opor-list.page.scss'],
})
export class OporListPage implements OnInit {

  opor$: Observable<Opor[]>;

  constructor() { }

  ngOnInit() {
    this.opor$ = of ([
      { id: 'abcdef123', title: 'Teste 1', done: false},
      { id: 'abcdes143', title: 'Teste 2', done: false},
    ]);
  }

}
