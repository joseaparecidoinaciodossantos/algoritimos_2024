
#algoritimo para sortear um numero
import random

def sortear(minimo,maximo):
 return random.randint(minimo,maximo)

minimo1 = 1

maximo = 10

sorteado = (sortear(minimo,maximo))

num = int(input("insira qualquer numero"))

if sorteado> num:
 print("0 numero e menor")
 

