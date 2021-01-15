class ActorModel {
    constructor(FirstName, LastName, Image, Link) {
      this.FirstName = FirstName;
      this.LastName = LastName;
      this.Image = Image;
      this.Link = Link;
      this.Birthday = this.getBirthday.bind(this);
    }
    getBirthday() {
      const currentYear = new Date().getFullYear(); // 2020
      //console.log(currentYear);
      const yearsOnRoad = currentYear - this.year; 
      return parseInt(this.km / (yearsOnRoad || 1)); // avoid divide by zero
    }
  }
  export default ActorModel;