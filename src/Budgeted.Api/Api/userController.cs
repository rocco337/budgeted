using DataAccess;
using Microsoft.AspNetCore.Mvc;

namespace Api
{

    [Route("api/[controller]")]

    public class UserController : Controller
    {
        IUserRepository _userRepository;
        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpPost("")]
        public ObjectResult Add(UserEntity entity)
        {
            var result = _userRepository.AddUser(entity);
            return Ok(result);
        }

    }
}