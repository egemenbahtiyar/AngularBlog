import { MaterialModule } from "./../modules/material/material.module";
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
import { AddCommentComponent } from "./add-comment/add-comment.component";
@NgModule({
  declarations: [
    MenuCategoryComponent,
    PageTitleComponent,
    ArticleComponent,
    UrlformatPipe,
    MenuArticleMostViewComponent,
    MenuArchiveComponent,
    AddCommentComponent,
  ],
  imports: [CommonModule, RouterModule, NgxPaginationModule, MaterialModule],
  exports: [
    MenuCategoryComponent,
    PageTitleComponent,
    ArticleComponent,
    UrlformatPipe,
    MenuArticleMostViewComponent,
    MenuArchiveComponent,
    AddCommentComponent,
  ],
})
export class ComponentsModule {}
