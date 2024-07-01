print("ola mundo")
#entrada

precoAlcool = float(input("insira o valor do alcool"))
precoGasolina = float(input("insira o valor da gasolina: "))


#processamento

resultado = precoAlcool/precoGasolina


#saida


print(resultado)

#se resultado for maior que 0.7 bastece com gasolina, caso contrario,com alcool
if resultado > 0.7:
    print("abasteca com gasolina! ")
else:
    print("abasteca com alcool!")

