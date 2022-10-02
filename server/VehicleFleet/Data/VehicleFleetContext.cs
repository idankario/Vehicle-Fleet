using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace VehicleFleet.Data
{
    public partial class VehicleFleetContext : DbContext
    {
        public VehicleFleetContext()
        {
        }

        public VehicleFleetContext(DbContextOptions<VehicleFleetContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Vehicle> Vehicles { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.\\SQLExpress;Database=Vehicle-Fleet;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Vehicle>(entity =>
            {
                entity.ToTable("Vehicle");

                entity.HasIndex(e => e.LicensePlate, "UQ__Vehicle__5BC9DE416BB290C9")
                    .IsUnique();

                entity.Property(e => e.Color)
                    .HasMaxLength(20)
                    .HasColumnName("color");

                entity.Property(e => e.LicensePlate)
                    .HasMaxLength(20)
                    .HasColumnName("licensePlate");

                entity.Property(e => e.Manufacturers)
                    .HasMaxLength(20)
                    .HasColumnName("manufacturers");

                entity.Property(e => e.Model)
                    .HasMaxLength(20)
                    .HasColumnName("model");

                entity.Property(e => e.Year)
                    .HasColumnType("datetime")
                    .HasColumnName("year");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
