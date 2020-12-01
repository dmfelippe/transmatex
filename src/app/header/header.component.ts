import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  page: String = '';

  constructor(

    private router: Router
  ) { }

  ngOnInit() {
  }

  navigate(page: String) {

    this.page = page;
    this.router.navigate([page]);
  }
}
