import { Component, Input } from '@angular/core';
import { Tarea } from '../../tarea/tarea';
import { NuevaTarea } from '../nueva-tarea/nueva-tarea';


@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [Tarea, NuevaTarea],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css'
})
export class Tareas {
  @Input({ required: true }) idUsuario!: string;
  @Input({ required: true }) nombre!: string;

  estaAnadiendoTarea = false;


  tareas = [
    {
      id: 't1',
      idUsuario: 'u1',
      titulo: 'CREAR NUEVO ESPACIO DE TRABAJO',
      resumen: 'Crear un nuevo espacio de trabajo para organizar las tareas de tus compañeros',
      fechaLimite: '2026-02-21',
    },
    {
      id: 't2',
      idUsuario: 'u2',
      titulo: 'REVISAR LAS TAREAS DE UN ESPACIO DE TRABAJO',
      resumen: 'Revisar las tareas de un espacio de trabajo para asegurarse de que estén bien organizadas',
      fechaLimite: '2026-03-23',
    },
    {
      id: 't3',
      idUsuario: 'u3',
      titulo: 'ORGANIZAR LAS TAREAS DE UN ESPACIO DE TRABAJO',
      resumen: 'Organizar las tareas de un espacio de trabajo para que sean fáciles de encontrar y completar',
      fechaLimite: '2026-03-26',
    },
     {
      id: 't7',
      idUsuario: 'u3',
      titulo: 'EMPEZAR CON LA ESTRUCTURA HTML',
      resumen: 'Empezar a utilizar la estructura HTML para crear páginas web',
      fechaLimite: '2026-05-12',
    },
    {
      id: 't4',
      idUsuario: 'u4',
      titulo: 'UTILIZAR LA ESTRUCTURA CSS',
      resumen: 'Utilizar la estructura CSS para dar estilo a tus páginas web',
      fechaLimite: '2026-07-14',
    },
    {
      id: 't5',
      idUsuario: 'u5',
      titulo: 'LOGICA DE PROGRAMACIÓN',
      resumen: 'Aprender a programar utilizando lenguajes de programación como JavaScript, Python o Java',
      fechaLimite: '2026-08-15',
    },
    {
      id: 't6',
      idUsuario: 'u6',
      titulo: 'SERVIDOR WEB',
      resumen: 'Aprender a configurar un servidor web para alojar tus páginas web',
      fechaLimite: '2026-11-20',
    }
  ];

  get tareasSeleccionadas() {
    return this.tareas.filter((t) => t.idUsuario === this.idUsuario);
  }

  alCompletarTarea(id: string) {
    this.tareas = this.tareas.filter((tarea) => tarea.id !== id);
  }

  alEmpezarAnadirTarea(){
    this.estaAnadiendoTarea = true;
  }

  alCerrarAnadirTarea(){
    this.estaAnadiendoTarea = false;
  }
}
