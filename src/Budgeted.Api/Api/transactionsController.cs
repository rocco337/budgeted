using System.ComponentModel.DataAnnotations;
using Handlers;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Api
{

    [Route("api/[controller]")]
    public class TransactionsController : Controller
    {
        IMediator _mediator;

        public TransactionsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("{searchPhrase?}")]
        public IActionResult Get(string searchPhrase)
        {
            var result = _mediator.Send(new GetTransactionsrequest()
            {
                SearchPhrase = searchPhrase
            });

            return Ok(result);
        }

        [Route("")]
        [HttpPost()]
        public IActionResult Add([FromBody] TransactionAddRequest request)
        {
            if (!ModelState.IsValid)
            {
                return this.BadRequest();
            }

            var handlerRequest = new AddTransactionRequest(request.Amount, request.Description, request.TransactionDate, request.Tags);
            var result = _mediator.Send(handlerRequest);
            return Ok(result);
        }

        [Route("import")]
        [HttpPost]
        public IActionResult ImportTransactions()
        {
            return Ok(Request.Form.Files[0].FileName);
        }
    }


    public class TransactionAddRequest
    {
        [Required]
        public decimal Amount { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string TransactionDate { get; set; }

        public string[] Tags { get; set; }
    }
}