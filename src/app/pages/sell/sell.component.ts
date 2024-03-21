import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {

  isVisible = false;

  newAuctionForm!: FormGroup;

  submitForm(): void {
    if (this.newAuctionForm.valid) {
      console.log('submit', this.newAuctionForm.value);
      this.isVisible = false;
    } else {
      Object.values(this.newAuctionForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.newAuctionForm = this.fb.group({
      name: [null, [Validators.required]],
      reserve_price: [null, [Validators.required]],
      bid_pace: [null, [Validators.required]],
      breaking_bid: [null, [Validators.required]],
      description: [null, [Validators.required]],
      image: [null, [Validators.required]],
      expiration: [null, [Validators.required]],
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  defaultFileList: NzUploadFile[] = [
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-2',
      name: 'yyy.png',
      status: 'error'
    }
  ];

  fileList1 = [...this.defaultFileList];
  fileList2 = [...this.defaultFileList];

  changePic(event: any) {
    console.log(event);

  }
}
