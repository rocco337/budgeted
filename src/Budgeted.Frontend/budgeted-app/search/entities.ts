import { BehaviorSubject } from 'rxjs/Rx';
export class TransactionModel{
    Id:number;
    Amount:number;
    Description:string;
    DateCreated:string;
    Tags:Array<string>;

    constructor(id:number,amount:number,description:string,dateCreated:string,tags:Array<string>){
        this.Amount = amount;
        this.Id = id;
        this.Description = description;
        this.DateCreated = dateCreated;
        this.Tags = tags;
    }

   
}

