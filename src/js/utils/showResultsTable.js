function showResultsTable(domEL, stats){
		const table_div = document.createElement("div");
		table_div
			.classList
			.add('table-container');
		let table = document.createElement("table");
		table
			.classList
			.add('table', 'is-striped', 'is-narrow', 'is-hoverable', 'is-fullwidth');
	/**
	 * Create Table Headers
	 */
	function createHeaders() {
		const thead = document.createElement("thead");
		const tr = document.createElement("tr");
		const th_stats = document.createElement("th");
		const th_stats_text = document.createTextNode("Stats");
		th_stats.appendChild(th_stats_text);
		const th_value = document.createElement("th");
		const th_value_text = document.createTextNode("Value");
		th_value.appendChild(th_value_text);
		tr.appendChild(th_stats);
		tr.appendChild(th_value);
		thead.appendChild(tr);
		return thead;
	}
	/**
	 * Creates full table body
	 * @param {*} stats 
	 */
	function createBody(stats) {
		const tbody = document.createElement("tbody");
		for (const resultName in stats){
			if (resultName === 'sample'){
				continue;
			}
			let tr_res = createRow();
			let nameCell = createCell(resultName);
			let valueCell = createCell(stats[resultName].toFixed(10));
			tr_res.appendChild(nameCell);
			tr_res.appendChild(valueCell);
			tbody.appendChild(tr_res);
		}
		return tbody;
	}
	/**
	 * Generates a table row
	 */
	function createRow() {
		return document.createElement("tr");
	}
	/**
	 * Generates a Cell Row and add the value to its content
	 * @param {*} value 
	 */
	function createCell(value) {
		let td = document.createElement("td");
		let td_text = document.createTextNode(value);
		td.appendChild(td_text);
		return td;
	}
	let headers = createHeaders();
	let tb = createBody(stats);
	table.appendChild(headers);
	table.appendChild(tb);
	table_div.appendChild(table);
	domEL.appendChild(table_div);
}
export {showResultsTable};