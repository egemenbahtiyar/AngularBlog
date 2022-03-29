import { SearchComponent } from "./pages/search/search.component";
import { CategoryArticlesComponent } from "./pages/category-articles/category-articles.component";
import { ArticleComponent } from "./pages/article/article.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AboutMeComponent } from "./pages/about-me/about-me.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { AdminLayoutComponent } from "./layout/admin-layout/admin-layout.component";

const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
      {
        path: "sayfa/:page",
        component: HomeComponent,
      },
      {
        path: "makale/:title/:id",
        component: ArticleComponent,
      },
      {
        path: "hakkimda",
        component: AboutMeComponent,
      },
      {
        path: "iletisim",
        component: ContactComponent,
      },
      {
        path: "arama/sayfa/:page",
        component: SearchComponent,
      },
      {
        path: "kategori/:name/:id",
        component: CategoryArticlesComponent,
      },
      {
        path: "kategori/:name/:id/sayfa/:page",
        component: CategoryArticlesComponent,
      },
    ],
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
