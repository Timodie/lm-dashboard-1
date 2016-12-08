#!/usr/bin/python
import pymysql
import sys

'''
Credential intentionally omitted
Input in runtime
'''
hostname = 'host'
username = 'name'
password = 'password'
database = 'db'

'''
Standard template to raed pre-defined schema,
Remember to close!
Schema file contains a complete transaction of creating new table.
'''
f = open('C_DRIVER_SCHEDULE', 'r+')
C_DRIVER_SCHEDULE = f.read()
f.close()

'''
C_APP_RUN_DEPENDENCY = f.read('C_APP_RUN_DEPENDENCY', 'r+')
f.close()
C_DRIVER_STEP_DETAIL = f.read('C_DRIVER_STEP_DETAIL', 'r+')
f.close()
C_DRIVER_STEP = f.read('C_DRIVER_STEP', 'r+')
f.close()
'''

# This is done
# Re-running this will get "table created" error
def add_C_DRIVER_SCHEDULE( conn ):
    query = conn.cursor()
    query.execute(C_DRIVER_SCHEDULE)
    query.execute("SHOW TABLES;")
    print (query.fetchall())

# Implement these accordingly.
'''
def add_C_APP_RUN_DEPENDENCY( conn ) :
    query = conn.cursor()

def add_C_DRIVER_TEP_DETAIL( conn ):
    query = conn.cursor()

def add_C_DRIVER_STEP( conn ):
    query = conn.cursor()
'''

# Driver function to connect DB.
myConnection = pymysql.connect( host=hostname, user=username, passwd=password, db=database )
add_C_DRIVER_SCHEDULE( myConnection )
myConnection.close()
