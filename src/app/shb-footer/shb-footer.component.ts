import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shb-footer',
  templateUrl: './shb-footer.component.html',
  styleUrls: ['./shb-footer.component.css']
})
export class ShbFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getYear = function () {
    return new Date().getFullYear();
  };
}
