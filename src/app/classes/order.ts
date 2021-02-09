export class Order {
    constructor(
        public userId:string,
        public stayId:string,
        public from:string,
        public dateCheckIn:string,
        public fullName:string,
        public hotelName:string,
        public district:string,
        public address:string,
        public totalprice:number,
        public image:string,
        public distanceFromAirport:string,
        public noOfDays:number,
        public optMedical:boolean,
        public optTransport:boolean,
        public adultNo:number,
        public childNo:number  
    ){}
}
