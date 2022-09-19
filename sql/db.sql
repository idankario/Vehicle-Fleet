CREATE TABLE [dbo].[Vehicle](
	[VehicleId] [int] IDENTITY(1,1) NOT NULL,
	[model] [nvarchar](20) NOT NULL,
	[licensePlate] [nvarchar](20) UNIQUE NOT NULL,
	[color] [nvarchar](20) NOT NULL,
	[year] [datetime] NOT NULL,
	[manufacturers] [nvarchar](20)  NOT NULL
)

INSERT into [dbo].[Vehicle] 
([model], [color], [year], [manufacturers],[licensePlate]) 
VALUES ('e-tron', 'white', '2022', 'Audi', '276fff85')

INSERT into [dbo].[Vehicle] 
([model], [color], [year], [manufacturers],[licensePlate]) 
VALUES ('e-tron', 'black', '2019', 'Audi', '276jh685')
INSERT into [dbo].[Vehicle] 
([model], [color], [year], [manufacturers],[licensePlate]) 
VALUES ('e-tron', 'silver', '2020', 'Dodge', '22345f85')
INSERT into [dbo].[Vehicle] 
([model], [color], [year], [manufacturers],[licensePlate]) 
VALUES ('e-tron', 'white', '2021', 'Volkswagen', '27kkjlf66')
INSERT into [dbo].[Vehicle] 
([model], [color], [year], [manufacturers],[licensePlate]) 
VALUES ('e-tron', 'silver', '2019', 'BMW', '34gty778h')


                          