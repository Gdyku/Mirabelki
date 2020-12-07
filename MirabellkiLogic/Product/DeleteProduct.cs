using System;
using System.Threading;
using System.Threading.Tasks;
using MirabelkiDomain;
using MediatR;

namespace MirabelkiLogic
{
    public class DeleteProduct
    {
        public class Command : IRequest
        {
            public Guid ID { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var product = await _context.Products.FindAsync(request.ID);

                if(product == null)
                {
                    throw new Exception("Couldn't find product");
                }

                _context.Remove(product);

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem with saving changess");
            }
        }
    }
}