using MediatR;
using MirabelkiDomain;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Threading;
using Microsoft.EntityFrameworkCore;

namespace MirabelkiLogic
{
    public class GetProducts
    {
        public class Query : IRequest<List<Product>>
        {

        }

        public class Handler : IRequestHandler<Query, List<Product>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context; 
            }
            public async Task<List<Product>> Handle(Query request, CancellationToken cancellationToken)
            {
                var products = await _context.Products.ToListAsync();

                return products;
            }
        }
    }
}