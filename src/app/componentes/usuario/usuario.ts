import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true,
  templateUrl: './usuario.html',
  styleUrl: './usuario.css'
})
export class Usuario {
  @Input({ required: true }) usuario!: {
    id: string;
    avatar: string;
    nombre: string;
  };


  @Output() seleccionar = new EventEmitter<string>();

  get rutaAvatar() {
    return 'img/' + this.usuario.avatar;
  }

  
  alSeleccionarUsuario() {
    this.seleccionar.emit(this.usuario.id);
  }
}
