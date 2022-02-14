using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Entities
{
    public class SiteManagementUserContext : DbContext
    {
        protected readonly IConfiguration configuration;

        public SiteManagementUserContext() { }

        //write connection string of db used
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer("Server=PRJ-CYANIK; Database = SiteManagementDB; integrated security = True;");
        }

        public DbSet<Apartment> Apartment { get; set; }

        public DbSet<InvoiceDues> InvoiceDues { get; set; }

        public DbSet<Message> Message { get; set; }

        public DbSet<Resident> Resident { get; set; }

        public DbSet<Log> Log { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //transform models to the tables
            modelBuilder.Entity<Apartment>().ToTable("Apartment");
            modelBuilder.Entity<InvoiceDues>().ToTable("InvoiceDues");
            modelBuilder.Entity<Message>().ToTable("Message");
            modelBuilder.Entity<Resident>().ToTable("Resident");
            modelBuilder.Entity<Log>().ToTable("Log");
        }
    }
}
