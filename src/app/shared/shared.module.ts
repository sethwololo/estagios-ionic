import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [LogoutButtonComponent],
  imports: [IonicModule],
  exports: [CommonModule, ReactiveFormsModule, IonicModule, LogoutButtonComponent]
})
export class SharedModule {}
