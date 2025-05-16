# DeleteButton COMPONENT


## Descrizione/ Description
`DeleteButton` è un componente React che simula un'azione di cancellazione con un'animazione elegante e accessibile.  
Quando si clicca sul bottone, appare un’animazione di "deleting" e il testo cambia dinamicamente da "Delete" a "Deleting...".  
Dopo qualche secondo, il bottone ritorna allo stato iniziale.

`DeleteButton` is a React component that simulates a delete action with a smooth and accessible animation.  
When clicking the button, a "deleting" animation appears and the button text dynamically changes from "Delete" to "Deleting...".  
After a few seconds, the button returns to its initial state.


## Funzionalità / Features
- Stato di caricamento simulato (`Deleting...`)  
- Disabilitazione del bottone durante l’operazione  
- Animazione di una piccola icona a tema "cestino/trash"  
- Accessibilità migliorata con attributi ARIA  
- Layout centrato e responsive  

- Simulated loading state (`Deleting...`)  
- Button disabled during the operation  
- Small trash-can themed icon animation  
- Improved accessibility with ARIA attributes  
- Centered and responsive layout  


## Come usare / How to use: 

### Importare il componente / Import the component
```jsx
import { DeleteButton } from "./DeleteButton";


