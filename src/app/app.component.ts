import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'invent-front';

  data = [
    {
      nome:"teste",
      tipo:"eletronico",
      qtdeEstoque:10,
      dataInclusao:"15/10/2024",
      temEstoque:true
    },
    {
      nome:"teste",
      tipo:"eletronico",
      qtdeEstoque:10,
      dataInclusao:"15/10/2024",
      temEstoque:true
    },
    {
      nome:"teste",
      tipo:"eletronico",
      qtdeEstoque:10,
      dataInclusao:"15/10/2024",
      temEstoque:true
    },
    {
      nome:"teste",
      tipo:"eletronico",
      qtdeEstoque:10,
      dataInclusao:"15/10/2024",
      temEstoque:true
    }
  ]
}
