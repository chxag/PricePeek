import sqlite3
def read_database(table_name):
    # Connect to the database
    conn = sqlite3.connect('grocery_prices_dynamic.db')  # Replace with your database file path
    cursor = conn.cursor()

    # Replace 'your_table_name' with the actual table name
    cursor.execute(f"SELECT * FROM {table_name}")  # Adjust SQL query as needed
    rows = cursor.fetchall()
    for row in rows:
        print(row)

    # Close the connection
    conn.close()
