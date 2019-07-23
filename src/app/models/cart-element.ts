export class CartElement {
  constructor(apiObject: any) {
    this.title        = apiObject.volumeInfo.title,
    this.author       = apiObject.volumeInfo.authors,
    this.price        = this.validatePrice(apiObject.saleInfo),
    this.currencyCode = 'EUR',
    this.thumbnail    = apiObject.volumeInfo.imageLinks.thumbnail;
  }

  validatePrice(saleInfo) {
    switch (saleInfo.saleability) {
      case 'FREE':
        return 0;
      case 'NOT_FOR_SALE':
        return 10;
      default:
        return saleInfo.retailPrice.amount;
    }
  }
}
