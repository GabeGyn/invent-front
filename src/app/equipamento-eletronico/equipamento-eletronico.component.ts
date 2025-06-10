import { Component } from '@angular/core';
import { EquipamentoEletronicoService } from './equipamento-eletronico.service';
import { FormGroup, FormControl, ReactiveFormsModule } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: 'app-equipamento-eletronico',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './equipamento-eletronico.component.html',
  styleUrl: './equipamento-eletronico.component.css'
})
export class EquipamentoEletronicoComponent {
  
  constructor( private equipamentoEletronicoService: EquipamentoEletronicoService) {
    this.obterRegistros();
  }

  data = [
    {
      id:"dfs",
      nome:"teste",
      tipo:"eletronico",
      qtdeEstoque:10,
      dataInclusao:"15/10/2024",
      temEstoque:true
    },
    {
      id:"dfs",
      nome:"teste",
      tipo:"eletronico",
      qtdeEstoque:10,
      dataInclusao:"15/10/2024",
      temEstoque:true
    },
    { 
      id:"dfs",
      nome:"teste",
      tipo:"eletronico",
      qtdeEstoque:10,
      dataInclusao:"15/10/2024",
      temEstoque:true
    },
    { 
      id:"dfs",
      nome:"teste",
      tipo:"eletronico",
      qtdeEstoque:10,
      dataInclusao:"15/10/2024",
      temEstoque:true
    }
  ]

  dataForm = new FormGroup({
    id: new FormControl(""),
    nome: new FormControl("", [Validators.required]),
    tipo: new FormControl("", [Validators.required]),
    qtdeEstoque: new FormControl<Number>(0, [Validators.required]),
  });

  hiddeButton: boolean = true;

  botaoAtualizar(data: any) {
    this.hiddeButton = false;
    console.log(data)
    this.dataForm.patchValue(data);
  }

  obterRegistros() {
    this.equipamentoEletronicoService.obterRegistro().subscribe((ret) => {
      this.data = ret;
    });
  }

  inserirRegistro() {
    this.equipamentoEletronicoService.inserirRegistro(this.dataForm.value).subscribe((ret) => {
      this.obterRegistros();
    })
  }

  atualizarRegistro() {
    this.hiddeButton = true;
    this.equipamentoEletronicoService.atualizarRegistros(this.dataForm.value).subscribe((ret) => {
      this.obterRegistros();
    })
  }

  apagarRegistro(id: string) {
    this.equipamentoEletronicoService.apagarRegistro(id).subscribe((ret) => {
      this.obterRegistros();
    })
  }
}
