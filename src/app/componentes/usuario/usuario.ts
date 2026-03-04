import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) nombre!: string;
  @Output() seleccion = new EventEmitter<string>();

  get rutaImagen() {
    return 'img/' + this.avatar;
  }

  alSeleccionarUsuario() {
    this.seleccion.emit(this.id);
  }
}
