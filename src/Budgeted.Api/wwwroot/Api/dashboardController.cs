using Microsoft.AspNetCore.Mvc;

namespace Api
{
    [Route("api/[controller]")]
    public class DashboardController : Controller
    {
        [Route("monthly-status")]
        [HttpGet]
        public IActionResult MonthlyStatus(){
            return Ok(new {
                spent="- 1203 €",
                left="801 €",
                savings="210 €"
            });
        }
    }
}