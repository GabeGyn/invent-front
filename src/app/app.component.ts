import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EquipamentoEletronicoComponent } from "./equipamento-eletronico/equipamento-eletronico.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EquipamentoEletronicoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'invent-front';

}
