import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-layout-editor-lead',
  templateUrl: './layout-editor-lead.component.html',
  styleUrls: ['./layout-editor-lead.component.scss'],
})
export class LayoutEditorLeadComponent implements OnInit {
  fixedFields: any = [];
  field: any = [];
  field1: any;
  address: any = [];
  descrpition: any = [];
  setting1: any = [];
  constructor() {}

  imageShow = false;

  toggleDisplayDiv() {
    this.imageShow = !this.imageShow;
  }

  // modal start

  displayStyle = 'none';

  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
  // modal ends

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }


  ngOnInit(): void {
    this.fixedFields = [
      {
        input: 'fa fa-battery-empty',
        fieldName: 'Single Line',
      },
      {
        input: 'fa fa-battery-three-quarters',
        fieldName: 'Multi-Line',
      },
      {
        input: 'fa fa-mail-bulk',
        fieldName: 'Email',
      },
      {
        input: 'fa fa-phone',
        fieldName: 'Phone',
      },
      {
        input: 'far fa-file-alt',
        fieldName: 'Pick List',
      },
      {
        input: 'fa fa-mailchimp',
        fieldName: 'Multi-Select',
      },
      {
        input: 'far fa-calendar-alt',
        fieldName: 'Date',
      },
      {
        input: 'fa fa-calendar-times',
        fieldName: 'Date/Time',
      },
      {
        input: 'fa fa-battery-empty',
        fieldName: 'Number',
      },
      {
        input: 'fa fa-battery-empty',
        fieldName: 'Auto Number',
      },
      {
        input: 'fa fa-battery-empty',
        fieldName: 'Currency',
      },
      {
        input: 'fa fa-battery-empty',
        fieldName: 'Decimal',
      },
      {
        input: 'fa fa-percentage',
        fieldName: 'Percent',
      },
      {
        input: 'fa fa-battery-empty',
        fieldName: 'Long-Integer',
      },
      {
        input: 'fa fa-battery-empty',
        fieldName: 'CheckBox',
      },
      {
        input: 'fa fa-battery-empty',
        fieldName: 'URL',
      },
      {
        input: 'fa fa-battery-empty',
        fieldName: 'LookUp',
      },
      {
        input: 'fa fa-battery-empty',
        fieldName: 'Formula',
      },
      {
        input: 'fa fa-battery-empty',
        fieldName: 'User',
      },
      {
        input: 'fa fa-battery-empty',
        fieldName: 'File Upload',
      },
      {
        input: 'fa fa-battery-empty',
        fieldName: 'Image Upload',
      },
      {
        input: 'fa fa-battery-empty',
        fieldName: 'Multi-Select Lookup',
      },
    ];
    this.field = [
      {
        input: 'text',
        fieldName2: '1',
        disabled: true,
      },
      {
        fieldName: 'text',
        fieldName2: '2',
        disabled: true,
      },
      {
        fieldName: 'text',
        fieldName2: '3',
        disabled: true,
      },
      {
        fieldName: 'text',
        fieldName2: '4',
        disabled: true,
      },
      {
        fieldName: 'text',
        fieldName2: '5',
        disabled: true,
      },
      {
        fieldName: 'text',
        fieldName2: '6',
        disabled: false,
      },
    ];
    this.address = [
      {
        add1: 'Street',
        add2: 'Single Line',
      },
      {
        add1: 'City',
        add2: 'Single Line',
      },
      {
        add1: 'State',
        add2: 'Single Line',
      },
      {
        add1: 'Zip Code',
        add2: 'Single Line',
      },
      {
        add1: 'Country',
        add2: 'Single Line',
      },
    ];
    this.descrpition = [
      {
        des1: 'Description',
        des2: 'Multiline',
      },
    ];
  }
}
