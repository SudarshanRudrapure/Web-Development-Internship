import sqlite3

# Create connection (or open existing database)
conn = sqlite3.connect("products.db")
cursor = conn.cursor()

# Create table (if not exists)
cursor.execute("""
CREATE TABLE IF NOT EXISTS Products (
    id INTEGER PRIMARY KEY,
    name TEXT,
    price REAL
)
""")

# Insert sample data
cursor.execute("INSERT INTO Products (name, price) VALUES ('Laptop', 50000)")
cursor.execute("INSERT INTO Products (name, price) VALUES ('Mobile', 20000)")
cursor.execute("INSERT INTO Products (name, price) VALUES ('Tablet', 30000)")

conn.commit()

# SQL Query to display all records
cursor.execute("SELECT * FROM Products")

rows = cursor.fetchall()

print("Products Table Records:")
for row in rows:
    print(row)

# Close connection
conn.close()