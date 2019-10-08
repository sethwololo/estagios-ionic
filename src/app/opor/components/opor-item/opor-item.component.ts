import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Opor } from '../../models/opor.model';

@Component({
  selector: 'app-opor-item',
  templateUrl: './opor-item.component.html',
  styleUrls: ['./opor-item.component.scss'],
})
export class OporItemComponent {
  @Input() opor: Opor;
  @Output() done = new EventEmitter<Opor>();
  @Output() update = new EventEmitter<Opor>();
  @Output() delete = new EventEmitter<Opor>();
}
