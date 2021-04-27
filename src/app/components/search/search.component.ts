import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { VlilleService } from 'src/app/services/vlille.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  value: string = '';

  constructor(fb: FormBuilder, private vlilleService: VlilleService) {
    this.form = fb.group({
      station: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9 ]*$'),
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
    });
  }

  onSubmit() {
    const search = this.form.value.station;
    this.vlilleService.searchStations(search);
    this.value = '';
  }

  ngOnInit(): void {}
}
