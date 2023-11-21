import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "@angular/cdk/layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {CommonModule, NgOptimizedImage} from "@angular/common";

import { HeaderContentComponent } from './Arquimentor/components/header-content/header-content.component';
import {RouterOutlet} from "@angular/router";
import { MentorProfileComponent } from './Arquimentor/components/profiles/mentor-profile/mentor-profile.component';
import { StudentProfileComponent } from './Arquimentor/components/profiles/student-profile/student-profile.component';
import { AppRoutingModule } from './app-routing.module';
import {ArquimentorService} from "./Arquimentor/services/arquimentor.service";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {PublicationIdComponent} from "./Arquimentor/components/publication-id/publication-id.component";
import {ChatComponent} from "./Arquimentor/components/chat/chat.component";
import {ReviewsComponent} from "./Arquimentor/components/reviews/reviews.component";

import { CardPublicationContentComponent } from './Arquimentor/components/card-publication-content/card-publication-content.component';
import {HeaderComponent} from "./Arquimentor/components/header/header.component";
import{LoginComponent} from "./Arquimentor/components/login/login.component";
import {RegisterComponent} from "./Arquimentor/components/register/register.component";
import { MainComponent } from './Arquimentor/pages/main/main.component';
import {SubscriptionContentComponent} from "./Arquimentor/components/subscription-content/subscription-content.component";
import { CreatePostComponent } from './Arquimentor/components/create-post/create-post.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { AppointmentComponent } from './Arquimentor/components/appointment/appointment.component';
import { InformationWindowComponent } from './Arquimentor/components/information-window/information-window.component';
import {AuthInterceptor} from "./Arquimentor/helpers/auth.interceptor";
import { SettingsComponent } from './Arquimentor/components/settings/settings.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatSliderModule} from "@angular/material/slider";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";

import { NgxStripeModule } from 'ngx-stripe';
import { MatDialogModule } from '@angular/material/dialog';

import {ModalComponent} from "./Arquimentor/components/modal/modal.component";
import {DetailArticleComponent} from "./Arquimentor/components/detail-article/detail-article.component";
import {PaymentComponent} from "./Arquimentor/components/payment/payment.component";
import { NotificationItemComponent } from './Arquimentor/components/notification-item/notification-item.component';
import { NotificationListComponent } from './Arquimentor/components/notification-list/notification-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderContentComponent,
    MentorProfileComponent,
    StudentProfileComponent,
    PublicationIdComponent,
    ChatComponent,
    ReviewsComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    CardPublicationContentComponent,
    SubscriptionContentComponent,
    CreatePostComponent,
    AppointmentComponent,
    InformationWindowComponent,
    SettingsComponent,
    ModalComponent,
    DetailArticleComponent,
    PaymentComponent,
    NotificationItemComponent,
    NotificationListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgOptimizedImage,
    RouterOutlet,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSliderModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule,
    NgxStripeModule.forRoot('pk_test_51ODdN2DfqBM3nCd5wl2V5i8IhWVgxLG25CI7xvg7fvJ5fquCOvFj9qYLLZdrSbeamcg2LP8Nf8x3a7zxqXGylh1R00rXbH0SgY'),
  ],
  exports:[ NotificationItemComponent,],
  providers: [ArquimentorService, {
  provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
