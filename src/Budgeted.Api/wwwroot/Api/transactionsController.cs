using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Api
{

    [Route("api/[controller]")]
    public class TransactionsController : Controller
    {

        [Route("{searchPhrase}")]
        [HttpGet()]
        public IActionResult Get(string searchPhrase)
        {
            return Ok(new[]{
                    new TransactionDto(){ Id=1, Description="Test", DateTimeFormated = "1.1.2017 12:00", Tags=new []{"hous","car","insurance"} },
                });
        }

        [Route("")]
        [HttpPost()]
        public IActionResult Add([FromBody] TransactionAddRequest request)
        {
            return Ok(request);
        }

        [Route("import")]
        [HttpPost]
        public IActionResult ImportTransactions()
        {
            return Ok(Request.Form.Files[0].FileName);
        }
    }

    public class TransactionDto
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string DateTimeFormated { get; set; }
        public string[] Tags { get; set; }
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