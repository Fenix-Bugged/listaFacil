import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tarea',
  standalone: true,
  templateUrl: './tarea.html',
  styleUrl: './tarea.css'
})
export class Tarea {

  @Input({ required: true }) tarea!: {
    id: string;
    idUsuario: string;
    titulo: string;
    resumen: string;
    fechaLimite: string;
  };
  @Output() completar = new EventEmitter <string>();
  alFinalizarTarea(){
    this.completar.emit(this.tarea.id);
  }
}
