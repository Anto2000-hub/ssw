import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nominativo',
  templateUrl: './nominativo.component.html',
  styleUrls: ['./nominativo.component.css']
})
export class NominativoComponent implements OnInit {
  @Output() newPrenotazioneEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  newPrenotazione(newName: string){
    this.newPrenotazioneEvent.emit(newName);
  }

}