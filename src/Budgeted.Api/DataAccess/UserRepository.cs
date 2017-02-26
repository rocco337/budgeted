using System;
using MongoDB.Driver;

namespace DataAccess
{
    public interface IUserRepository
    {
        Guid AddUser(UserEntity user);
    }
    
    internal class UserRepository : IUserRepository
    {
        IMongoDatabase _mongo;

        public UserRepository(IMongoDatabase mongo)
        {
            _mongo = mongo;
        }

        public Guid AddUser(UserEntity user)
        {
            var guid = Guid.NewGuid();

            var collection = _mongo.GetCollection<UserEntity>("Users");
            collection.InsertOne(user);

            return guid;
        }
    }

    public class UserEntity
    {
        public System.Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}