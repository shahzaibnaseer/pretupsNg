import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators,
} from '@angular/forms';
import { ChannelUserService } from '../channel-user.service';
import { NgxSpinnerService } from 'ngx-spinner';

import * as $ from 'jquery';

@Component({
  selector: 'app-channel-user-edit',
  templateUrl: './channel-user-edit.component.html',
  styleUrls: ['./channel-user-edit.component.css'],
})
export class ChannelUserEditComponent implements OnInit, AfterViewInit {
  channelUserId!: string | null;
  editForm!: FormGroup;
  loginDays: Array<String> = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  selectedDays: any = [];
  selectedLoginDays!: FormArray;
  webLogin!: FormGroup;
  patchselectedDays: any[] = [];
  isJqueryWorking!: string;
  roleTypeForm!: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private fb: FormBuilder,
    private service: ChannelUserService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.channelUserId = this._route.snapshot.paramMap.get('id');
    console.log(this.channelUserId);
    this.editForm = this.fb.group({
      personalInformation: this.fb.group({
        firstName: ['', Validators.required],
        lastName: '',
        shortName: ['', Validators.required],
        contactNumber: '',
        contactPerson: '',
        emailId: ['', Validators.required],
        alternateEmail: '',
        ssn: '',
        designation: '',
        subscriberCode: '',
        externalCode: ['', Validators.required],
      }),
      geography: this.fb.group({
        area: ['', Validators.required],
        geography: ['', Validators.required],
        subarea1: ['', Validators.required],
        subarea2: ['', Validators.required],
        subarea3: ['', Validators.required],
        subarea4: ['', Validators.required],
      }),
      address: this.fb.group({
        addressLine1: '',
        addressLine2: '',
        city: '',
        country: '',
        latitude: '',
        longitude: '',
        state: '',
      }),
      notificationLanguage: this.fb.group({
        peerToPeer: 'penglish',
        channelToChannel: 'cenglish',
      }),
      otherInformation: this.fb.group({
        appointmentDate: '',
        company: '',
        documentName: '',
        documentType: '',
        fax: '',
        notificationLanguage: '',
      }),
      // webLogin: this.fb.group({
      //   loginAllowedDays: new FormArray([]),
      // }),
    });

    // console.log(this.webLogin.get('loginAllowedDays'));
    this.webLogin = this.fb.group({
      loginAllowedDays: this.addDaysControl(),
      webLoginId: '',
      allowedIPS: '',
      allowedTime: '',
      mobileLogin: this.fb.group({
        description: '',
        mobileNo: '',
        smscProfile: '',
      }),
    });

    this.roleTypeForm = this.fb.group({
      channelToSubscriberTransfer: false,
      channelToSubscriberReversal: false,
      operatorToChannelReturn: false,
      operatorToChannelTransfer: false,
    });

    this.roleTypeForm.valueChanges.subscribe((resp) => {
      console.log(this.roleTypeForm.value);
    });

