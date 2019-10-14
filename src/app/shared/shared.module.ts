import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { CancelButtonComponent } from './components/cancel-button/cancel-button.component';

@NgModule({
  declarations: [LogoutButtonComponent, LoginButtonComponent, CancelButtonComponent],
  imports: [IonicModule],
  exports: [CommonModule, ReactiveFormsModule, IonicModule, LogoutButtonComponent, LoginButtonComponent, CancelButtonComponent]
})
export class SharedModule {}
