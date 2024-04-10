import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WebDevIntroComponent } from './web-dev-intro/web-dev-intro.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { NgbModalModule, NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from "@angular/forms";
import { ModalContentComponent } from './modal-content/modal-content.component';
import { AngularBasicsComponent } from './angular-intro/angular-basics.component';
import { NgAndGitHubPagesComponent } from './ng-and-git-hub-pages/ng-and-git-hub-pages.component'

@NgModule({
    declarations: [
        AppComponent,
        WebDevIntroComponent,
        HomeComponent,
        ResourcesComponent,
        ModalContentComponent,
        AngularBasicsComponent,
        NgAndGitHubPagesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        NgbTypeaheadModule,
        NgbModalModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
