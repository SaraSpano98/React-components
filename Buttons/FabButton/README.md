# FabButton COMPONENT

## Descrizione/ Description
`FabButton`(Floating Action Button) è un pulsante circolare galleggiante, tipicamente posizionato in basso a destra dell’interfaccia utente, che rappresenta l’azione principale o più frequente di un'applicazione. È un componente comune nel design system Material Design e viene usato per aumentare l'usabilità e la visibilità di un'azione importante.

`FabButton`(Floating Action Button) is a floating circular button, typically placed at the bottom right of the user interface, that represents the primary or most frequent action of an application. It is a common component in the Material Design design system and is used to increase usability and visibility of an important action.


## Funzionalità / Features
- Galleggia sopra il contenuto principale dell'interfaccia.
- Reagisce all'interazione utente (click, tap) eseguendo una funzione specifica.
- Può espandersi per mostrare più azioni (Speed Dial Fab).
- Mostra un'icona centrale che rappresenta visimvamente l'azione  

- Floats above the main content of the interface.
- Reacts to user interaction (click, tap) by performing a specific function.
- Can expand to show multiple actions (Speed ​​Dial Fab).
- Shows a central icon that visually represents the action


## Come usare / How to use: 
Di solito è composto da: 
- Un contenitore circolare.
- Un'icona centrale (SVG, Font Icon, ect..)
- Uno sfondo coloratore (di solito il colore primario del tema).

It usually consists of:
- A circular container.
- A central icon (SVG, Font Icon, etc..)
- A background colorizer (usually the primary color of the theme).


## Posizionamento/ Positioning:
È posizionato con CSS/JS in un angolo fisso della viewport (spesso in basso a destra), fluttuando sopra gli altri elementi.

It is positioned with CSS/JS in a fixed corner of the viewport (often bottom right), floating above other elements.


### Importare il componente / Import the component
```jsx
import { FabButton } from "./FabButton";
