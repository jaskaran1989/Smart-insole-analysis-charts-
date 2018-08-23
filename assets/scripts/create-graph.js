/*
 * Parse the data and create a graph with the data.
 */
function parseData(createGraph) {
	Papa.parse("../data/michael_third_walk.csv", {
		download: true,
		complete: function(results) {
			createGraph(results.data);
		}
	});
}

function parseData1(createGraph1) {
	Papa.parse("../data/michael_third_walk.csv", {
		download: true,
		complete: function(resultsnew) {
			createGraph1(resultsnew.data);
		}
	});
}

function parseData2(createGraph2) {
	Papa.parse("../data/michael_third_walk.csv", {
		download: true,
		complete: function(resultsnew1) {
			createGraph2(resultsnew1.data);
		}
	});
}

function parseData3(createGraph3) {
	Papa.parse("../data/michael_third_walk.csv", {
		download: true,
		complete: function(resultsnew2) {
			createGraph3(resultsnew2.data);
		}
	});
}

function parseData4(createGraph4) {
	Papa.parse("../data/michael_third_walk.csv", {
		download: true,
		complete: function(resultsnew3) {
			createGraph4(resultsnew3.data);
		}
	});
}

function parseData5(createGraph5) {
	Papa.parse("../data/michael_third_walk.csv", {
		download: true,
		complete: function(resultsnew4) {
			createGraph5(resultsnew4.data);
		}
	});
}

function parseData6(createGraph6) {
	Papa.parse("../data/michael_third_walk.csv", {
		download: true,
		complete: function(resultsnew5) {
			createGraph6(resultsnew5.data);
		}
	});
}
function parseData7(createGraph7) {
	Papa.parse("../data/michael_third_walk.csv", {
		download: true,
		complete: function(resultsnew6) {
			createGraph7(resultsnew6.data);
		}
	});
}
function createGraph(data) {

	data.shift();
	data.shift();

	var time = [];
	var S1 = [];
	var S2 = [];

	for (var i = 1; i < data.length  ; i++) {
		time.push(data[i][0]);
		S1.push(data[i][8]);
		S2.push(data[i][10]);
	}
	
	console.log(data[1][0]);

	var chart = c3.generate({
	
		bindto: '#chart',
		
	    data: {
	        columns: [S1,S2],type :'spline'
	    
    },
			
	    axis: {
	        x: {
	            type: 'category',
	            categories: time,
				label: 'time',
	            tick: {
					fit: true,
	            	multiline: false,
                	culling: {
                    	max: 15
                	}
            	}
	        },
			
			y: {
            label: 'Sensor data'
			}
	    }, 
	    zoom: {
        	enabled: true
    	},
    legend: {
        show: false
    },
    tooltip: {
        show: false
    }
	});
}

