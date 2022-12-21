import { backgroundImage } from './componens/background'
import { titulo } from './componens/titulo'
import { countdown }  from './componens/temporizador'
import { redes } from './componens/Redes'
import background from './img/pattern-hills.png'
import './styles/style.sass'
import { sectionContador } from './componens/createContador'

document.body.appendChild(backgroundImage(background))
document.body.appendChild(titulo())
document.body.appendChild( sectionContador())
document.body.appendChild(redes());
document.body.appendChild( countdown('Dec 25 2022 20:30:00', 'clock') )