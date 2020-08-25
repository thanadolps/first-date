import {Component, Input, OnInit} from '@angular/core';
import {Contractor} from '../struct/contractor';

@Component({
  selector: 'app-display-contracter',
  templateUrl: './display-contracter.component.html',
  styleUrls: ['./display-contracter.component.css']
})
export class DisplayContracterComponent implements OnInit {

  @Input()
  contractors: Contractor[];

  constructor() { }

  ngOnInit(): void {
  }

  openUrl(link: string) {
    window.open(link);
  }

}
