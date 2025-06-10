import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpClient } from '../../shared/custom-http-client';
import { EquipamentoEletronico } from './equipamento-eletronico';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoEletronicoService {

  constructor(private client: CustomHttpClient) { }

  obterRegistro(): Observable<any[]> {
    return this.client.get('/equipamento_eletronico');
  }

  inserirRegistro(data: any): Observable<any> {
    return this.client.post('/equipamento_eletronico/', data)
  }

  atualizarRegistros(data: any): Observable<any> {
    return this.client.put('/equipamento_eletronico/' + data.id, data)
  }
    
  apagarRegistro(id: string): Observable<any> {
    return this.client.delete('/equipamento_eletronico/' + id)
  }
}
