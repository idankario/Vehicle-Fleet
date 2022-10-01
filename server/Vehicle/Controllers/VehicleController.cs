using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Vehicle.Models;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace Vehicle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public VehicleController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                            select * from
                            dbo.Vehicle
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }
        public int CheckIfExist(string licensePlate)
        {
            string query = @"
                            select count(licensePlate) from
                            dbo.Vehicle
                            WHERE licensePlate=@licensePlate
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            int UserExist = 0;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@licensePlate", licensePlate);
                    SqlDataReader reader = myCommand.ExecuteReader();
                    if (reader.HasRows)
                    {
                        UserExist = 1;
                    }
                    table.Load(reader);
                    reader.Close();
                    myCon.Close();
                }
            }

 
            return table.Rows[0].Field<int>(0);
        }
        [HttpPost]
        public JsonResult Post(VehicleC vec)
        {    
            if (CheckIfExist(vec.licensePlate) == 0)
            {
                string query = @"
                            INSERT into dbo.Vehicle
                           (model,color,year,manufacturers,licensePlate)
                           values (@model,@color,@year,@manufacturers,@licensePlate)
                            ";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
                SqlDataReader myReader;

                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@model", vec.model);
                        myCommand.Parameters.AddWithValue("@color", vec.color);
                        myCommand.Parameters.AddWithValue("@year", vec.year);
                        myCommand.Parameters.AddWithValue("@manufacturers", vec.manufacturers);
                        myCommand.Parameters.AddWithValue("@licensePlate", vec.licensePlate);
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                        myCon.Close();
                    }
                }

                return Get();
            }
            return new JsonResult("Error");
          
        }

        [HttpPut("{id}")]
        public JsonResult Put(VehicleC vec, string id)
        {
            string query = @"
                           update dbo.Vehicle
                           set model= @model,
                            color=@color,
                            year=@year,
                            manufacturers=@manufacturers,
                            licensePlate=@licensePlate
                            where licensePlate=@id
                            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@VehicleId", vec.VehicleId);
                    myCommand.Parameters.AddWithValue("@model", vec.model);
                    myCommand.Parameters.AddWithValue("@color", vec.color);
                    myCommand.Parameters.AddWithValue("@year", vec.year);
                    myCommand.Parameters.AddWithValue("@manufacturers", vec.manufacturers);
                    myCommand.Parameters.AddWithValue("@licensePlate", vec.licensePlate);
                    myCommand.Parameters.AddWithValue("@id", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return Get();
        }

        [HttpDelete("{licensePlate}")]
        public JsonResult Delete(string licensePlate)
        {
            string query = @"
                           delete from dbo.Vehicle
                            where licensePlate=@licensePlate
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("EmployeeAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@licensePlate", licensePlate);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return Get(); 
        }

    }
}
