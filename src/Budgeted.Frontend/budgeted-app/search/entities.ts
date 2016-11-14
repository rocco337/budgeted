export class TransactionModel{
    Id:number;
    Amount:number;
    Description:string;
    DateCreated:string;
    Tags:string[];

    constructor(id:number,amount:number,description:string,dateCreated:string,tags:string[]){
        this.Amount = amount;
        this.Id = id;
        this.Description = description;
        this.DateCreated = dateCreated;
        this.Tags = tags;
    }
}

