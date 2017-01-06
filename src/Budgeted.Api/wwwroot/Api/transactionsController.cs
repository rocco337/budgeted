using Microsoft.AspNetCore.Mvc;

namespace Api{

    [Route("api/[controller]")]
    public class TransactionsController:Controller{

            [Route("{searchPhrase}")]
            [HttpGet()]
            public IActionResult Get(string searchPhrase){
                return Ok(new []{
                    new TransactionDto(){ Id=1, Description="Test", DateTimeFormated = "1.1.2017 12:00", Tags=new []{"hous","car","insurance"} },
                });
            }
    }

    public class TransactionDto{
        public int Id { get; set; }
        public string Description { get; set; }
        public string DateTimeFormated { get; set; }
        public string[] Tags { get; set; }
    }
}