    this.getChannelUser();
    this.useJquery();
  }

  ngAfterViewInit(): void {
    this.useJquery();
  }

  //USE JQUERY

  useJquery() {
    // ------------step-wizard-------------
    $(document).ready(function () {
      // $(".nav-tabs > li a[title]").tooltip();

      //Wizard
      $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target);

        if (target.parent().hasClass('disabled')) {
          return false;
        }
        return;
      });

      $('.next-step').click(function (e) {
        var active = $('.wizard .nav-tabs li.active');
        active.next().removeClass('disabled');
        nextTab(active);
      });
      $('.prev-step').click(function (e) {
        var active = $('.wizard .nav-tabs li.active');
        prevTab(active);
      });
    });

    function nextTab(elem: any) {
      $(elem).next().find('a[data-toggle="tab"]').click();
    }
    function prevTab(elem: any) {
      $(elem).prev().find('a[data-toggle="tab"]').click();
    }

    $('.nav-tabs').on('click', 'li', function () {
      $('.nav-tabs li.active').removeClass('active');
      $(this).addClass('active');
    });
  }

  //GETANDPATCHVALUE
  getChannelUser(): void {
    // this.spinner.show();
    this.service.get_channel_user(this.channelUserId).subscribe((resp) => {
      console.log(resp);
      // this.spinner.hide();
      (this.selectedDays =
        resp.userActivityDetails.loginDetails.webLogin.loginAllowedDays),
        this.editForm.patchValue({
          personalInformation: {
            firstName: resp.firstName,
            lastName: resp.lastName,
            shortName: resp.shortName,
            contactNumber:
              resp.userActivityDetails.personalDetails.contactNumber,
            contactPerson:
              resp.userActivityDetails.personalDetails.contactPerson,
            emailId: resp.userActivityDetails.personalDetails.emailId,
            alternateEmail:
              resp.userActivityDetails.personalDetails.alternateEmail,
            ssn: resp.userActivityDetails.personalDetails.ssn,
            designation: resp.userActivityDetails.personalDetails.designation,
            externalCode: resp.userActivityDetails.personalDetails.externalCode,
            subscriberCode:
              resp.userActivityDetails.personalDetails.subscriberCode,
          },
          geography: {
            area: resp.userActivityDetails.personalDetails.geography.area,
            geography:
              resp.userActivityDetails.personalDetails.geography.geography,
            subarea1:
              resp.userActivityDetails.personalDetails.geography.subarea1,
            subarea2:
              resp.userActivityDetails.personalDetails.geography.subarea2,
            subarea3:
              resp.userActivityDetails.personalDetails.geography.subarea3,
            subarea4:
              resp.userActivityDetails.personalDetails.geography.subarea4,
          },
          address: {
            addressLine1:
              resp.userActivityDetails.personalDetails.address.addressLine1,
            addressLine2:
              resp.userActivityDetails.personalDetails.address.addressLine2,
            city: resp.userActivityDetails.personalDetails.address.city,
            country: resp.userActivityDetails.personalDetails.address.country,
            latitude: resp.userActivityDetails.personalDetails.address.latitude,
            longitude:
              resp.userActivityDetails.personalDetails.address.longitude,
            state: resp.userActivityDetails.personalDetails.address.state,
          },
          notificationLanguage: {
            peerToPeer:
              resp.userActivityDetails.personalDetails.notificationLanguage
                .peerToPeer,
            channelToChannel:
              resp.userActivityDetails.personalDetails.notificationLanguage
                .channelToChannel,
          },
          otherInformation: {
            appointmentDate:
              resp.userActivityDetails.personalDetails.otherInformation
                .appointmentDate,
            company:
              resp.userActivityDetails.personalDetails.otherInformation.company,
            documentName:
              resp.userActivityDetails.personalDetails.otherInformation
                .documentName,
            documentType:
              resp.userActivityDetails.personalDetails.otherInformation
                .documentType,
            fax: resp.userActivityDetails.personalDetails.otherInformation.fax,
            notificationLanguage:
              resp.userActivityDetails.personalDetails.otherInformation
                .notificationLanguage,
          },
        });

      this.webLogin.patchValue({
        mobileLogin: {
          description:
            resp.userActivityDetails.loginDetails.mobileLogin.description,
          mobileNo: resp.userActivityDetails.loginDetails.mobileLogin.mobileNo,
          smscProfile:
            resp.userActivityDetails.loginDetails.mobileLogin.smscProfile,
        },
        loginAllowedDays:
          resp.userActivityDetails.loginDetails.webLogin.loginAllowedDays,
        webLoginId: resp.userActivityDetails.loginDetails.webLogin.webLoginId,
        allowedIPS: resp.userActivityDetails.loginDetails.webLogin.allowedIPS,
        allowedTime: resp.userActivityDetails.loginDetails.webLogin.allowedTime,
      });
      // this.getSelectedDay(
      //   resp.userActivityDetails.loginDetails.webLogin.loginAllowedDays
      // );
    });
  }

  //CHECKALLBOXES
  getAllDaysSelected(event: any): any {
    console.log(event.target.value);

    this.webLogin.patchValue({
      loginAllowedDays: [true, true, true, true, true, true, true],
    });
  }
  get loginDaysArray() {
    return <FormArray>this.webLogin.get('loginAllowedDays');
  }
  addDaysControl() {
    const arr = this.loginDays.map((element) => {
      return this.fb.control(false);
    });
    return this.fb.array(arr);
  }
  getSelectedDay() {
    this.selectedDays = [];
    this.loginDaysArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedDays.push(this.loginDays[i]);
      }
    });
  }
  loginAllowedDaysChange(event: any) {
    console.log(event);

    this.selectedLoginDays = this.editForm.controls['webLogin'].get(
      'loginAllowedDays'
    ) as FormArray;
    if (event.target.checked) {
      this.selectedLoginDays.push(new FormControl(event.target.value));
    } else {
      const index = this.selectedLoginDays.controls.findIndex(
        (x) => x.value === event.target.value
      );
      this.selectedLoginDays.removeAt(index);
    }
  }

  updateChannelUser(): void {
    this.spinner.show();
    const body = {
      firstName: this.editForm.value.personalInformation.firstName,
      lastName: this.editForm.value.personalInformation.lastName,
      shortName: this.editForm.value.personalInformation.shortName,
      userId: this.channelUserId,
      personalDetails: {
        address: this.editForm.value.address,
        geography: this.editForm.value.geography,
        notificationLanguage: this.editForm.value.notificationLanguage,
        otherInformation: this.editForm.value.otherInformation,
        ssn: this.editForm.value.personalInformation.ssn,
        subscriberCode: this.editForm.value.personalInformation.subscriberCode,
        externalCode: this.editForm.value.personalInformation.externalCode,
        emailId: this.editForm.value.personalInformation.emailId,
        alternateEmail: this.editForm.value.personalInformation.alternateEmail,
        designation: this.editForm.value.personalInformation.designation,
        contactNumber: this.editForm.value.personalInformation.contactNumber,
        contactPerson: this.editForm.value.personalInformation.contactPerson,
      },

      mobileLogin: this.webLogin.value.mobileLogin,
      webLogin: {
        // loginAllowedDays: this.webLogin.value.loginAllowedDays,
        loginAllowedDays: this.loginDays,
        webLoginId: this.webLogin.value.webLoginId,
        allowedIPS: this.webLogin.value.allowedIPS,
        allowedTime: this.webLogin.value.allowedTime,
      },
    };
    console.log(body);

    this.service
      .update_channel_user(this.channelUserId, body)
      .subscribe((resp) => {
        console.log(resp);
        this.getChannelUser();
      });
  }
}
