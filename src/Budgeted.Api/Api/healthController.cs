using Microsoft.AspNetCore.Mvc;

namespace Api
{
    [Route("api/[controller]")]
    public class HealthController : Controller
    {

        [Route("Check")]
        [HttpGet]
        public IActionResult Check(){
            return Ok("Works!");
        }
    }
}