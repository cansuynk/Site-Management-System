using SiteManagementSystem.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace SiteManagementSystem.Services
{
    //CRUD methods & mongodb functions
    public class CreditCardService
    {
        private readonly IMongoCollection<CreditCard> _creditCardsCollection;

        public CreditCardService(
            IOptions<CreditCardDatabaseSettings> creditCardDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                creditCardDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                creditCardDatabaseSettings.Value.DatabaseName);

            _creditCardsCollection = mongoDatabase.GetCollection<CreditCard>(
                creditCardDatabaseSettings.Value.CreditCardsCollectionName);
        }

        public async Task<List<CreditCard>> GetAsync() =>
            await _creditCardsCollection.Find(_ => true).ToListAsync();

        public async Task<CreditCard?> GetAsync(string id) =>
            await _creditCardsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(CreditCard newBook) =>
            await _creditCardsCollection.InsertOneAsync(newBook);

        public async Task UpdateAsync(string id, CreditCard updatedBook) =>
            await _creditCardsCollection.ReplaceOneAsync(x => x.Id == id, updatedBook);

        public async Task RemoveAsync(string id) =>
            await _creditCardsCollection.DeleteOneAsync(x => x.Id == id);
    }
}
