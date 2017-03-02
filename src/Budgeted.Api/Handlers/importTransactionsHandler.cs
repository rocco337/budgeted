using System;
using System.Collections.Generic;
using Budgeted.Api;
using DataAccess;
using MediatR;

namespace Handlers{
    public class ImportTransactionsHandler : IRequestHandler<ImportTransactionsRequest, ImportTransactionsResponse>
    {
        ITransactionRepository _transactionRepository;
                Identity _identity;

        public ImportTransactionsHandler(ITransactionRepository transactionRepository,Identity identity)
        {
            _transactionRepository=transactionRepository;
            _identity=identity;
        }

        public ImportTransactionsResponse Handle(ImportTransactionsRequest message)
        {
            var parsedTransactions = new List<TransactionEntity>();

            foreach(var transaction in message.Transactions){
                var entity = new TransactionEntity();
                entity.UserId=_identity.Id;
                    
                var headers = message.OrderedHeaders;
                for(var ii=0; ii< headers.Count;ii++){
                    if(headers[ii].Equals("Amount")){
                        entity.Amount = double.Parse(transaction[ii]);
                    }
                    else if (headers[ii].Equals("Description")){
                        entity.Description = transaction[ii];
                    }
                    else if(headers[ii].Equals("CreatedDate")){
                        entity.TransactionDate = transaction[ii];                        
                    }else{
                        throw new NotImplementedException(headers[ii]);
                    }
                }

                parsedTransactions.Add(entity);
            }

            foreach(var transaction in parsedTransactions){
                _transactionRepository.AddTransaction(transaction);
            }

            return new ImportTransactionsResponse();
        }
    }

    public class ImportTransactionsResponse{}
    public class ImportTransactionsRequest: IRequest<ImportTransactionsResponse>
    {
        public IReadOnlyList<string[]> Transactions{get;set;}
        public IReadOnlyList<string> OrderedHeaders{get;set;}
    }
}