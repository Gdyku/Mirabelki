using System;
using System.Threading;
using System.Threading.Tasks;
using MirabelkiDomain;
using MediatR;

namespace MirabelkiLogic
{
    public class GetProduct
    {
        public class Query : IRequest<Product>
        {
            public Guid ID { get; set; }
        }

        public class Handler : IRequestHandler<Query, Product>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Product> Handle(Query request, CancellationToken cancellationToken)
            {
                var product = await _context.Products.FindAsync(request.ID);

                return product;
            }
        }
    }
}
