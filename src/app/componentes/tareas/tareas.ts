import { Component, Input } from '@angular/core';
import { Tarea } from '../../tarea/tarea';


@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [Tarea],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css'
})
export class Tareas {
  @Input({ required: true }) idUsuario!: string;
  @Input({ required: true }) nombre!: string;


  tareas = [
    {
      id: 't1',
      idUsuario: 'u1',
      titulo: 'TITULO TAREA',
      resumen: 'RESUMEN',
      fechaLimite: 'TIEMPO',
    },
    {
      id: 't2',
      idUsuario: 'u2',
      titulo: 'TITULO TAREA',
      resumen: 'RESUMEN',
      fechaLimite: 'TIEMPO',
    },
    {
      id: 't3',
      idUsuario: 'u3',
      titulo: 'TITULO TAREA',
      resumen: 'RESUMEN',
      fechaLimite: 'TIEMPO',
    },
    {
      id: 't4',
      idUsuario: 'u4',
      titulo: 'TITULO TAREA',
      resumen: 'RESUMEN',
      fechaLimite: 'TIEMPO',
    },
    {
      id: 't5',
      idUsuario: 'u5',
      titulo: 'TITULO TAREA',
      resumen: 'RESUMEN',
      fechaLimite: 'TIEMPO',
    },
    {
      id: 't6',
      idUsuario: 'u6',
      titulo: 'TITULO TAREA',
      resumen: 'RESUMEN',
      fechaLimite: 'TIEMPO',
    }
  ];

  get tareasSeleccionadas() {
    return this.tareas.filter((t) => t.idUsuario === this.idUsuario);
  }
}