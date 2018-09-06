import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'chiri-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() idval:string;

  constructor() { }

  ngOnInit() {
  }

}
