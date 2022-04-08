import { AuthGuardService } from "./services/auth-guard.service";
import { AdminArticleAddComponent } from "./admin-pages/admin-article/admin-article-add/admin-article-add.component";
import { AdminArticleUpdateComponent } from "./admin-pages/admin-article/admin-article-update/admin-article-update.component";
import { AdminArticleListComponent } from "./admin-pages/admin-article/admin-article-list/admin-article-list.component";
import { AdminArticleComponent } from "./admin-pages/admin-article/admin-article/admin-article.component";
import { AdminHomeComponent } from "./admin-pages/admin-home/admin-home.component";
import { ArchiveComponent } from "./pages/archive/archive.component";
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
import { AdminLoginComponent } from "./pages/admin-login/admin-login.component";

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
        path: "arsiv/:year/:month",
        component: ArchiveComponent,
      },
      {
        path: "arsiv/:year/:month/sayfa/:page",
        component: ArchiveComponent,
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
        path: "adminlogin",
        component: AdminLoginComponent,
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
    canActivate: [AuthGuardService],
    children: [
      {
        path: "",
        component: AdminHomeComponent,
      },
      {
        path: "anasayfa",
        component: AdminHomeComponent,
      },
      {
        path: "makale",
        component: AdminArticleComponent,
        children: [
          {
            path: "liste",
            component: AdminArticleListComponent,
          },
          {
            path: "guncelle/:id",
            component: AdminArticleUpdateComponent,
          },
          {
            path: "ekle",
            component: AdminArticleAddComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
