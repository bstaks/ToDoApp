import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  private _CustomerName: string= 'Abhishek';
  public get CustomerName(): string {
    return this._CustomerName;
  }
  public set CustomerName(v: string) {
    this._CustomerName = v;
  }

  private _CustomerCode: string;
  public get CustomerCode(): string {
    return this._CustomerCode;
  }
  public set CustomerCode(v: string) {
    this._CustomerCode = v;
  }
   day: any = '';
  constructor() { }

  ngOnInit() {
  }

}
