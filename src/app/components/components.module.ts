import { UrlformatPipe } from "./../pipes/urlformat.pipe";
import { MenuCategoryComponent } from "./menu-category/menu-category.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PageTitleComponent } from "./page-title/page-title.component";
import { NgxPaginationModule } from "ngx-pagination";
import { ArticleComponent } from "./article/article.component";
import { MenuArticleMostViewComponent } from "./menu-article-most-view/menu-article-most-view.component";
import { MenuArchiveComponent } from "./menu-archive/menu-archive.component";
@NgModule({
  declarations: [
    MenuCategoryComponent,
    PageTitleComponent,
    ArticleComponent,
    UrlformatPipe,
    MenuArticleMostViewComponent,
    MenuArchiveComponent,
  ],
  imports: [CommonModule, RouterModule, NgxPaginationModule],
  exports: [
    MenuCategoryComponent,
    PageTitleComponent,
    ArticleComponent,
    UrlformatPipe,
    MenuArticleMostViewComponent,
    MenuArchiveComponent,
  ],
})
export class ComponentsModule {}
