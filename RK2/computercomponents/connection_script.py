import pyodbc

connectionString = ("Driver={SQL Server Native Client 11.0};"
                    "Server=localhost\\MSSQLSERVERDEV;"
                    "Database=DriverPark;"
                    "Trusted_Connection=yes;")    

requestCarPark = ["""INSERT INTO CarPark (ID, Name) VALUES (1, 'Люблинский');""",
                  """INSERT INTO CarPark (ID, Name) VALUES (2, 'Дмитровкий');""",
                  """INSERT INTO CarPark (ID, Name) VALUES (3, 'Марьинский');""",
                  """INSERT INTO CarPark (ID, Name) VALUES (11, 'Чертановский');""",
                  """INSERT INTO CarPark (ID, Name) VALUES (22, 'Нахабинский');""",
                  """INSERT INTO CarPark (ID, Name) VALUES (33, 'Лобнинский');"""]

requestDriver = ["""INSERT INTO Driver (ID, Fio, Salary, Park_ID) VALUES (1, 'Артамонов', 35000, 1);""",
                 """INSERT INTO Driver (ID, Fio, Salary, Park_ID) VALUES (2, 'Петров', 40000, 2);""",
                 """INSERT INTO Driver (ID, Fio, Salary, Park_ID) VALUES (3, 'Иваненко', 37500, 3);""",
                 """INSERT INTO Driver (ID, Fio, Salary, Park_ID) VALUES (4, 'Иванов', 30000, 3);""",
                 """INSERT INTO Driver (ID, Fio, Salary, Park_ID) VALUES (5, 'Иванин', 40000, 3);"""]

requestDriverPark = ["""INSERT INTO DriverPark (Park_ID, Driver_ID) VALUES (1, 1);""",
                     """INSERT INTO DriverPark (Park_ID, Driver_ID) VALUES (2, 2);""",
                     """INSERT INTO DriverPark (Park_ID, Driver_ID) VALUES (3, 3);""",
                     """INSERT INTO DriverPark (Park_ID, Driver_ID) VALUES (3, 4);""",
                     """INSERT INTO DriverPark (Park_ID, Driver_ID) VALUES (3, 5);""",
                     """INSERT INTO DriverPark (Park_ID, Driver_ID) VALUES (11, 1);""",
                     """INSERT INTO DriverPark (Park_ID, Driver_ID) VALUES (22, 2);""",
                     """INSERT INTO DriverPark (Park_ID, Driver_ID) VALUES (33, 4);""",
                     """INSERT INTO DriverPark (Park_ID, Driver_ID) VALUES (33, 5);""",
                     """INSERT INTO DriverPark (Park_ID, Driver_ID) VALUES (33, 3);""",]

requestFrom = ["SELECT * FROM CarPark",
               "SELECT * FROM Driver",
               "SELECT * FROM DriverPark"]

connection = pyodbc.connect(connectionString, autocommit=True)
dbCursor = connection.cursor()
"""
dbCursor.execute('set IDENTITY_INSERT CarPark ON')
for row in requestCarPark:
    dbCursor.execute(row)
dbCursor.execute('set IDENTITY_INSERT Driver ON')
for row in requestDriver:
    dbCursor.execute(row)
for row in requestDriverPark:
    dbCursor.execute(row)
"""
for row in requestFrom:
    dbCursor.execute(row)
    for i in dbCursor:
        print(f"{i}")

connection.commit()
dbCursor.close()
connection.close()
