import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) {}

  async presentActionSheet(amigo) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deleteAmigo(amigo);
          console.log('Delete clicked');
        }
      }, {
        text: 'Editar',
        icon: 'create',
        handler: () => {
          console.log('Share clicked');
        }
      },
       {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  deleteAmigo(amigo) {
    this.amigos.splice(this.amigos.indexOf(amigo), 1);
  }

  ngOnInit() {
  }

  amigos = [
    {
      nome: 'Ramon',
      idade: 40,
      amizade: 2,
    },
    {
      nome: 'Rafaela',
      idade: 45,
      amizade: 1
    },
    {
      nome: 'Otaviano',
      idade: 50,
      amizade: 2
    },
    {
      nome: 'Cruvinel',
      idade: 35,
      amizade: 3
    },
    {
      nome: 'Flavia',
      idade: 40,
      amizade: 2
    }
  ];

}
