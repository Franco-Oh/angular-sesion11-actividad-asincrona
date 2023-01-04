import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public formLogin!: FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      nombre:['', 
        [
          Validators.required,
          Validators.minLength(10)
        ]
      ],
      email:['', 
        [
          Validators.required,
          Validators.email
        ]
      ],
      msg:['',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(500)
        ]
      ]
    });
  }

  send(): any{
    console.log(this.formLogin.value)
  }
}
