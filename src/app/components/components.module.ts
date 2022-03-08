import { MenuCategoryComponent } from "./menu-category/menu-category.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PageTitleComponent } from "./page-title/page-title.component";
import { NgxPaginationModule } from "ngx-pagination";
import { ArticleComponent } from "./article/article.component";
@NgModule({
  declarations: [MenuCategoryComponent, PageTitleComponent, ArticleComponent],
  imports: [CommonModule, RouterModule, NgxPaginationModule],
  exports: [MenuCategoryComponent, PageTitleComponent, ArticleComponent],
})
export class ComponentsModule {}
