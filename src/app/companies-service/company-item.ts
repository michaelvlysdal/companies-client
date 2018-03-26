export class CompanyItem {
    constructor(id: String, name: String, cvr: String, address: String, city: String, country: String, phone: String) {
      this.id = id;
      this.name = name;
      this.cvr = cvr;
      this.address = address;
      this.city = city;
      this.country = country;
      this.phone = phone;
    }
    id: String;
    name: String;
    cvr: String;
    address: String;
    city: String
    country: String;
    phone: String;
  }