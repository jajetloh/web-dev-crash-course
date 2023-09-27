import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppComponent } from "./app.component"
import { AppRoutingModule } from "./app-routing.module"
import { HomeComponent } from "./home/home.component"
import { ResourcesComponent } from "./resources/resources.component"
import { TutorialComponent } from "./tutorial/tutorial.component"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ResourcesComponent,
        TutorialComponent,
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class AppModule {
}
