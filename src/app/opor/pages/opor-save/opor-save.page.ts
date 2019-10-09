import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-opor-save',
  templateUrl: './opor-save.page.html',
  styleUrls: ['./opor-save.page.scss']
})
export class OporSavePage implements OnInit {

  oporForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.oporForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      descricao: ['', [Validators.required, Validators.minLength(15)]],
      // adicionar area como dropdown
    });
  }
}
