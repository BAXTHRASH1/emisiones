from random import *
import random
import string
num =0
num = random.randrange(10)
num = str(num)
allchar = string.ascii_letters 
l1 = "".join(choice(allchar) for x in range(0,2))
print("patente: ",l1.upper() +'-xxxx')
