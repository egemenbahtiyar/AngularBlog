import { MainNavComponent } from "./../nav/main-nav/main-nav.component";
import { MainLayoutComponent } from "./../layout/main-layout/main-layout.component";

import { ContactComponent } from "./contact/contact.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { HomeComponent } from "./home/home.component";

import { MaterialModule } from "./../modules/material/material.module";
import { AppRoutingModule } from "../app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { ComponentsModule } from "./../components/components.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ArticleComponent } from "./article/article.component";
import { CategoryArticlesComponent } from "./category-articles/category-articles.component";
import { SearchComponent } from "./search/search.component";
import { ArchiveComponent } from "./archive/archive.component";

@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    MainLayoutComponent,
    MainNavComponent,
    ArticleComponent,
    CategoryArticlesComponent,
    SearchComponent,
    ArchiveComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
  ],
})
export class MainModule {}
