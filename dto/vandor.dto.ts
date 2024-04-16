export interface CreateVandorInput{
    name:string,
    ownerName:string,
    foodType:[string],
    pincode:string,
    address:string,
    phone:string,
    email:string,
    password:string
}
export interface editVandorInputs{
    
    pincode:string,
     address:string,
     phone:string,
     foodType:[string]
    
}

export interface vandorLoginInputs{
    email:string,
    password:string
}

export interface vandorPayload{

    _id:string,
    email:string,
    name:string,
    foodType:[string]
}
