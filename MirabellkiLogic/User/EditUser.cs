using System;
using System.Threading;
using System.Threading.Tasks;
using MirabelkiDomain;
using MediatR;

namespace MirabelkiLogic
{
    public class EditUser
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
                        var user = await _context.Users.FindAsync(request.ID);

                        if(user == null)
                        {
                            throw new Exception("Couldn't find user");
                        }
                        
                        user.Name = request.Name ?? user.Name;

                        var success = await _context.SaveChangesAsync() > 0;
        
                        if (success) return Unit.Value;
        
                        throw new Exception("Problem with saving changess");
                    }
                }
    }
}