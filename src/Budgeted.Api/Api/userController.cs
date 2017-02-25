using DataAccess;
using Microsoft.AspNetCore.Mvc;

namespace Api
{

    [Route("api/[controller]")]

    public class UserController : Controller
    {
        ITransactionRepository _transactionRepository;
        public UserController(ITransactionRepository transactionRepository)
        {
            _transactionRepository = transactionRepository;
        }

        [HttpPost("")]
        public ObjectResult Add(UserEntity entity)
        {
            var result = _transactionRepository.AddUser(entity);
            return Ok(result);
        }

    }
}