import { DashboardService } from './dashboard.service';
import { Component } from '@angular/core';
import { DashboardModel,IDashboardService} from './entities'

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.template.html'
})
export class DashboardComponent {
  dashboardModel:DashboardModel;

  constructor(dashboardService:DashboardService){
    this.dashboardModel = new DashboardModel();

    this.dashboardModel.MonthlyStatus = dashboardService.getMonthlyStatus();    
    this.dashboardModel.TopConsumers=dashboardService.getTopConsumers();    
  }

  
 }

 