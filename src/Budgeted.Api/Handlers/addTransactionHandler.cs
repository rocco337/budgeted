using System;
using MediatR;
using MongoDB.Driver;

namespace Handlers
{
    public class AddTransactionHandler : IRequestHandler<AddTransactionRequest, string>
    {
        IMongoDatabase _mongoDatabase;
        public AddTransactionHandler(IMongoDatabase mongoDatabase)
        {
            _mongoDatabase = mongoDatabase;
        }

        public string Handle(AddTransactionRequest message)
        {
            var rnd = new Random().Next(1000);

            _mongoDatabase.GetCollection<TransactionEntity>("transactions").InsertOne(new TransactionEntity() { Id = 28 * rnd });

            var res = Builders<TransactionEntity>.Filter.Eq(p => p.Id, 28 * rnd);
            var result = _mongoDatabase.GetCollection<TransactionEntity>("transactions").Find(res);
            return result.FirstOrDefault().Id.ToString();
        }
    }
    public class TransactionEntity
    {
        public int Id { get; set; }
    }
    public class AddTransactionRequest : IRequest<string>
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