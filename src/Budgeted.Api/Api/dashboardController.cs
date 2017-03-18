using Microsoft.AspNetCore.Mvc;
using MediatR;
using Handlers;

namespace Api
{
    [Route("api/[controller]")]
    public class DashboardController : Controller
    {
        IMediator _mediatr;
        public DashboardController(IMediator mediatr)
        {
            _mediatr = mediatr;
        }

        [Route("monthly-status")]
        [HttpGet]
        public IActionResult MonthlyStatus()
        {
            var result = _mediatr.Send(new MonthlyStatusRequest());
            return Ok(result);
        }
    }
}