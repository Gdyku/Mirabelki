﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using MirabelkiDomain;
using MirabelkiLogic;

namespace FirstApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ProductsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("getproducts")]
        public async Task<ActionResult<List<Product>>> GetProductsList()
        {
            return await _mediator.Send(new GetProducts.Query()); 
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(Guid id)
        {
            return await _mediator.Send(new GetProduct.Query { ID = id });
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(CreateProduct.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(Guid id, EditProduct.Command command)
        {
            command.ID = id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(Guid id)
        {
            return await _mediator.Send(new DeleteProduct.Command{ID = id});
        }
    }
}
