# Expresiones Regulares
Ejemplo básico

Busca que coincida la E y que los números esten en un rango de 0 al 9, en los {} busca la cantidad de numeros osea 10 números para que coincida, en pocas palabras son cuantificadores.

`` [E]-[0-9]{1,10} ``

Para ejecutarlo usamos el siguiente código:

`` let reg = /[PE]-[0-9]{1,8}/ `` -Expresión

`` let id = "E-22233212212" `` - En este caso probaremos este 

`` let res = reg.test(id) `` - comprueba que se cumpla true o false

`` console.log(res) `` - imprimir

## Modificadores o también llamados flag

En este caso tenemos seis (6) tipos de modicadores, se colocan al final de cada patrón.
Estos son: 

- g (global)
- i (case insensitive)
- m (multiline)
- s (single line)
- u (unicode)
- y (sticky)


### Coincidencia de patrones:
- .       ->   Any Character Except New Line
- \d      ->   Digit (0-9)
- \D      ->   Not a Digit (0-9)
- \w      ->   Word Character (a-z, A-Z, 0-9, _)
- \W      ->   Not a Word Character excluding _
- \s      ->   Whitespace (space, tab, newline)
- \S      ->   Not Whitespace (space, tab, newline)
- \t      ->   Tab
- \n      ->   New line

### Grouping:
- []      ->   Matches Characters in brackets (ranges with -)
- [^ ]    ->   Matches Characters NOT in brackets
- |       ->   Or
- ( )     ->   Group

### Quantifiers:
- (*)     -> 0 or More
- (+)     -> 1 or More
- ?       -> 0 or One
- {3}     -> Exact Number
- {3,4}   -> Range of Numbers (Minimum, Maximum)
- {3,}    -> Range of Numbers (Minimum)

### Limits:
- ^       -> Beginning of a String
- $       -> End of a String
- \b      -> Word Boundary
- \B      -> Not a Word Boundary

### Replace:
- $0		-> Gets all the expression
- $1		-> Gets grupo 1 content

ejemplo:

comprobar correo electronico:
\w+@\w+\w+\.+\w+/g

#### Más recursos:

- [Sintaxis de las expresiones regulares](https://support.google.com/a/answer/1371415?hl=es)
- [Regexr](regexr.com)