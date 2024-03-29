import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})



export class HeaderComponent implements OnInit {

  width = 0;

  @HostListener('window:resize', ['$event'])
  // tslint:disable-next-line:typedef
  onResize(event) {
    this.width = event.target.innerWidth;
  }

  constructor() { }

  ngOnInit(): void {
    this.width = window.innerWidth;
  }

}
