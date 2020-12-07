using MediatR;
using MirabelkiDomain;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Threading;
using Microsoft.EntityFrameworkCore;

namespace MirabelkiLogic
{
    public class GetUsers
    {
        public class Query : IRequest<List<User>>
        {

        }

        public class Handler : IRequestHandler<Query, List<User>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<User>> Handle(Query request, CancellationToken cancellationToken)
            {
                var users = await _context.Users.ToListAsync();

                return users;
            }
        }
    }
}