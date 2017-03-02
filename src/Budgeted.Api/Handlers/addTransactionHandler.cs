using System;
using Budgeted.Api;
using DataAccess;
using MediatR;

namespace Handlers
{
    public class AddTransactionHandler : IRequestHandler<AddTransactionRequest, AddTransactionResponse>
    {
       ITransactionRepository _transactionRepository;
       Identity _identity;

        public AddTransactionHandler(ITransactionRepository transactionRepository,Identity identity)
        {
            _transactionRepository =transactionRepository;
            _identity = identity;
        }

        public AddTransactionResponse Handle(AddTransactionRequest message)
        {
            _transactionRepository.AddTransaction(new TransactionEntity(){
                Amount = message.Amount,
                Description = message.Description,
                TransactionDate = message.TransactionDate,
                Tags = message.Tags,
                UserId=_identity.Id
            });

            return new AddTransactionResponse();
        }
    }
 
    public class AddTransactionResponse{}
    public class AddTransactionRequest : IRequest<AddTransactionResponse>
    {
        public double Amount { get; set; }

        public string Description { get; set; }

        public string TransactionDate { get; set; }

        public string[] Tags { get; set; }
        public AddTransactionRequest(double amount, string description, string transactionDate, string[] tags)
        {
            Amount = amount;
            Description = description;
            TransactionDate = transactionDate;
            Tags = tags;
        }
    }
}