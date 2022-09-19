using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vehicle.Models
{
    public class VehicleC
    {
        
        public int VehicleId { get; set; }
        public string model { get; set; }
        public string color { get; set; }

        public string year { get; set; }

        public string manufacturers { get; set; }
        public string licensePlate { get; set; }
    }
}
