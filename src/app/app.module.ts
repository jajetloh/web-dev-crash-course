import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppComponent } from "./app.component"
import { RouterLink, RouterOutlet } from "@angular/router"


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        CommonModule,
        RouterLink,
        RouterOutlet
    ]
})
export class AppModule {
}
