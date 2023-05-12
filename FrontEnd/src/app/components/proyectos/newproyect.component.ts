import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-newproyect',
  templateUrl: './newproyect.component.html',
  styleUrls: ['./newproyect.component.css']
})
export class NewproyectComponent implements OnInit {
  nombre: string;
  link: string;
  descripcion: string;

  constructor(private proyectosS: ProyectosService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const proyectos = new Proyectos(this.nombre, this.link, this.descripcion);
    this.proyectosS.save(proyectos).subscribe(
      (data) => {
        alert('Proyecto añadido correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Falló');
        this.router.navigate(['']);
      }
    );
  }
}