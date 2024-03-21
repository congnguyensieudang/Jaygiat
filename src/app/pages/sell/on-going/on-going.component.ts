import { Component, OnInit } from '@angular/core';
import { LiveAuctionComponent } from '../live-auction/live-auction.component';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-on-going',
  templateUrl: './on-going.component.html',
  styleUrls: ['./on-going.component.scss']
})
export class OnGoingComponent implements OnInit {

  constructor(
    private modal: NzModalService
  ) { }

  ngOnInit(): void {

  }

  openLiveAuction(): void {
    const modal = this.modal.create({
      nzTitle: 'Live auction is in progress',
      nzContent: LiveAuctionComponent,
      nzFooter: null,
      nzWidth: '1000px',
      nzComponentParams: {
        // actionForm: 'edit',
        // detailRecord: data,
      }
    });
    modal.afterClose.subscribe((result) => {
      if (result) {
        setTimeout(() => {
          // this.fetchListUser();
        }, 500)
      }
    })
  }
}
