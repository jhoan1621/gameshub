import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from '../../interfaces/categoria.interface';
import { CategoriasService } from '../../services/categorias.service';
@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'

  
})
export class EstadisticasComponent implements OnInit {
  
  estadisticasConContador$!: Observable<Array<Categoria & { contador: number }>>;
    
    constructor(private estadisticasService: CategoriasService) {}
    
    ngOnInit(): void {
      this.estadisticasConContador$ = this.estadisticasService.obtenerCategoriasConContador();
    }
}
