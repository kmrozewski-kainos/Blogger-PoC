import {RouterModule, Routes} from "@angular/router";

import {AboutComponent} from "./components/about/about/about.component";
import {HomeComponent} from "./components/home/home.component";
import {NgModule} from "@angular/core";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {PostComponent} from "./components/post/post/post.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'post/:id', component: PostComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
