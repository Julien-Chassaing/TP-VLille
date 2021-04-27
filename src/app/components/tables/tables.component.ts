import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, throwError } from 'rxjs';
import { Stations } from 'src/app/models/stations';
import { VlilleService } from 'src/app/services/vlille.service';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  stations$: Observable<Stations[]> = new Observable();
  error: boolean | undefined;

  constructor(private service: VlilleService, private toastr: ToastrService) {
    this.stations$ = service.getStations();
    this.stations$
      .pipe(
        catchError((err) => {
          this.error = true;
          return throwError(err);
        })
      )
      .subscribe(
        (val) => {
          console.log('Value emitted successfully', val), (this.error = false);
        },
        (error) => {
          console.error('This line is never called ', error);
        },
        () => console.log('HTTP Observable completed...')
      );
  }

  showToastr(message: string) {
    this.toastr.error(message, 'Erreur', {
      disableTimeOut: true,
    });
    this.service.refreshStations();
  }

  click() {
    this.service.refreshStations();
  }

  ngOnInit() {
    this.subscription = this.service
      .getUpdate()
      .subscribe((stations) => (this.stations$ = stations));
  }
}
