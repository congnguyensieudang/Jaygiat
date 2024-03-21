import { Component, OnInit } from '@angular/core';

interface DataItem {
  name: string;
  chinese: number;
  math: number;
}

@Component({
  selector: 'app-live-auction',
  templateUrl: './live-auction.component.html',
  styleUrls: ['./live-auction.component.scss']
})
export class LiveAuctionComponent implements OnInit {
  listOfColumn = [
    {
      title: 'Name',
      compare: null,
      priority: false
    },
    {
      title: ' Date',
      compare: (a: DataItem, b: DataItem) => a.chinese - b.chinese,
      priority: 3
    },
    {
      title: 'Bid',
      compare: (a: DataItem, b: DataItem) => a.math - b.math,
      priority: 2
    }
  ];
  listOfData: DataItem[] = [
    {
      name: 'John Brown',
      chinese: 98,
      math: 60
    },
    {
      name: 'Jim Green',
      chinese: 98,
      math: 66
    },
    {
      name: 'Joe Black',
      chinese: 98,
      math: 90,
    },
    {
      name: 'Jim Red',
      chinese: 88,
      math: 99,
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
