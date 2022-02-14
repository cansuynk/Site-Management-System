namespace SiteManagementSystem.Models
{
    public class CreditCardDatabaseSettings
    {
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string CreditCardsCollectionName { get; set; } = null!;
    }
}
