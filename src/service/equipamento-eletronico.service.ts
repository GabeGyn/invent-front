import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpClient } from '../shared/custom-http-client';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoEletronicoService {

  constructor(private client: CustomHttpClient) { }

  obterRegistro(): Observable<any[]> {
    return this.client.get('/api/equipamentoeletronico/');
  }

  inserirRegistro(data: any): Observable<any> {
    return this.client.post('/api/equipamentoeletronico/', data)
  }

  atualizarRegistros(data: any): Observable<any> {
    return this.client.put('/api/equipamentoeletronico/'+data.id, data)
  }
    
  apagarRegistro(id: string): Observable<any> {
    return this.client.delete('/api/equipamentoeletronico/' + id)
  }
}