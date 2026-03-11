import { Component } from '@angular/core';
import { Encabezado } from './componentes/encabezado/encabezado';
import { Usuario } from './componentes/usuario/usuario';
import { USUARIOS_FALSOS } from './usuarios-falsos';
import { Tareas } from './componentes/tareas/tareas';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Encabezado, Usuario, Tareas],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  usuarios = USUARIOS_FALSOS;

  idUsuarioSeleccionado?: string;


  get usuarioSeleccionado() {
    return this.usuarios.find((u) => u.id === this.idUsuarioSeleccionado);
  }


  alSeleccionarUsuario(id: string) {
    this.idUsuarioSeleccionado = id;
    console.log('Usuario seleccionado con ID:', id);
  }
}
