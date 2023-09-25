import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "@angular/cdk/layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {NgOptimizedImage} from "@angular/common";
import { HeaderContentComponent } from './Arquimentor/components/header-content/header-content.component';
import {RouterOutlet} from "@angular/router";
import { MentorProfileComponent } from './Arquimentor/components/profiles/mentor-profile/mentor-profile.component';
import { StudentProfileComponent } from './Arquimentor/components/profiles/student-profile/student-profile.component';
import { AppRoutingModule } from './app-routing.module';
import {ProfileService} from "./Arquimentor/services/profile-service/profile-service.service";
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {ViewProfileComponent} from "./Arquimentor/components/view-profile/view-profile.component";
import {ChatComponent} from "./Arquimentor/components/chat/chat.component";
import {ReviewsComponent} from "./Arquimentor/components/reviews/reviews.component";
@NgModule({
  declarations: [
    AppComponent,
    HeaderContentComponent,
    MentorProfileComponent,
    StudentProfileComponent,
    ViewProfileComponent,
    ChatComponent,
    ReviewsComponent,
  ],
  imports: [
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
  ],
  providers: [
    ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
