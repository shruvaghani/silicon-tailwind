import { Component } from '@angular/core';
import { cryptoListData } from '../../data';

@Component({
  selector: 'mobile-showcase-v2-crypto',
  imports: [],
  templateUrl: './crypto.html',
  styles: ``,
})

export class Crypto {
  cryptoListData = cryptoListData;
}
