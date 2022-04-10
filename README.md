# sock-merchant
__________________________________________________________________
## PROBLEMA
jhon trabaja en una tienda de ropa, tiene una gran pila de calcetines que debe conbinar por color para la venta. dada una matriz de enteros que representan 
el color de cada calcetin, determine cuantos pares de calcetienes con colores coincidentes hay, por ejemplo hay n = 7 calcetines con colores ar = [1,2,1,2,1,3,2] 
hay un par de colores 1 y uno de color 2 quedan 3 calcetines extraños uno de cada color. el numero de pares es 2.

## Descripcion de la funcion (merchant)
 __Entrada de los datos:__

 - Con esta funcion debe devolver un numero entero que muestre el numero de pares de los calcetines que se encuentran disponibles.

```javascript
function merchant(n, ar)
```
n = numero de calcetines que hay en la pila;
ar = los colores de cada calcetin;

__Proceso de los datos:__

 -  se generan condiciones para encontrar los colores de cada uno de los calcetines haciendoles 
    un filtro con el metodo <<-- Filter -->>

```javascript
if(findSock.length === 0) {
  let filterSocks = ar.filter(function(filterBySocks){
    return filterBySocks === sock;
  });
  if(filterSocks.length > 0) {
    pairSocks.push(sock);
    let counter = Math.floor(filterSocks.length/2);
    pairsOfSocks = pairsOfSocks + counter;
  }
}
```

__Proceso de los datos:__
-  Muestra de los datos y su respectivo resultado
_________
![imagen](https://github.com/leidypaez/sock-merchant/blob/main/img/image.png)
