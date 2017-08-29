import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss']
})

export class ShowInfoComponent {
  @Input() show: any;
}
