#!/usr/bin/python
import pymysql
import sys

hostname = '138.197.32.168'
username = 'Zitao'
password = '!Boston1994'
database = 'CS320'

# Driver function to connect DB.
myConnection = pymysql.connect( host=hostname, user=username, passwd=password, db=database )
add_C_DRIVER_SCHEDULE( myConnection )
myConnection.close()
