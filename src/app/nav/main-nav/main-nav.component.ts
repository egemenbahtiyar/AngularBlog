import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

enum MainPages {
  contact = 3,
  about_me = 2,
  home = 1,
}

@Component({
  selector: "app-main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.css"],
})
export class MainNavComponent implements OnInit {
  pageActive: MainPages;
  constructor(private router: Router) {
    this.router.events.subscribe((r) => {
      if (r instanceof NavigationEnd) {
        if (r.url.indexOf("anasayfa") > 0) {
          this.pageActive = MainPages.home;
        } else if (r.url.indexOf("hakkimda") > 0) {
          this.pageActive = MainPages.about_me;
        } else if (r.url.indexOf("iletisim") > 0) {
          this.pageActive = MainPages.contact;
        } else {
          this.pageActive = MainPages.home;
        }
      }
    });
  }

  ngOnInit() {}
  search(searchText) {
    if (searchText == "" || searchText == null || searchText == undefined) {
      return false;
    } else {
      this.router.navigateByUrl(`arama/sayfa/1?s=${searchText}`);
    }
  }
}
