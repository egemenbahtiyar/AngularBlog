import { Router } from "@angular/router";
import { AuthService } from "./../../services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-login",
  templateUrl: "./admin-login.component.html",
  styleUrls: ["./admin-login.component.css"],
})
export class AdminLoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}
  login(email: string, password: string) {
    this.authService.isAuthenticated(email, password).subscribe((result) => {
      if (result.status == true) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        this.router.navigate(["/admin"]);
      } else {
        alert("Email veya şife yanlış");
      }
    });
  }
}
