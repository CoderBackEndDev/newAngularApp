import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng6-toastr';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {

  namevalue:string;
  EmailAddress:string;
  

  constructor() {
   
   }
  
  ngOnInit() {
  }
  showSuccess() {
    if(this.namevalue!="" && this.EmailAddress!=""){
      this.namevalue=" howdy";
    }
    
  }

}
