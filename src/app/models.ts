export interface Device {
    id?:number;
    name:string;
    brand: string;
    model: string;
    year:number;
    serial:any;
}
export interface Users{
    id: number;
    name: string;
    userName: string;
    email: string;
    address:{
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo:{
            lat: string;
            lng: string;
    }
    }; 
    phone: string;
    website: string;
    company:{
        name: string;
        catchPhrase: string;
        bs: string;
    } ;
}