import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  activatedRoute = '';
  // @Input()
  // device: boolean = false;
  activateRoute(activatedRoute: string) {
    this.activatedRoute = this.activatedRoute;
  }
  constructor() {}

  ngOnInit(): void {}
}
