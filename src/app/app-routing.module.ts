import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "./home/home.component"
import { WebDevIntroComponent } from "./web-dev-intro/web-dev-intro.component"
import { ResourcesComponent } from "./resources/resources.component"
import { AngularBasicsComponent } from "./angular-intro/angular-basics.component";
import { NgAndGitHubPagesComponent } from "./ng-and-git-hub-pages/ng-and-git-hub-pages.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'web-dev-intro', component: WebDevIntroComponent },
    { path: 'angular-basics', component: AngularBasicsComponent },
    { path: 'ng-ghpages', component: NgAndGitHubPagesComponent },
    { path: 'resources', component: ResourcesComponent },
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule {
}
