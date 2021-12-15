import pyodbc

connectionString = ("Driver={SQL Server Native Client 11.0};"
                    "Server=localhost\\MSSQLSERVERDEV;"
                    "Database=Computer;"
                    "Trusted_Connection=yes;")    

request1 = """INSERT INTO dbo.CPU (Name, Frequency, Architecture) VALUES ('Intel core i5', '5Ghz', 'x86');"""

request2 = "SELECT * FROM dbo.CPU"

connection = pyodbc.connect(connectionString, autocommit=True)
dbCursor = connection.cursor()
#dbCursor.execute(request1)
dbCursor.execute(request2)
for row in dbCursor:
    print(f"{row.ID} {row.Name} {row.Frequency} {row.Architecture}")
connection.commit()
dbCursor.close()
connection.close()
