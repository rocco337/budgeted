using System;
using Budgeted.Api;
using DataAccess;
using MediatR;
using System.Linq;

namespace Handlers{

    public class MonthlyStatusRequest:IRequest<MonthlyStatusResponse> {
        
    }
    public class MonthlyStatusResponse {
        public double In { get; set; }
        public double Out { get; set; }
        
    }

    public class MonthlyStatusHandler : IRequestHandler<MonthlyStatusRequest, MonthlyStatusResponse>
    {
         ITransactionRepository _transactionRepository;
        Identity _identity;

        public MonthlyStatusHandler(ITransactionRepository transactionRepository,Identity identity)
        {
            _transactionRepository = transactionRepository;
            _identity=identity;
        }
        public MonthlyStatusResponse Handle(MonthlyStatusRequest message)
        {
           var today = DateTime.Today;
            var monthStart = new DateTime(today.Year,today.Month,1); 
            var monthEnd= monthStart.AddMonths(1);
            
            var transactions = _transactionRepository.SearchInMonth(_identity.Id,monthStart,monthEnd);
            var inTransactions = transactions.Where(m=> m.Amount>0).Sum(m=>m.Amount);
            var outTransactions = transactions.Where(m=> m.Amount<0).Sum(m=>m.Amount);
            
            return new MonthlyStatusResponse(){
                In = inTransactions,
                Out = outTransactions 
            };
        }
    }
}