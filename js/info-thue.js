var renderTable = document.getElementById('xethue');
function run () {
	var string = ""
	list.map(obj => {
		if(obj.cmt === cmt) {
			var data = renderXeThue(obj);
			string += data;			
		}
	});
	renderTable.innerHTML = string;
}

function deleteTable () {
	renderTable.innerHTML = "";
}


function renderXeThue(obj) {
	var stringtr = "";
	var i = 1;
	for(var key in obj){
		stringtr += '<td class=\"cot2'+i+'\">'+ obj[key] +'</td>';
		i++;
	}
	stringtr = '<tr>' + stringtr + '</tr>';
	return stringtr;
}