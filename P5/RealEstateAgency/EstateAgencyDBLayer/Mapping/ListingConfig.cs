﻿using RealEstateAgency.Models.Models;
using System.Data.Entity.ModelConfiguration;

namespace RealEstateAgency.DBLayer.Mapping
{
    class ListingConfig : EntityTypeConfiguration<Listing>
    {
        public ListingConfig()
        {
            HasEntitySetName("Listings");
            ToTable("Listings").HasKey(n => n.ListingID);
            Property(n => n.Address).IsRequired().HasColumnName("Address");
            Property(n => n.Description).HasColumnType("nvarchar").HasMaxLength(200).HasColumnName("Description");
            Property(n => n.Metric).IsRequired().HasColumnType("float").HasColumnName("Metric");
            Property(n => n.Price).IsRequired().HasColumnType("money").HasColumnName("Price");
            Property(n => n.ProprietorID).IsRequired().HasColumnType("int").HasColumnName("ProprietorID");
            Property(n => n.Title).IsRequired().HasColumnType("nvarchar").HasMaxLength(50).HasColumnName("Title");
            Property(n => n.ForRent).IsRequired().HasColumnType("bit").HasColumnName("ForRent");
        }
    }
}