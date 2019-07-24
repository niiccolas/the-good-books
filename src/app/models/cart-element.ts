export class CartElement {
  details: object;
  title: string;
  author: string;
  price: number;
  currencyCode: string;
  thumbnail: string;
  id: string;
  units: number;

  constructor(apiObject: any) {

    this.details = {
      title: apiObject.volumeInfo.title,
      author: apiObject.volumeInfo.authors,
      price: this.validatePrice(apiObject.saleInfo),
      currencyCode: '€',
      thumbnail: apiObject.volumeInfo.imageLinks.thumbnail,
      id: apiObject.id
    };

    this.units = 1;
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