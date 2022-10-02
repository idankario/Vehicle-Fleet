using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VehicleFleet.Data;

namespace VehicleFleet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehiclesController : ControllerBase
    {
        private readonly VehicleFleetContext _context;

        public VehiclesController(VehicleFleetContext context)
        {
            _context = context;
        }

        // GET: api/Vehicles
        [HttpGet]
        public JsonResult GetVehicles() => new(_context.Vehicles);

        // GET: api/Vehicles/5
        [HttpGet("{licensePlate}")]
        public async Task<ActionResult<Vehicle>> GetVehicle(int licensePlate)
        {
            var vehicle = await _context.Vehicles.FindAsync(licensePlate);

            if (vehicle == null)
            {
                return NotFound();
            }

            return vehicle;
        }

        // PUT: api/Vehicles/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{licensePlate}")]
        public  JsonResult PutVehicle(string licensePlate, Vehicle vehicle)
        {
            var result = _context.Vehicles.Where(x => x.LicensePlate == licensePlate).First(); 
            if (result != null)
            {
                try
                {
                    vehicle.VehicleId = result.VehicleId; //This is important when we first create an object (NewObj), in which the default Id = 0. We can not change an existing key.
                    _context.Entry(result).CurrentValues.SetValues(vehicle);
                    _context.SaveChanges();
                }
                catch (Exception)
                {

                    return new JsonResult("Error");
                }
               
            }
            else
                return new JsonResult("Error");

            return new JsonResult("Success");
        }

        // POST: api/Vehicles
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
         
        public  JsonResult PostVehicle(Vehicle vehicle)
        {
            _context.Vehicles.Add(vehicle);
            try
            {
                _context.SaveChanges();
            }
            catch 
            {

                return new JsonResult("Error");
            }
             

            return new(_context.Vehicles);
        }

        // DELETE: api/Vehicles/5
        [HttpDelete("{licensePlate}")]
        public async Task<IActionResult> DeleteVehicle(string licensePlate)
        {
            var vehicle =  _context.Vehicles.SingleOrDefault(x => x.LicensePlate == licensePlate);
            if (vehicle == null)
            {
                return NotFound();
            }

            _context.Vehicles.Remove(vehicle);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VehicleExists(string licensePlate)
        {
            return _context.Vehicles.Any(e => e.LicensePlate == licensePlate);
        }
    }
}
