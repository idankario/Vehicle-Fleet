using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VehicleFleet.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Vehicle",
                columns: table => new
                {
                    VehicleId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    model = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    licensePlate = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    color = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    year = table.Column<DateTime>(type: "datetime", nullable: false),
                    manufacturers = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vehicle", x => x.VehicleId);
                });

            migrationBuilder.CreateIndex(
                name: "UQ__Vehicle__5BC9DE416BB290C9",
                table: "Vehicle",
                column: "licensePlate",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Vehicle");
        }
    }
}
