import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TheaterService } from '../services/teatro.service';

@Component({
  selector: 'app-newtheater',
  templateUrl: './newtheater.component.html',
  styleUrls: ['./newtheater.component.css']
})
export class NewtheaterComponent implements OnInit {
  @Output() newTheaterEvent = new EventEmitter<string>();

  constructor(private service: TheaterService) { }

  ngOnInit(): void {
  }

  createTheater(){
    this.service.newData().subscribe(
      {
        next: (x: any) => {
          const key = x;
          const platea = new Array(7).fill("").map(() => new Array(10).fill("x"));
          const palco = new Array(4).fill("").map(() => new Array(6).fill("x"));
          const prenotazione = platea.concat(palco);
          this.service.setData(key, prenotazione).subscribe(
            {
              next: (x: any) => {
                this.newTheaterEvent.emit(key);
              },
              error: err => console.error(`Observer got an error: ${JSON.stringify(err)}`)
            }
          )
        },
        error: err => console.error(`Observer got an error: ${JSON.stringify(err)}`)
      }
    )
  }

}