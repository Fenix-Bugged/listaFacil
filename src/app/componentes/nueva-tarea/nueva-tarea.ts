import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <--- 1. IMPORTAR ESTO

@Component({
  selector: 'app-nueva-tarea',
  standalone: true,
  imports: [FormsModule], // <--- 2. AGREGARLO AQUÍ
  templateUrl: './nueva-tarea.html',
  styleUrl: './nueva-tarea.css'
})
export class NuevaTarea {
  @Output() cancelar = new EventEmitter<void>();

  // Estas son las variables que usas en el [(ngModel)] (Pág. 43)
  tituloIngresado = '';
  resumenIngresado = '';
  fechaIngresada = '';

  alCancelar() {
    this.cancelar.emit();
  }

  alEnviar() {
    // Aquí irá la lógica para guardar después
    console.log('Datos capturados:', this.tituloIngresado, this.resumenIngresado);
  }
}
