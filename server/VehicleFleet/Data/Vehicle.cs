using System;
using System.Collections.Generic;

namespace VehicleFleet.Data
{
    public partial class Vehicle
    {
        public int VehicleId { get; set; }
        public string Model { get; set; } = null!;
        public string LicensePlate { get; set; } = null!;
        public string Color { get; set; } = null!;
        public DateTime Year { get; set; }
        public string Manufacturers { get; set; } = null!;
    }
}
