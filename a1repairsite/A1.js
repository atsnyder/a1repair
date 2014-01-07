imgarray1 = new Array();
imgarray1[0] = "images/shop.jpg";
imgarray1[1] = "images/img2.jpg";
imgarray1[2] = "images/img3.jpg";
curr1 = 0;

function nextImage(imgarr, curr, currid) {
	var img = document.getElementById(currid);
	img.src = imgarr[curr];
	return false;
}

function nI1() {
	curr1 = curr1 + 1;
	if (curr1 == imgarray1.length){
		curr1 = 0;
	}
	nextImage(imgarray1, curr1, "saleimg1");
}

function pI1() {
	curr1 = curr1 - 1;
	if (curr1 < 0){
		curr1 = imgarray1.length - 1;
	}
	nextImage(imgarray1, curr1, "saleimg1");
}

function nI2() {
	curr2 = curr2 + 1;
	if (curr2 == imgarray2.length){
		curr2 = 0;
	}
	nextImage(imgarray2, curr2, "saleimg2");
}

function pI2() {
	curr2 = curr2 - 1;
	if (curr2 < 0){
		curr2 = imgarray2.length - 1;
	}
	nextImage(imgarray2, curr2, "saleimg2");
}

function nI3() {
	curr3 = curr3 + 1;
	if (curr3 == imgarray3.length){
		curr3 = 0;
	}
	nextImage(imgarray3, curr3, "saleimg3");
}

function pI3() {
	curr3 = curr3 - 1;
	if (curr3 < 0){
		curr3 = imgarray3.length - 1;
	}
	nextImage(imgarray3, curr3, "saleimg3");
}

function nI4() {
	curr4 = curr4 + 1;
	if (curr4 == imgarray4.length){
		curr4 = 0;
	}
	nextImage(imgarray4, curr4, "saleimg4");
}

function pI4() {
	curr4 = curr4 - 1;
	if (curr4 < 0){
		curr4 = imgarray4.length - 1;
	}
	nextImage(imgarray4, curr4, "saleimg4");
}