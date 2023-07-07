import data from './data.json' assert {type: 'json'}
import Planet from './Planet.js'

const planets = {
    mercury : new Planet(data[0]),
    venus : new Planet(data[1]),
    earth : new Planet(data[2]),
    mars : new Planet(data[3]),
    jupiter : new Planet(data[4]),
    saturn : new Planet(data[5]),
    uranus : new Planet(data[6]),
    neptune : new Planet(data[7]),
}

let currentPlanet = planets.mercury

window.addEventListener('click', function(e) {
    if (e.target.id === 'overview-btn') { //inner pages
        render(currentPlanet.getOverviewHtml())
    } else if (e.target.id === 'structure-btn') {
        render(currentPlanet.getStructureHtml())
    } else if (e.target.id === 'surface-btn') {
        render(currentPlanet.getSurfaceHtml())
    } else if (e.target.id === 'nav-icon') { //nav button (mobile)
        toggleNavigation()
    } else if (e.target.id.includes('-nav')) { //planet links
        const planet = e.target.id.substring(0, e.target.id.indexOf('-'))
        setCurrentPlanet(planets[planet])
        document.getElementById('nav').classList.add('hide-nav')
    }
})

function setCurrentPlanet(planet) {
    currentPlanet = planet 
    render(currentPlanet.getOverviewHtml())
}

function render(html) {
    document.getElementById('main').innerHTML = html
}

function toggleNavigation() {
    document.getElementById('nav').classList.toggle('hide-nav')
}

render(planets.mercury.getOverviewHtml())