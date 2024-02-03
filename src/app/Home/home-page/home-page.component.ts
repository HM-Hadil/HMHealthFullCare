import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations:[
    trigger('cardTrigger',[
      transition(':enter',[
        style({
          opacity:0,
          transform:'translateY(100%)',
        }),
        animate(300),
      ]),
      transition(':leave',[
        animate(300, style( {
          opacity:0,
          transform:'translateX(-100%)',
        })
        )
      ])
    ]),

  ],
})
export class HomePageComponent {
  showCard = true;
/**
 * or fade up
 *
 *   animations: [
    trigger('cardTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
 */
}
