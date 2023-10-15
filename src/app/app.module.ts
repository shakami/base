// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ng material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

// app modules
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShbNavbarComponent } from './shb-navbar/shb-navbar.component';
import { ShbMainComponent } from './shb-main/shb-main.component';
import { ShbFooterComponent } from './shb-footer/shb-footer.component';
import { ShbHomeComponent } from './shb-home/shb-home.component';
import { ShbResumeComponent } from './shb-resume/shb-resume.component';

@NgModule({
  declarations: [
    AppComponent,
    ShbNavbarComponent,
    ShbFooterComponent,
    ShbMainComponent,
    ShbHomeComponent,
    ShbResumeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
