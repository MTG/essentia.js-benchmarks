function violinDistributionPlot(domEl, data, title){
	var plot_data = [];
	for (const index in data) {
		var trace = {
	        type: 'violin',
	        y: data[index][1],
	        name: data[index][0],
	        points: 'none',
	        box: {
	            visible: true
	        },
	        boxpoints: false,
	        line:{
	            color: data[index][2]
	        },
	        opacity: 0.6,
	        meanline:{
	            visible: true
	        },
	    };
		plot_data.push(trace);
	}
    const plot_layout = {
        title: title,
        yaxis: {
            zeroline: false
        }
    };
    Plotly.newPlot(domEl, plot_data, plot_layout);
}

export {violinDistributionPlot as default};