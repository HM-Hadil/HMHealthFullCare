import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('photoState', [
      state(
        'move',
        style({
          transform: 'translateX(-50%) translateY(50px)',
        })
      ),

      state(
        'enlarge',
        style({
          transform: 'scale(1.5)',
        })
      ),
      state(
        'spin',
        style({
          transform: 'rotateT(180deg) rotateZ(90deg)',
        })
      ),



      transition('spin => move', animate('2000ms ease-out')),
      transition('* => *', animate('500ms ease')),
    ]),

  ],

})
export class AboutComponent implements OnInit {
  imgUrl =
    'https://cdn.slidesharecdn.com/ss_thumbnails/healthteam-151013044850-lva1-app6892-thumbnail.jpg?width=640&height=640&fit=bounds';
  position!: string;

  constructor() {}

  ngOnInit(): void {}
  changePosition(newPos: string) {
    this.position = newPos;
  }
}
