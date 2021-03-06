import { NgModule } from '@angular/core';
<<<<<<< HEAD
=======
import { ReactiveFormsModule } from '@angular/forms';
// tslint:disable-next-line:max-line-length
>>>>>>> 8584d179fd794f26b4d31f7ae5419cc05e0386f9
import { MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FlipCardComponent } from './pages/flip-card/flip-card.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FlashcardTopicsService } from './services/flashcard-topics.service';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    FlipCardComponent
  ],
  imports: [
    AppRoutes,
    BrowserAnimationsModule,
    BrowserModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    AngularFireModule.initializeApp(environment.firebase),
<<<<<<< HEAD
    AngularFirestoreModule
=======
    AngularFirestoreModule,
    ReactiveFormsModule
>>>>>>> 8584d179fd794f26b4d31f7ae5419cc05e0386f9
  ],
  providers: [
    FlashcardTopicsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
