using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
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

        [HttpPost("parse")]
        public IActionResult ParseTransactions(char separator)
        {
            string inputContent;
            using (StreamReader inputStreamReader = new StreamReader(Request.Form.Files[0].OpenReadStream()))
            {
                inputContent = inputStreamReader.ReadToEnd();
            }

            var result = _mediator.Send(new PrepareDataForImportRequest()
            {
                Separator = separator,
                FileContent = inputContent
            });

            return Ok(result);
        }

        [HttpPost("import")]
        public IActionResult ImportTransactions([FromBody]ImportTransactionsRequest request){

            var result = _mediator.Send(new Handlers.ImportTransactionsRequest(){
                Transactions = request.Transactions,
                OrderedHeaders = request.OrderedHeaders
            });

            return Ok(result);
        }
    }

    public class ImportTransactionsRequest {
        public IReadOnlyList<string[]> Transactions{get;set;}
        public IReadOnlyList<string> OrderedHeaders{get;set;}
    }

    public class TransactionAddRequest
    {
        [Required]
        public double Amount { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string TransactionDate { get; set; }

        public string[] Tags { get; set; }
    }
}