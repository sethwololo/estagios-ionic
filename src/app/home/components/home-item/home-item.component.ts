import { Component, Input } from '@angular/core';
import { Home } from '../../models/home.model';


@Component({
  selector: 'app-home-item',
  templateUrl: './home-item.component.html',
  styleUrls: ['./home-item.component.scss'],
})
export class HomeItemComponent {
  @Input() home: Home;
}
