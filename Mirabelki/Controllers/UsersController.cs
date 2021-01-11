using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MediatR;
using MirabelkiDomain;
using MirabelkiLogic;

namespace FirstApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IMediator _mediator;

        public UsersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("getusers")]
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            return await _mediator.Send(new GetUsers.Query()); 
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(Guid id)
        {
            return await _mediator.Send(new GetUser.Query { ID = id });
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(CreateUser.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, EditUser.Command command)
        {
            command.ID = id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await _mediator.Send(new DeleteUser.Command{ID = id});
        }
    }
}
