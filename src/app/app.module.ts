import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtatPipe } from './pipes/etat.pipe';
import { SearchComponent } from './components/search/search.component';
import { TablesComponent } from './components/tables/tables.component';

@NgModule({
  declarations: [AppComponent, EtatPipe, SearchComponent, TablesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true,
      closeButton: true,
      positionClass: 'toast-top-left',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
