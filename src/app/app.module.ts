import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TutorialComponent } from './tutorial/tutorial.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from "@angular/forms"

@NgModule({
    declarations: [
        AppComponent,
        TutorialComponent,
        HomeComponent,
        ResourcesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
