using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using MirabelkiDomain;

namespace MirabelkiLogic
{
    public class CreateUser
    {
        public class Command : IRequest
        {
            public Guid ID { get; set; }
            public string Name { get; set; }
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
                var user = new User
                {
                    ID = request.ID,
                    Name = request.Name
                };

                _context.Users.Add(user);

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem with saving changess");
            }
        }
    }
}