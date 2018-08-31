import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations'
@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.scss'],
  animations: [
      trigger('animate',[
        transition('* <=>*',[
          query(':enter',[
            style({ opacity:0,transform:'translateY(-15px)'}),
            stagger('50ms',
            animate('550ms ease-out',
          style({opacity:1,transform:'translateY(0px)'})))
           ],{optional:true}),
          query(':leave',animate('50ms',style({opacity:0})),
           {optional:true})
        ])])]
})
export class NavTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
