using System;
using DataAccess;
using MediatR;

namespace Handlers
{
    public class AddTransactionHandler : IRequestHandler<AddTransactionRequest, AddTransactionResponse>
    {
       ITransactionRepository _transactionRepository;

        public AddTransactionHandler(ITransactionRepository transactionRepository)
        {
            _transactionRepository =transactionRepository;
        }

        public AddTransactionResponse Handle(AddTransactionRequest message)
        {
            var userId=Guid.Parse("c00730f4-5c99-48ed-8c4a-d7e9f2cfd9b3");

            _transactionRepository.AddTransaction(userId,new TransactionEntity(){
                Amount = message.Amount,
                Description = message.Description,
                TransactionDate = message.TransactionDate,
                Tags = message.Tags
            });

            return new AddTransactionResponse();
        }
    }
 
    public class AddTransactionResponse{}
    public class AddTransactionRequest : IRequest<AddTransactionResponse>
    {
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