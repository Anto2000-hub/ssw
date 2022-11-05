import { Component, OnInit } from '@angular/core';
import { TheaterService } from '../services/teatro.service';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css']
})
export class TheaterComponent{
  platea: any[] = [];
  palco: any[] = [];
  theaters: string[] = [];
  scrivi: string = "";
  show: string = "";
  theaterKey: string = "";

  constructor(private service: TheaterService){}

  addTheater(newTeatro: string){
    this.theaters.push(newTeatro);
  }

  updateTheater(key: string){
    this.service.getData(key).subscribe(
      {
        next: (x: any) => { 
          const prenotazione = JSON.parse(x); 
          this.platea = prenotazione.slice(0, 7); 
          this.palco = prenotazione.slice(7); 
          this.theaterKey = key; 
        },
        error: err => alert("Chiave inserita non valida")
      }
    )
  }

  paint(nome: string): string { 
    return nome !== "x" ? "red" : "green"; 
  }

  showBooking(nome: string, riga: number, colonna:number, teatro: any[]): void {
    let posizione: string;
    if(teatro.length === 7){
      posizione = "platea";
    }
    else{
      posizione = "palco";
    }
    if(this.scrivi !== "" && nome === "x"){
      teatro[riga][colonna] = this.scrivi;
      const prenotazione = this.platea.concat(this.palco);
      this.service.setData(this.theaterKey, prenotazione).subscribe(
        {
          next: (x: any) => { 
            this.show = `Il posto ${posizione} P${riga+1}-${colonna+1} è stato prenotato da ${this.scrivi}`;
            this.scrivi = "";
          },
          error: err => console.error(`Observer got an error: ${JSON.stringify(err)}`)
        }
      )
    }
    else if(this.scrivi !== "" && nome !== "x"){
      this.show = `Impossibile prenotare il posto ${posizione} P${riga+1}-${colonna+1} perchè è occcupato da  ${nome}, scegli un altro posto.`;
    }
    else{
      this.show = `Il posto ${posizione} P${riga+1}-${colonna+1} è occupato da ${nome}`;
    }
  } 
}