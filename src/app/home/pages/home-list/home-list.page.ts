import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { Observable, of } from 'rxjs';
import { Home } from '../../models/home.model';
import { take } from 'rxjs/operators';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.page.html',
  styleUrls: ['./home-list.page.scss'],
})
export class HomeListPage {

  home$: Observable<Home[]>;


  constructor(
    private navCtrl: NavController,
    private homeService: HomeService,
    private overlayService: OverlayService
  ) { }

  async ionViewDidEnter(): Promise<void> {
    const loading = await this.overlayService.loading();
    this.home$ = this.homeService.getAll();
    this.home$.pipe(take(1)).subscribe(home => loading.dismiss());
  }

}
