# Seletor de Cores Aleatórias

## Descrição

Este projeto é um script JavaScript que trabalha com as 148 cores nomeadas suportadas por todos os navegadores, conforme listado na referência de cores HTML do W3Schools. O script realiza as seguintes operações:

1. Armazena todas as 148 cores em um array.
2. Seleciona aleatoriamente 10 cores deste array.
3. Escolhe uma cor aleatória final dentre as 10 selecionadas.

## Funcionalidades

- Lista completa das 148 cores HTML suportadas por todos os navegadores.
- Função para selecionar 10 cores aleatórias da lista completa.
- Função para escolher uma cor aleatória final dentre as 10 selecionadas.
- Exibição dos resultados no console.

## Como Usar

1. Certifique-se de ter o Node.js instalado em seu sistema.
2. Clone este repositório ou copie o conteúdo do arquivo `colors.js`.
3. Execute o script usando o Node.js:

   ```
   node colors.js
   ```

4. O script irá exibir no console:
   - O número total de cores disponíveis.
   - As 10 cores aleatórias selecionadas.
   - A cor final escolhida aleatoriamente dentre as 10.

## Exemplo de Saída

```
Total number of colors: 148
Ten random colors: ['darkslategray', 'mediumvioletred', 'palevioletred', 'darkgreen', 'lightcyan', 'peru', 'indianred', 'darkkhaki', 'lightsteelblue', 'cornsilk']
Final selected color: lightsteelblue
```

## Notas

- As cores são armazenadas em letras minúsculas para consistência.
- A seleção aleatória usa o algoritmo de Fisher-Yates para embaralhar o array de cores.
- Cada execução do script produzirá resultados diferentes devido à natureza aleatória da seleção.

## Contribuições

Contribuições para melhorar ou expandir este projeto são bem-vindas. Por favor, sinta-se à vontade para fazer um fork do repositório e enviar pull requests.

## Licença

Este projeto está licenciado sob a licença MIT.
