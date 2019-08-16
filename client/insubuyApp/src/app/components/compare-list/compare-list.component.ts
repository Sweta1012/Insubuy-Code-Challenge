import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-compare-list',
  templateUrl: './compare-list.component.html',
  styleUrls: ['./compare-list.component.css']
})
export class CompareListComponent implements OnInit {

  @Input() compareModalData: any;
  @Output() closeModal = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    console.log('compareModalData::::',this.compareModalData);
  }

  close(){
    this.closeModal.emit(false);
  }
  
}
