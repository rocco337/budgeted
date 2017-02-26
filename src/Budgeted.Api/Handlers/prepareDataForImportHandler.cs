using System;
using System.Collections.Generic;
using MediatR;

namespace Handlers
{
    public class PrepareDataForImportHandler : IRequestHandler<PrepareDataForImportRequest, PrepareDataForImportResponse>
    {
        public PrepareDataForImportResponse Handle(PrepareDataForImportRequest message)
        {
            var parsedTransactions = new List<string[]>();

            var lines = message.FileContent.Split(new string[] { Environment.NewLine }, StringSplitOptions.None);
            foreach (var line in lines)
            {
                var columns = line.Split(message.Separator);

                parsedTransactions.Add(columns);
            }


            return new PrepareDataForImportResponse()
            {
                ParsedTransactions = parsedTransactions
            };
        }
    }

    public class PrepareDataForImportResponse
    {
        public IReadOnlyList<string[]> ParsedTransactions { get; set; }
    }

    public class PrepareDataForImportRequest : IRequest<PrepareDataForImportResponse>
    {
        public char Separator { get; set; }
        public string FileContent { get; set; }
    }
}