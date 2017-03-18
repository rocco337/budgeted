using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Driver;
using System.Linq;
using System;
using MongoDB.Bson;

namespace DataAccess
{
    public interface ITransactionRepository
    {
        void AddTransaction(TransactionEntity transaction);
        void AddTransactions(IList<TransactionEntity> transactions);

        IReadOnlyList<TransactionEntity> Search(System.Guid userId, string phrase);
        IReadOnlyList<TransactionEntity> SearchInMonth(System.Guid userId,  DateTime dateStart,DateTime dateEnd);
    }
    internal class TransactionRepository : ITransactionRepository
    {
        IMongoDatabase _mongo;
        public TransactionRepository(IMongoDatabase mongo)
        {
            _mongo = mongo;
            
        }

        public void AddTransaction(TransactionEntity transaction)
        {
            var collection = GetTransactionCollection();

            collection.InsertOne(transaction);            
        }

          public void AddTransactions(IList<TransactionEntity> transactions)
        {
            var collection = GetTransactionCollection();

            collection.InsertMany(transactions);            
        }

        public IReadOnlyList<TransactionEntity> Search(System.Guid userId, string phrase)
        {
            var result = GetTransactionCollection().AsQueryable().Where(m => m.UserId == userId);

            if(!string.IsNullOrEmpty(phrase)){
                result = result.Where(m =>m.Description.Contains(phrase));
                result = result.Where(m=> m.Tags == null || m.Tags.Any(n=>n.Contains(phrase)));
            }
            

            return result.ToList();
        }

        public IReadOnlyList<TransactionEntity> SearchInMonth(System.Guid userId, DateTime dateStart,DateTime dateEnd){
            var collection =GetTransactionCollection();

            
            return collection.Find(x=>x.UserId == userId && x.TransactionDate>dateStart && x.TransactionDate<dateEnd).ToList();         
        }

        private IMongoCollection<TransactionEntity> GetTransactionCollection(){
            return  _mongo.GetCollection<TransactionEntity>("TransactionEntity");
        }
    }

    public class TransactionEntity
    {
        [BsonId]
        public System.Guid Id { get; set; }
        public System.Guid UserId { get; set; }
        public double Amount { get; set; }

        public string Description { get; set; }

        [BsonDateTimeOptions]
        public DateTime TransactionDate { get; set; }

        public IReadOnlyList<string> Tags { get; set; }
    }
}