using System;
using System.Collections.Generic;
using Budgeted.Api;
using DataAccess;
using MediatR;

namespace Handlers
{
    public class GetTransactionsHandler : IRequestHandler<GetTransactionsrequest, GetTransactionsResponse>
    {
        ITransactionRepository _transactionRepository;
        Identity _identity;

        public GetTransactionsHandler(ITransactionRepository transactionRepository,Identity identity)
        {
            _transactionRepository = transactionRepository;
            _identity=identity;
        }
        
        public GetTransactionsResponse Handle(GetTransactionsrequest message)
        {
            return new GetTransactionsResponse(){
                Transactions = _transactionRepository.Search(_identity.Id,message.SearchPhrase)
            };
        }
    }

    public class GetTransactionsResponse
    {
        public IReadOnlyList<TransactionEntity> Transactions { get; set; }
    };
    public class GetTransactionsrequest : IRequest<GetTransactionsResponse>
    {
        public string SearchPhrase { get; set; }
    }
}