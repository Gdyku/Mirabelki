using System;
using System.Threading;
using System.Threading.Tasks;
using MirabelkiDomain;
using MediatR;

namespace MirabelkiLogic
{
    public class CreateProduct
    
    {
        public class Command : IRequest
        {
                public Guid ID { get; set; }
                public string Name { get; set; }
                public string Description { get; set; }
                public string Category { get; set; }
                public DateTime DateAdded { get; set; }      
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
                var product = new Product
                {
                    ID = request.ID,
                    Name = request.Name,
                    Description = request.Description,
                    Category = request.Category,
                    DateAdded = request.DateAdded
                };

                _context.Products.Add(product);
                
                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem with saving changess");
            }
        }
    }
}
