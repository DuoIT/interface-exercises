var datacar = [
	{
		ma: 'C01',
		ten: '118i High',
		namsx: 2018,
		hang: 'BMW',
		hinhanh: '<img style="width: 100%; " src="./img/bmw1.png">',
		gia: 1000000
	},
	{
		ma: 'C02',
		ten: 'X5 xDrive35i 3.0L',
		namsx: 2017,
		hang: 'BMW',
		hinhanh: '<img style="width: 100%; " src="./img/bmw2.png">',
		gia: 4000000
	}
]

var datamoto = [
	{
		ma: 'M01',
		ten: 'SPRINT 125 IGET ABS',
		namsx: 2018,
		hang: 'Vespa',
		hinhanh: '<img style="width: 100%; " src="./img/vespa1.png">',
		gia: 1000000
	},
	{
		ma: 'M02',
		ten: 'Super Cub C125',
		namsx: 2018,
		hang: 'Honda',
		hinhanh: '<img style="width: 100%; " src="./img/cup1.png">',
		gia: 2000000
	}

]

var databike = [
	{
		ma: 'B01',
		ten: 'Bianchi',
		namsx: 2018,
		hang: 'QT',
		hinhanh: '<img style="width: 100%;" src="./img/dap1.png">',
		gia: 3000000
	},
	{
		ma: 'B02',
		ten: 'Twitter',
		namsx: 2018,
		hang: 'QT',
		hinhanh: '<img style="width: 100%; " src="./img/dap2.png">',
		gia: 1500000
	}
]

var radioOto = document.getElementById('rdo-oto');
var radioXeMay = document.getElementById('rdo-xemay');
var radioXeDap = document.getElementById('rdo-xedap');
var tableTTXe = document.getElementById('tt-xe');
loadXeOto();
radioOto.addEventListener('change', loadXeOto);
radioXeMay.addEventListener('change', loadXeMay);
radioXeDap.addEventListener('change', loadXeDap);

function loadXeOto () {
	var dataxe = render(datacar);
		tableTTXe.innerHTML = dataxe;
		clickButton();
}

function loadXeMay () {
	var dataxe = render(datamoto);
		tableTTXe.innerHTML = dataxe;
		clickButton();
}

function loadXeDap () {
	var dataxe = render(databike);
		tableTTXe.innerHTML = dataxe;
		clickButton();
}

function render (arr) {
	var stringtr = "";
	arr.map(obj => {
		var i = 1;
		for(key in obj) {
			stringtr += '<td class=\"cot1'+i+'\">'+ obj[key] +'</td>';
			i++;
		}
		stringtr += '<td class=\"cot1'+i+'\"><button href = "#" id="choose">Chọn</button></td>';
		stringtr = '<tr class="onRow">' + stringtr + '</tr>';
		return stringtr;
	});
	return stringtr;
}

var list = [];
function clickButton () {
	$('#tt-xe tr').click(function (e) {
		var maxe = $(this).closest('tr').find('td:nth-child(1)').text();
	    var tenxe = $(this).closest('tr').find('td:nth-child(2)').text();
	    var namsx = $(this).closest('tr').find('td:nth-child(3)').text();
		var hang = $(this).closest('tr').find('td:nth-child(4)').text();
	    var gia = $(this).closest('tr').find('td:nth-child(6)').text();
		// $('#bill').click(function (e) {
			var xemTT = document.getElementById('bill');
			var ngaythue = document.getElementById('ngaythue');
			var ngaytra = document.getElementById('ngaytra');
			var thanhtien = 0;

		    xemTT.addEventListener('click', function () {
				var giothue = (new Date(ngaytra.value) - new Date(ngaythue.value))/1000/60/60;
			 	thanhtien = giothue*gia;
				var show = document.getElementById('show-bill');
				show.value = thanhtien + ' VNĐ';
		    });
		    
		    var thue = document.getElementById('btn-thue');
		    thue.addEventListener('click', function () {		    	
		    	var tam = {};
		    	tam = {cmt: cmt, maxe:maxe, tenxe: tenxe, gia:gia, ngaythue: ngaythue.value, ngaytra: ngaytra.value, thanhtien: thanhtien}
		    	if(cmt != 0)
		    	{
		    		list.push(tam);    	
		    		run();
		    	}
		    });
		});   
	// })
}