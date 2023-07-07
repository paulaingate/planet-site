class Planet {
    constructor(data) {
        Object.assign(this, data)
        this.name = this.name.toLowerCase()
    }

    getOverviewHtml() {
        return this.getPlanetHtml('overview')
    }

    getStructureHtml() {
        return this.getPlanetHtml('structure')
    }

    getSurfaceHtml() {
        return this.getPlanetHtml('geology')
    }

    getPlanetHtml(page) {
        const {name, rotation, revolution, radius, temperature, images} = this
        const {content, source} = this[page]
        const img = page === 'structure' ? images.internal : images.planet
        const surfaceImg = page === 'geology' ? images.geology : ''
        //TODO - refactor the overview, etc buttons into divs so that i can add the hidden content words/numbers in spans with the class 'hidden' on mobile
        return `
        <div class="${name} planet-container">
            <!-- Page buttons -->
            <div class="page-btn-container padding">
                <button id="overview-btn" class="overview-btn ${page === 'overview' ? 'active-page' : ''}"></button>
                <button id="structure-btn" class="structure-btn ${page === 'structure' ? 'active-page' : ''}"></button>
                <button id="surface-btn" class="surface-btn ${page === 'geology' ? 'active-page' : ''}"></button>
            </div>

                <div class="img-container padding">
                    <img class="${name}-img" src="${img}" alt="">
                    <img class="surface-img ${name}-surface-img" src="${surfaceImg}" alt="">
                </div>

                <div class="content padding">
                    <h1>${name}</h1>
                    <p>${content}</p>
                    <p class="source">
                        Source : 
                        <a href="${source}">Wikipedia</a>
                        <img src="assets/icon-source.svg">
                    </p>
                </div>

                <div class="facts-container padding">
                    <div class="fact">
                        <h4>Rotation Time</h4>
                        <h2>${rotation}</h2>
                    </div>

                    <div class="fact">
                        <h4>Revolution Time</h4>
                        <h2>${revolution}</h2>
                    </div>

                    <div class="fact">
                        <h4>Radius</h4>
                        <h2>${radius}</h2>
                    </div>

                    <div class="fact">
                        <h4>Average Temp.</h4>
                        <h2>${temperature}</h2>
                    </div>
                </div>
            
        </div>
        `
    }
}

export default Planet