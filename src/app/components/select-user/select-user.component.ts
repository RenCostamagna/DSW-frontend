import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent {

  constructor(private router: Router) {}

  goToClientes() {
    this.router.navigate(['/cliente']);
  }

  goToAdmin() {
    this.router.navigate(['/admin-login']);
  }
}
