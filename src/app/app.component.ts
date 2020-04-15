import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'William Evan';
  itembuah = [
    {
      nama : 'Kelengkeng',
      harga : 10000
    },
    {
      nama : 'Jeruk',
      harga : 5000
    },
    {
      nama : 'Apel',
      harga : 3000
    }];

    itemArr = ["aa","bb","cc"]

    show: boolean = true;

    user = "";

    pesan='';
    klikButton(){
      this.pesan='tombol ditekan';
    }
}
