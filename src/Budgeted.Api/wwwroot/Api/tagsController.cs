using Microsoft.AspNetCore.Mvc;

namespace Api{
    
    [Route("api/[controller]")]
    public class TagsController : Controller{

        [Route("")]
        [HttpGet()]

        public IActionResult GetAllTags(){
            return Ok(new []{"house","loan","food","social life", "car","traveling"});
        }

        [Route("")]
        [HttpPost()]
        public IActionResult AddTag(string tag){
            return Ok(tag);
        }
    }
}