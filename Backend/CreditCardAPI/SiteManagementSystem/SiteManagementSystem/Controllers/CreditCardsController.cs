using Microsoft.AspNetCore.Mvc;
using SiteManagementSystem.Models;
using SiteManagementSystem.Services;

namespace SiteManagementSystem.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CreditCardsController : ControllerBase
    {
        private readonly CreditCardService _creditCardsService;

        public CreditCardsController(CreditCardService creditCardService) =>
            _creditCardsService = creditCardService;

        [HttpGet]
        public async Task<List<CreditCard>> Get() =>
            await _creditCardsService.GetAsync();


        [HttpPost]
        public async Task<IActionResult> Post(CreditCard newCard)
        {
            await _creditCardsService.CreateAsync(newCard);

            return CreatedAtAction(nameof(Get), new { id = newCard.Id }, newCard);
        }

        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Update(string id, CreditCard updatedCard)
        {
            var creditCard = await _creditCardsService.GetAsync(id);

            if (creditCard is null)
            {
                return NotFound();
            }

            updatedCard.Id = creditCard.Id;

            await _creditCardsService.UpdateAsync(id, updatedCard);

            return NoContent();
        }
    }

 }