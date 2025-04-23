export class Product {
    nazwa: string;
    cena: number;
    dataUtworzenia: Date;
    czyPromocja: Boolean;
    
    constructor(nazwa: string, cena: number, data: Date, czyPromo: Boolean) {
      this.nazwa = nazwa;
      this.cena = cena;
      this.dataUtworzenia = data;
      this.czyPromocja = czyPromo;
    }
  }