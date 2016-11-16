import { Injectable } from '@angular/core'
import { KeyValuePair,MonthlyStatus,IDashboardService} from './entities'


@Injectable()
export class DashboardService implements IDashboardService {

    getMonthlyStatus(): MonthlyStatus {
        var status = new MonthlyStatus();

        status.Spent = "- 1203 €";
        status.Left = "801 €";
        status.Savings = "210 €";
        return status;
    }

    getTopConsumers():KeyValuePair[]{
        var pairs=[];
        
        pairs.push(new KeyValuePair("Apartment","400 €"));
        pairs.push(new KeyValuePair("Car","150 €"));
        pairs.push(new KeyValuePair("Food","220 €"));
        pairs.push(new KeyValuePair("Social life","300 €"));
        
        return pairs;
    }

}
