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
        Guid AddUser(UserEntity user);
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
            var collection = _mongo.GetCollection<UserTransactionsEntity>("UserTransactionsEntity");

            var filter = Builders<UserTransactionsEntity>.Filter.Eq(p => p.Id, userId);

            var entity = collection.Find(filter).FirstOrDefault();

            entity.Transactions.Add(transaction);

            collection.ReplaceOne(filter, entity);
        }


        public Guid AddUser(UserEntity user)
        {
            var guid = Guid.NewGuid();

            var collection = _mongo.GetCollection<UserTransactionsEntity>("UserTransactionsEntity");
            collection.InsertOne(new UserTransactionsEntity()
            {
                Id = guid,
                User = user
            });

            return guid;
        }

        public IReadOnlyList<TransactionEntity> Search(System.Guid userId, string phrase)
        {
            var collection = _mongo.GetCollection<UserTransactionsEntity>("UserTransactionsEntity");

            var filter = Builders<UserTransactionsEntity>.Filter.Eq(p => p.Id, userId);

            var result = new List<TransactionEntity>();
            foreach (var entity in collection.Find(filter).FirstOrDefault().Transactions)
            {
                if(string.IsNullOrEmpty(phrase) || (entity.Description.Contains(phrase) || (entity.Tags != null && entity.Tags.Any(m=>m.Equals(phrase)))))
                    result.Add(entity);
            }

            return result;
        }
    }

    public class UserTransactionsEntity
    {
        [BsonId]
        public System.Guid Id { get; set; }
        public UserEntity User { get; set; }
        public IList<TransactionEntity> Transactions { get; set; }

        public UserTransactionsEntity()
        {
            Transactions = new List<TransactionEntity>();
        }
    }

    public class UserEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
    public class TransactionEntity
    {
        public decimal Amount { get; set; }

        public string Description { get; set; }

        public string TransactionDate { get; set; }

        public IReadOnlyList<string> Tags { get; set; }
    }
}