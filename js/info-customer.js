var customer = 
[
	{
		hoten : "Khách Hàng Thứ Nhất",
		cmt : 206079972	,
		sophong : 102,
		ngayden : "2019-02-05T08:12",
		ngaydi : "2019-02-13:00",
		dienthoai : "0395880787",
		email : "phuochoaileqn@gmail.com"
	},
	{
		hoten : "Khách Hàng Thứ Hai",
		cmt : 206089032,
		sophong : 103,
		ngayden : "2019-02-05T08:12",
		ngaydi : "2019-02-13:00",
		dienthoai : "0395880456",
		email : "phuochoaileqn@gmail.com"
	}
];



var hovaten = document.getElementById('hovaten');
var socmt = document.getElementById('socmt');
var sophong = document.getElementById('sophong');
var ngayden = document.getElementById('ngayden');
var ngaydi = document.getElementById('ngaydi');
var dienthoai = document.getElementById('dienthoai');
var email = document.getElementById('email');
var input = document.getElementById('input');

var btnDelete = document.getElementById('btn-delete');
var btnSearch = document.getElementById('btn-search');

var cmt = 0;

btnSearch.addEventListener('click',function () {
	var checkInput = 0;
	customer.map(obj => {		
		if(obj.cmt === parseInt(input.value) || obj.sophong === parseInt(input.value)) {
			cmt = obj.cmt;
			run();
			document.getElementById('thong-bao').style.opacity = 0;
			checkInput = 1;
			hovaten.innerHTML = '<td class="phai" id="hovaten">' + obj.hoten + '</td>' ;
			socmt.innerHTML = '<td class="phai" id="socmt">' + obj.cmt + '</td>' ;
			sophong.innerHTML = '<td class="phai" id="hovaten">' + obj.sophong + '</td>' ;
			ngayden.innerHTML = '<td class="phai" id="socmt">' + obj.ngayden + '</td>' ;
			ngaydi.innerHTML = '<td class="phai" id="hovaten">' + obj.ngaydi + '</td>' ;
			dienthoai.innerHTML = '<td class="phai" id="socmt">' + obj.dienthoai + '</td>' ;
			email.innerHTML = '<td class="phai" id="hovaten">' + obj.email + '</td>' ;
		}
	});

	if(checkInput === 0) {
		document.getElementById('thong-bao').style.opacity = 1;
		hovaten.innerHTML = '<td class="phai" id="hovaten"></td>' ;
		socmt.innerHTML = '<td class="phai" id="socmt"></td>' ;
		sophong.innerHTML = '<td class="phai" id="hovaten"></td>' ;
		ngayden.innerHTML = '<td class="phai" id="socmt"></td>' ;
		ngaydi.innerHTML = '<td class="phai" id="hovaten"></td>' ;
		dienthoai.innerHTML = '<td class="phai" id="socmt"></td>' ;
		email.innerHTML = '<td class="phai" id="hovaten"></td>' ;
	}
});

btnDelete.addEventListener('click',function () {
	document.getElementById('thong-bao').style.opacity = 0;
	deleteTable();
	input.value = "";
	hovaten.innerHTML = '<td class="phai" id="hovaten"></td>' ;
	socmt.innerHTML = '<td class="phai" id="socmt"></td>' ;
	sophong.innerHTML = '<td class="phai" id="hovaten"></td>' ;
	ngayden.innerHTML = '<td class="phai" id="socmt"></td>' ;
	ngaydi.innerHTML = '<td class="phai" id="hovaten"></td>' ;
	dienthoai.innerHTML = '<td class="phai" id="socmt"></td>' ;
	email.innerHTML = '<td class="phai" id="hovaten"></td>' ;
});