function createGraph1(data) {
	var time = [];
	var S3 = [];
	var S4 = [];

	for (var i = 1; i < data.length -2 ; i++) {
		time.push(data[i][0]);
		S3.push(data[i][9]);
		S4.push(data[i][11]);
	}


	var chart = c3.generate({
		bindto: '#chart1',
		
	    data: {
	        columns: [S3,S4],
			type: 'spline'
	    },
	    axis: {
	        x: {
	            type: 'category',
	            categories: time,
				label: 'time',
	            tick: {
	            	multiline: false,
                	culling: {
                    	max: 15
                	}
            	}
	        },
			y: {
            label: 'Sensor data'
        }
	    },
		
	    
	    zoom: {
        	enabled: true
    	},
    legend: {
        show: false
    },
    tooltip: {
        show: false
    }
	});
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createGraph2(data) {
	var time = [];
	var S5 = [];
	var S6 = [];
	//var S7 = ["angleZ(Deg)"];

	for (var i = 1; i < data.length -2 ; i++) {
		time.push(data[i][0]);
		S5.push(data[i][5]);
		S6.push(data[i][6]);
		//S7.push(data[i][7]);
	}

	var chart = c3.generate({
		bindto: '#chart2',
		
	    data: {
	        columns: [S5,S6]
			,
			type: 'spline'
	    },
			
	    axis: {
	        x: {
	            type: 'category',
	            categories: time,
				label: 'time',
	            tick: {
	            	multiline: false,
                	culling: {
                    	max: 15
                	}
            	}
	        },
			y: {
            label: 'X and Y angle values'
        }
	    },
		
	    
	    zoom: {
        	enabled: true
    	},
    legend: {
        show: false
    },
    tooltip: {
        show: false
    }
	});
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createGraph3(data) {
	var time = [];
	var S8 = [];
	var S9 = [];
	//var S10 = ["accZ(G)"];

	for (var i = 1; i < data.length -2 ; i++) {
		time.push(data[i][0]);
		S8.push(data[i][2]);
		S9.push(data[i][3]);
		//S10.push(data[i][4]);
	}

	var chart = c3.generate({
		bindto: '#chart3',
	
	    data: {
	        columns: [S8,S9]
			,
			type: 'spline'
	    },
	      
	    axis: {
	        x: {
	            type: 'category',
	            categories: time,
				label: 'time',
	            tick: {
	            	multiline: false,
                	culling: {
                    	max: 15
                	}
            	}
	        },
			y: {
            label: 'X and Y accelration values'
        }
	    },
		
	    
	    zoom: {
        	enabled: true
    	},
    legend: {
        show: false
    },
    tooltip: {
        show: false
    }
	});

	//setTimeout(function () {
    //chart.transform('pie');
//}, 1000);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function createGraph4(data) {
	var time = [];
	var S1 = [];
	var S2 = [];

	for (var i = 1; i < data.length -2 ; i++) {
		time.push(data[i][0]);
		S1.push(data[i][8]);
		S2.push(data[i][10]);
	}
	
	
	var chart = c3.generate({
	
		bindto: '#chart4',
		
	    data: {
	        columns: [S1,S2],type :'pie'
	    
    },
    legend: {
        show: false
    },
    tooltip: {
        show: false
    }
	});
}


function createGraph5(data) {
	var time = [];
	var S3 = [];
	var S4 = [];

	for (var i = 1; i < data.length -2 ; i++) {
		time.push(data[i][0]);
		S3.push(data[i][9]);
		S4.push(data[i][11]);
	}


	var chart = c3.generate({
		bindto: '#chart5',
		
	    data: {
	        columns: [S3,S4],type :'pie'
	    },
    legend: {
        show: false
    },
    tooltip: {
        show: false
    }
	});
}

function createGraph6(data) {
	var time = [];
	var S8 = [];
	var S9 = [];
	//var S7 = ["angleZ(Deg)"];

	for (var i = 1; i < data.length -2 ; i++) {
		time.push(data[i][0]);
		S8.push(data[i][8]);
		S9.push(data[i][10]);
		//S7.push(data[i][7]);
	}

	var chart = c3.generate({
		bindto: '#chart6',
		
	    data: {
	        columns: [S8,S9],
			type: 'pie'
	    },
    legend: {
        show: false
    },
    tooltip: {
        show: false
    }
	});
}

function createGraph7(data) {
	var time = [];
	var S8 = [];
	var S9 = [];


	for (var i = 1; i < data.length -2 ; i++) {
		time.push(data[i][0]);
		S8.push(data[i][9]);
		S9.push(data[i][11]);
		//S7.push(data[i][7]);
	}
	var chart = c3.generate({
		bindto: '#chart7',
		
	    data: {
	        columns: [S8,S9]
			,type :'pie'			

	    },
    legend: {
        show: false
    },
    tooltip: {
        show: false
    }
	   
	});
}



parseData(createGraph);
parseData1(createGraph1);
parseData2(createGraph2);
parseData3(createGraph3);
parseData4(createGraph4);
parseData5(createGraph5);
parseData6(createGraph6);
parseData7(createGraph7);