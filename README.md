# gm-man
Klon Pacman'a używając framework'a Pixi.js - nauka framework'u i GIT'a na podstawie znanej gry

Lukasz to dziala :D to dziala :D

- plan
    - lista widokow gry
    - lista logiki/ funkcjonalnosci dla kazdego widoku
    - TBD

- implementacja
    - podstawa projektu
        - bazowa struktura katalogow
        - ustawienie kompilatora
            - plik dependencies
            - test
     - glowny controller aplikacji (App.js)
     - widoki
          - main menu (widok)
               - level ( easy/medium/hard )
               - credits
               - game
          - game (widok)
          - player (widok)
          - enemy (widok)
           
     - modele
           - game (model) - level, boardId ....
           - user (model) - playerName, position(x,y), ...
           - board (model) - tablica pol (scianka, zwykle pole)

     - kontrolery
            - game (kontroler) - logika gry (timer, kolizje)
            - user (kontroler) - logika poruszania playera
            - enemy (kontroler) - logika poruszania enemiego (AI)
