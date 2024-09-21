import pymysql
import sys
import os

SQL_LINK = f"mysql://{os.getenv('DB_USER')}:{os.getenv('DB_PASS')}@{os.getenv('DB_HOST')}:3306/{os.getenv('DB_NAME')}"

def create_db():
    try:
        connection = pymysql.connect(host=os.getenv("DB_HOST"), user=os.getenv("DB_USER"), password=os.getenv("DB_PASS"))
    except Exception as e:
        print(f"Failed to connect to DB: {e}")
        sys.exit(1)
    cursor = connection.cursor()
    cursor.execute(f"CREATE DATABASE IF NOT EXISTS {os.getenv('DB_NAME')}")
    connection.close()
