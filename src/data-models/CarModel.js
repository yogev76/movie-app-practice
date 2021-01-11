class CarModel {
    constructor(brand, model,  km, year) {
      this.brand =brand;
      this.model = model;
      this.km = km;
      this.year = year;
      this.kmPerYear = this.getKmPerYear();
    }
    getKmPerYear() {
      const currentYear = new Date().getFullYear(); // 2020
      //console.log(currentYear);
      const yearsOnRoad = currentYear - this.year; 
      return parseInt(this.km / (yearsOnRoad || 1)); // avoid divide by zero
    }
  }
  export default CarModel;