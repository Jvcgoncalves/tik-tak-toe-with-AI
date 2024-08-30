# Jogo Da Velha Inteligente # 
### Introdução ###

Jogo da velha com segundo jogador sendo o agente inteligente.
## Descrição do Algoritmo ##

O agente inteligente não é uma Inteligência Artificial, ele é um algoritmo scriptado. É separado em 3 prioridades, não sendo capaz de escolher por qual será a melhor no momento, apenas as seguindo.

### Prioridades ###
1. Casa do Meio
    1. Caso a casa do meio não esteja ocupada, sua primeira jogada sempre será no meio
2.  Linhas e Colunas
    1. Caso o jogador 1 (usuário) esteja prestes a ganhar o jogo ele impede
    2. As linhas têm prioridade sobre as colunas
3. Diagonais
    1. Caso o jogador 1 esteja prestes a ganhar o jogo ele impede
    2. A diagonal principal tem prioridade sobre a diagonal secundária
4. Ganhar o jogo
    1. Caso o jogador 1 não esteja prestes a ganhar e o Jogador 2 (agente inteligente) esteja, ele ganhará
5. Última Casa
    1. Caso nenhuma das outras prioridades não se satisfaça, ele jogará em alguma casa livre

## Vulnerabilidades ##
Já que o algoritmo tem como prioridade impedir o usuário de ganhar, jogando na "ofensiva" resultará em vitória do usuário.

### Possível evolução ###
Para montar um modelo que seja impossível de ganhar, seria necessário criar realmente um modelo baseado em Rede Neural, capaz de <b>pensar</b> qual a prioridade, se é ganhar ou impedir o usuário de ganhar.


# Fim #