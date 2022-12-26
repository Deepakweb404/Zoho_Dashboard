import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {

  sidebarshow = false;
  Personalinfo: any=[];
  Timeline : any=[];
 
  
  constructor() {
    // const start = new Date("02/05/2020");
    // const end = new Date("02/10/2020");
    
    // let loop = new Date(start);
    // while (loop <= end) {
    //   console.log(loop);
    //   let newDate = loop.setDate(loop.getDate() + 1);
    //   loop = new Date(newDate);
    // }
 
  
   }


  
  // togglesidebar() {
  //   this.sidebarshow = !this.sidebarshow;
  // }
  displayStyle = 'none';
  displayleft='0px';
  openPopup() {
    this.displayStyle = 'block';
    this.sidebarshow = !this.sidebarshow;
    this.displayleft ='250px';
  
  }
  closePopup() {
    this.displayStyle = 'none';
    this.sidebarshow = !this.sidebarshow;
    this.displayleft ='0px';
  }

  // home1: boolean = false;

  // displaydata(){
  //   this.home1=!this.home1;
  // }






  imageShow = false;

  displaydata() {
    this.imageShow = !this.imageShow;
  }

  ngOnInit(): void {
    this.Personalinfo=[
      {
        info1:"Lead Owner",
        info2:"Mr . Deepak Ahirwar"
      },
      {
        info1:"Phone Number",
        info2:"1234567890"
      },
      {
        info1:"Tel Number",
        info2:"1234567890"
      },
      {
        info1:"Lead Status",
        info2:"Contacted"
      },
    ];
    this.Timeline=[
      {
        title:"Task No. 1",
        subtitle:"created by Deepak",
        info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, corrupti.",
        starttime:"4:45am",
        endtime:"12:00pm",
      },
      {
        title:"Task No. 2",
        subtitle:"created by Deepak",
        info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, corrupti.",
        starttime:"4:45am",
        endtime:"12:00pm",
      },
      {
        title:"Task No. 3",
        subtitle:"created by Deepak",
        info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, corrupti.",
        starttime:"4:45am",
        endtime:"12:00pm",
      },
      {
        title:"Task No. 4",
        subtitle:"created by Deepak",
        info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, corrupti.",
        starttime:"4:45am",
        endtime:"12:00pm",
      },
      {
        title:"Task No. 5",
        subtitle:"created by Deepak",
        info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, corrupti.",
        starttime:"4:45am",
        endtime:"12:00pm",
      },
      {
        title:"Task No. 6",
        subtitle:"created by Deepak",
        info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, corrupti.",
        starttime:"4:45am",
        endtime:"12:00pm",
      },
    ]
  
  }


  
}

