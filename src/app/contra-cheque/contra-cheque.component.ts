import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contra-cheque',
  templateUrl: './contra-cheque.component.html',
  styleUrls: ['./contra-cheque.component.sass'],
})
export class ContraChequeComponent {
  constructor(private http: HttpClient) {}

  rg: string = '';
  link =
    'https://wwws.portaldoservidor.pr.gov.br/ccheque/ext/contrachequeM4Cres.asp?v=';
  tokenDecode =
    '{MDF8MjAxOHwwMDAwMDAxMjk5NTkzNTV8UFJ8TnxzYXJhdG9uZGVsbG9AeWFob28uY29tLmJy}';

  urlconsultacheques =
    'https://wwws.portaldoservidor.pr.gov.br/ccheque/ext/selccheques.asp?val=MTI5OTU5MzU1fFBSfE58c2FyYXRvbmRlbGxvQHlhaG9vLmNvbS5icg==';

  async buscar() {
    const formData = new FormData();

    //Passar pelos meses e anos testando se retorna algo
    formData.append('mes', '1');
    formData.append('ano', '2018');


    //se Retornar algo aqui
    this.http.post(this.urlconsultacheques, formData).subscribe((response) => {
      //salva o dado em uma variavel nova pra usar depois / mostrar o ano na tela, algo assim
      console.log(response);
    });

    //coloca as datas de acordo com o retorno do processo anterior
    const tokenNovo = btoa(
      `530538|2019-01-17|2019-01-17|8|8|000000${this.rg}|PR|CADOCENTE|` +
        this.tokenDecode
    );

    //pronto, agora vai funcionar
    window.open(`${this.link}${tokenNovo}`, '_blank');
  }
}
