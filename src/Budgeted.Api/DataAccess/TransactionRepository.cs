using System;
using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;
using System.Linq;


namespace DataAccess
{
    public interface ITransactionRepository
    {
        void AddTransaction(System.Guid userId, TransactionEntity transaction);

        IReadOnlyList<TransactionEntity> Search(System.Guid userId, string phrase);
    }
    internal class TransactionRepository : ITransactionRepository
    {
        IMongoDatabase _mongo;
        public TransactionRepository(IMongoDatabase mongo)
        {
            _mongo = mongo;
        }

        public void AddTransaction(System.Guid userId, TransactionEntity transaction)
        {
            var collection = _mongo.GetCollection<TransactionEntity>("TransactionEntity");

            collection.InsertOne(transaction);
        }

        public IReadOnlyList<TransactionEntity> Search(System.Guid userId, string phrase)
        {
            var result = _mongo.GetCollection<TransactionEntity>("TransactionEntity").AsQueryable().Where(m => m.UserId == userId);

            if(!string.IsNullOrEmpty(phrase)){
                result = result.Where(m =>m.Description.Contains(phrase));
                result = result.Where(m=> m.Tags == null || m.Tags.Any(n=>n.Contains(phrase)));

            }
            

            return result.ToList();
        }
    }

    public class TransactionEntity
    {
        [BsonId]
        public System.Guid Id { get; set; }

        public System.Guid UserId { get; set; }
        public decimal Amount { get; set; }

        public string Description { get; set; }

        public string TransactionDate { get; set; }

        public IReadOnlyList<string> Tags { get; set; }
    }
}