
from Web_Scraping.web_scraper import get_all_products
from Database_Handling.database_write import DatabaseHandler
from Database_Handling.database_reader import read_database
import json

def main():
    #Testing data base creation
    input = "orange"
    waitrose_products, waitrose_prices, aldi_products, aldi_prices, tesco_products, tesco_prices = get_all_products(input)
    table_name = "prices_of_" + input
    database = DatabaseHandler(table_name)
    database.add_products_to_db(waitrose_products, waitrose_prices, "waitrose")
    database.add_products_to_db(aldi_products, aldi_prices, "aldi")
    database.add_products_to_db(tesco_products, tesco_prices, "tesco")
    read_database(table_name)
    print("Database created successfully")

if __name__ == "__main__":
    main()