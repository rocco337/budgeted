using System;
using MediatR;

namespace Handlers{
    public class AddTransactionHandler : IRequestHandler<AddTransactionRequest, string>
    {
        public string Handle(AddTransactionRequest message)
        {
           return "Added";
        }
    }

    public class AddTransactionRequest : IRequest<string> {
        public decimal Amount { get; set; }

        public string Description { get; set; }

        public string TransactionDate { get; set; }

        public string[] Tags { get; set; }
        public AddTransactionRequest(decimal amount, string description, string transactionDate, string[] tags)
        {
            Amount = amount;
            Description = description;
            TransactionDate = transactionDate;
            Tags = tags;
        }
    }
}