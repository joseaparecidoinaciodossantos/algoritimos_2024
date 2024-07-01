# entrada de dados
altura = float(input("digite sua altura"))
peso = float(input("digite seu peso"))

# processamento de dados
imc = peso / (altura * altura)
imc = peso / (altura ** 2)

# saida 
print(imc)

if imc < 15:
    print('muito magro')
elif imc < 18.5:
    print('magreza leve')
elif imc <24.9:
    print('peso normal')
elif imc < 29.9:
    print('acima do peso')
elif imc < 39.8:
    print('obesidade I')
elif imc < 40:
    print('obesidade II')
else:
    print('obesidade III')
