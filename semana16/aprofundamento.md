# Aprofundamento SQL
## Exercicio 1
### Leia os comandos abaixo e indique o que eles fazem. 
### a. Alterar a tabela, excluindo  a coluna Salario
### b. Aterar a tabela, alterando o genero de sexo com limite de 6 caracteres
### c. Alterar a tabela, mudar o genero, em genero no maximo 255 caracteres 

### d. 
`ALTER TABLE Actor CHANGE gender gender VARCHAR(100);`

## Exercicio 2
### a.
` UPDATE Actor
SET name = "Isis Valverde"
WHERE id = "003"`

`UPDATE Actor
SET birth_date = "1989-01-01"
WHERE id = "003"
`
### b.
`update Actor
SET name = "JULIANA PAES"
WHERE name = "juliana paes";`

`update Actor
SET name = "juliana Paes"
WHERE id = "005"`

### c.
`update Actor
SET salary = 1000000
WHERE birth_date = "1985-05-21"`

### d.
`update Actor
SET salary = 1000000 
WHERE id = "008"`
#### resultado de 0 linhas afetadas, porque na minha tabela nao existe o id 008, então e impossivel alterar o salario de algo que não exista.

## Exercicio 3
### a.
`DELETE FROM Actor WHERE name = "Fernanda Montenegro"`
### b.
`DELETE FROM Actor 
WHERE 
gender = "male" AND 
salary = 1000000`

## Exercicio 4
### a.
`SELECT MAX(SALARY) FROM Actor;`
### b.
`SELECT min(salary) FROM Actor WHERE gender = "female"`
### c.
`SELECT COUNT(*) FROM Actor WHERE gender = "female"`
### d.
`select Sum(salary) from Actor;`

## Exercicio 5
### a. 
`SELECT COUNT(*), gender
FROM Actor
GROUP BY gender
`
#### nos mostra a quantidade de cada grupo de genero na tabela, no caso a resposta foi 3 male e 3 female.

### b.
`SELECT * FROM Actor ORDER BY id, name DESC;`
### c.
`SELECT * FROM Actor ORDER BY salary;`
### d.
`SELECT * FROM Actor
ORDER BY name ASC
LIMIT 4
WHERE gender = 'female'`
### e.
`SELECT AVG(salary), gender
FROM Actor
GROUP BY gender`

## Exercicio 6
### a.
`ALTER TABLE Movie
ADD playing_limit_date VARCHAR(255)`
