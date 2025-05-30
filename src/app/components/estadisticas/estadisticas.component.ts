import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from '../../interfaces/categoria.interface';
import { JuegosDataService } from '../../services/juegos-data.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'

  
})
export class EstadisticasComponent implements OnInit {
  
  estadisticas$!:Observable<{
    totalgames: number;
    gratis: number;
    paga: number;
  }>;
  
  constructor(private juegosService: JuegosDataService) {}

  ngOnInit(): void {
    this.estadisticas$ = this.juegosService.juegos$.pipe(
      map(juegos => {
        let totalgames = juegos.length;
        let gratis = juegos.filter(j => j.esGratis).length;
        let paga = totalgames - gratis;
             
        return { totalgames, gratis, paga};
      })
    );
  }
}
