import data from '../data/data';

export default () => {

    let mainContainer = document.getElementById("main-container");

    /**
     * Main Loop
     */
    data.forEach(element => {
        
        mainContainer
            .appendChild(
                createHeaderElement('h3', element.title, 'title')
            );

        mainContainer
            .appendChild(
                createNotificationBlocks(element)
            );
    });

    /**
     * Create a block where algotithms are grouped
     * @param {object} element 
     */
    function createNotificationBlocks(element) {
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('container');
        
        element.childs.forEach(childEl => {
            mainDiv.appendChild(
                createNotificationSubBlock(childEl)
            );
        });
        
        return mainDiv;
    }

    /**
     * Creates the Nedeed elements for one algorithm.
     * @param {object} childEl 
     */
    function createNotificationSubBlock(childEl) {
        let notiDiv = document.createElement('div');
        notiDiv.className = "notification";
        notiDiv.setAttribute("id", childEl.id);
        notiDiv.appendChild(
            createHeaderElement('h4', childEl.title, 'subtitle')
            );
            
        notiDiv.innerHTML += createColumnsBlock();

        return notiDiv;
    }

    /**
     * 
     * @param {string} type 
     * @param {string} title 
     * @param {string} className 
     */
    function createHeaderElement(type, title, className) {
        let headerEl = document.createElement(type);
        headerEl.textContent = title;
        headerEl.classList.add(className);

        return headerEl;
    }

    /**
     * Template for Columns Blocks
     */
    function createColumnsBlock() {
        let template = `
        <div class="columns is-mobile is-centered">
            <div class="column">
                <div class="buttons">
                    <button id="start_offline" class="button is-primary">Offline</button>
                </div>
                <p id="results"></p>
                <a id="download_results" class="is-hidden"></a>
            </div>
            <div class="column" id="essentia_results">
                <h4 class="subtitle is-4">essentia.js results</h4>
                <div id="table"></div>
                <div id="plot"></div>
                <div id="plot_stack"></div>
            </div>
            <div class="column" id="meyda_results">
                <h4 class="subtitle is-4">meyda results</h4>
                <div id="table"></div>
                <div id="plot"></div>
            </div>
        </div>
        `;

        return template;
    }
};

