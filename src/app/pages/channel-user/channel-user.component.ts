import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChannelUserService } from './channel-user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-channel-user',
  templateUrl: './channel-user.component.html',
  styleUrls: ['./channel-user.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ChannelUserComponent implements OnInit {
  filterForm!: FormGroup;
  public channelUsers: any = [];
  public itemPerpage: number = 2;
  // Pagination parameters.
  p: any = 1;
  count: Number = 5;
  maxitemsPerPage!: number;
  constructor(
    private service: ChannelUserService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      category: 'default',
      domain: 'default',
      geography: 'default',
      status: 'default',
    });
    this.getClientUsers();
  }

  getClientUsers(): any {
    // this.spinner.show();
    this.service.get_channel_users().subscribe((resp: any) => {
      console.log(resp);
      this.channelUsers = [...resp];
      // this.spinner.hide();
      console.log(this.channelUsers.length);
      this.maxitemsPerPage = this.channelUsers.length;
      this.p = 1;
    });
  }

  onChangePageNumber(event: any): any {
    console.log(event.target.value);

    this.itemPerpage = event.target.value;
  }

  gotoPage(event: any): any {
    console.log(event.target.value);

    this.p = event.target.value;
  }
  filterClientUser(): any {
    console.log(this.filterForm.value);
    this.spinner.show();
    this.service
      .filter_channel_user(this.filterForm.value)
      .subscribe((resp: any) => {
        this.channelUsers = [...resp];
        this.spinner.hide();
        this.p = 1;
      });
  }

  downloadCsv(): any {
    this.spinner.show();
    this.service.download_csv().subscribe((resp: any) => {
      let filename = 'ChannelUser';
      this.spinner.hide();
      let blob: Blob = resp.body as Blob;
      let a = document.createElement('a');
      a.download = filename;
      a.href = window.URL.createObjectURL(blob);
      a.click();
    });
  }
}
