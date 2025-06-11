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

  data: any;

  dataForm = new FormGroup({
    id: new FormControl(""),
    nome: new FormControl("", [Validators.required]),
    tipo: new FormControl("", [Validators.required]),
    qtdeEstoque: new FormControl<Number>(0, [Validators.required]),
  });
  
  hiddeButton: boolean = true;

  botaoAtualizar(data: any) {
    this.hiddeButton = false;
    this.dataForm.patchValue(data);
  }

  obterRegistros() {
    this.equipamentoEletronicoService.obterRegistro().subscribe((ret) => {
      this.data = ret;
    });
  }

  inserirRegistro() {
    let data = {
      nome: this.dataForm.value.nome,
      tipo: this.dataForm.value.tipo,
      qtdeEstoque: this.dataForm.value.qtdeEstoque
    };

    this.equipamentoEletronicoService.inserirRegistro(data).subscribe((ret) => {
      this.dataForm.reset();
      this.obterRegistros();
    });
  }

  atualizarRegistro() {
    this.hiddeButton = true;
    this.equipamentoEletronicoService.atualizarRegistros(this.dataForm.value).subscribe((ret) => {
      this.dataForm.reset();
      this.obterRegistros();
    });
  }

  apagarRegistro(id: string) {
    this.equipamentoEletronicoService.apagarRegistro(id).subscribe((ret) => {
      this.obterRegistros();
    });
  }
}
