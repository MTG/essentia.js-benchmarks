import data from '../data/data';

/**
 * Template for Columns Blocks
 */
let columnsBlockTemplates = {
    main: `
    <div class="columns is-mobile is-centered">
        <div class="column">
            <div class="buttons">
                <button id="start_offline" class="button is-primary">Run Benchmark</button>
            </div>
            <p id="results"></p>
            <a id="download_results">Download Results</a>
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
    `,
    tensorflow_models: `
    <div class="columns is-mobile is-centered">
        <div class="column">
            <div class="buttons">
                <button id="start_offline" class="button is-primary">Run Benchmark</button>
            </div>
            <p id="results"></p>
            <a id="download_results" class="is-hidden"></a>
        </div>
        <div class="column" id="inference_results">
            <h4 class="subtitle is-4">inference results</h4>
            <div id="table"></div>
            <div id="plot"></div>
            <div id="plot_stack"></div>
        </div>
        <div class="column" id="endtoend_results">
            <h4 class="subtitle is-4">end-to-end results</h4>
            <div id="table"></div>
            <div id="plot"></div>
        </div>
    </div>
    `,
    tensorflow_feature_extraction: `
    <div class="columns is-mobile is-centered">
        <div class="column">
            <div class="buttons">
                <button id="start_offline" class="button is-primary">Run Benchmark</button>
            </div>
            <p id="results"></p>
            <a id="download_results" class="is-hidden"></a>
        </div>
        <div class="column" id="extract_results">
            <h4 class="subtitle is-4">results</h4>
            <div id="table"></div>
            <div id="plot"></div>
            <div id="plot_stack"></div>
        </div>
    </div>
    `
};

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
        if (element.title == "Essentia Tensorflow Models") {
            const selectTensorflowBackend = document.createElement('div');
            selectTensorflowBackend.innerHTML = `
                <p>Select Tensorflow.js backend</p>
                <label class="checkbox"><input id="tfjs-backend-webgl" type="radio" name="tfjs-backend" checked>WebGL backend</label>
                <label class="checkbox"><input id="tfjs-backend-wasm" type="radio" name="tfjs-backend">WASM backend</label>
            `;
            selectTensorflowBackend.classList.add('control');
            mainContainer.appendChild(selectTensorflowBackend);
        }
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
                createNotificationSubBlock(childEl, element.category)
            );
        });
        
        return mainDiv;
    }

    /**
     * Creates the Nedeed elements for one algorithm.
     * @param {object} childEl 
     */
    function createNotificationSubBlock(childEl, category) {
        let notiDiv = document.createElement('div');
        notiDiv.className = "notification";
        notiDiv.setAttribute("id", childEl.id);
        notiDiv.appendChild(
            createHeaderElement('h4', childEl.title, 'subtitle')
            );
            
        notiDiv.innerHTML += columnsBlockTemplates[category];

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

};

