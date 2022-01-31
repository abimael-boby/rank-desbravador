import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


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
