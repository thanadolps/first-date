import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../struct/message';

@Component({
  selector: 'app-display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.css']
})
export class DisplayMessageComponent implements OnInit {

  @Input()
  message: Message;

  @Input()
  email: string;

  constructor() { }

  ngOnInit(): void {
  }

}
