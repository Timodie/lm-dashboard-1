#!/usr/bin/python
import sys

f = open("Modified_C_DRIVER_STEP_DETAIL.csv", "r+", encoding='utf-8', errors='ignore')
f2 = open("C_DRIVER_STEP_DETAIL.csv", "w+")
for _ in f:
    line = f.readline()
    f2.write(line.strip())
    f2.write('\n')
f.close()
f2.close()
