import { backgroundImage } from './components/background'
import { titulo } from './components/titulo'
import { countdown } from './components/temporizador'
import { redes } from './components/Redes'
import background from './img/pattern-hills.png'
import './styles/style.sass'
import { sectionContador } from './components/createContador'

document.body.appendChild(backgroundImage(background))
document.body.appendChild(titulo())
document.body.appendChild(sectionContador())
document.body.appendChild(redes());
document.body.appendChild(countdown('Dec 31 2022 00:00:00', 'clock'))