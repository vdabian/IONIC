import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.page.html',
  styleUrls: ['./viagens.page.scss'],
})
export class ViagensPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

 viagens = [
    {
      local: 'Rio Acima',
      descricao: 'Cidade mineira',
      data: '21/05/2021',
      imagem: 'https://images.squarespace-cdn.com/content/v1/52c0b141e4b0b87925bacd01/1590093029659-YQIDYJ508Z23IYST766W/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/fazer+roteiro+rio+acima+minas+gerais'
    },
    {
      local: 'Cairo',
      descricao: 'Egito',
      data: '10/05/2021',
      imagem: 'https://blog.tzviagens.com.br/wp-content/uploads/2013/10/Dica-de-viagem-Cairo-Egito-774x500.jpg'
    }
  ];

}
