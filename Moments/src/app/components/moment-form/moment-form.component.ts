import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css'],
})
export class MomentFormComponent implements OnInit {
  @Input() btnText!: string;

  @Output() onSubmit = new EventEmitter<Moment>();

  momentForm!: FormGroup;

  constructor() {}

  submit() {
    if (this.momentForm.invalid) {
      return;
    }
    console.log(this.momentForm.value);
    console.log('passando os dados corretamente');

    this.onSubmit.emit(this.momentForm.value);
  }

  ngOnInit(): void {
    // inicializando formulário
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    });
  }

  // GETTERS //

  get title() {
    //pegando atributo title com getter
    return this.momentForm.get('title')!;
  }

  get description() {
    //pegando atributo description com getter
    return this.momentForm.get('description')!;
  }

  get image() {
    //pegando atributo image com getter
    return this.momentForm.get('image')!;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    //patch value é um método para inserir algo no formulário sem ser por meio de binds no input
    this.momentForm.patchValue({ image: file });
  }
}
