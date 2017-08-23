﻿using RealEstateAgency.Models.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RealEstateAgency.DBLayer.Mapping
{
    class NotificationConfig : EntityTypeConfiguration<Notification>
    {
        public NotificationConfig()
        {
            HasEntitySetName("Notifications");
            ToTable("Notifications").HasKey(n => n.NoticeID);
            Property(n => n.Address).IsRequired().HasColumnName("Address");
            Property(n => n.Description).HasColumnType("nvarchar").HasMaxLength(200).HasColumnName("Description");
            Property(n => n.Metric).IsRequired().HasColumnType("float").HasColumnName("Metric");
            Property(n => n.Price).IsRequired().HasColumnType("money").HasColumnName("Price");
            Property(n => n.ProprietorID).IsRequired().HasColumnType("int").HasColumnName("ProprietorID");
            Property(n => n.Title).IsRequired().HasColumnType("nvarchar").HasMaxLength(50).HasColumnName("Title");
            Property(n => n.ForRent).IsRequired().HasColumnType("bit").HasColumnName("ForRent");

            HasRequired(n => n.Proprietor).WithMany(p => p.Notifications).HasForeignKey(n => n.ProprietorID);
        }
    }
}