CREATE TABLE [dbo].[Vehicle](

	[VehicleId] [int] IDENTITY(1,1) ,
	[model] [nvarchar](20) ,
	[color]  ENUM('white', 'black', 'silver'),
	[year] [datetime] ,
	[manufacturers] ENUM('Audi','Dodge',  'BMW', 'Volkswagen'),
	[licensePlate] [nvarchar](20) ,
)

INSERT into [dbo].[Vehicle] 
([model], [color], [year], [manufacturers],[licensePlate]) 
VALUES ('e-tron', 'white', '2022', ,'Audi', '276fff85')

Delete from dbo.Vehicle
where VehicleId=1;

update dbo.Vehicle
set color= @color,
year=@year,
manufacturers=@manufacturers,
licensePlate=@licensePlate
where VehicleId=@VehicleId;
                          