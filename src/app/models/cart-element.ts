export class CartElement {
  constructor(apiObject: any) {
    this.title        = apiObject.volumeInfo.title,
    this.author       = apiObject.volumeInfo.authors,
    this.price        = apiObject.saleInfo.retailPrice.amount,
    this.currencyCode = apiObject.saleInfo.retailPrice.currencyCode,
    this.thumbnail    = apiObject.volumeInfo.imageLinks.thumbnail;
  }
}

