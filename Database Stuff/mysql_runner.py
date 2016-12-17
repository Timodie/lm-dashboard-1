#!/usr/bin/python
import pymysql
import sys

hostname = 'hostname'
username = 'username'
password = 'password'
database = 'database'

# Driver function to connect DB.
myConnection = pymysql.connect( host=hostname, user=username, passwd=password, db=database )
add_C_DRIVER_SCHEDULE( myConnection )
myConnection.close()
