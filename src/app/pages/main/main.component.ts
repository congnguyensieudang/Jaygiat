import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  array = [1, 2, 3, 4];
  array3 = [1, 2, 3, 4];
  constructor() { }

  ngOnInit(): void {
  }

}
