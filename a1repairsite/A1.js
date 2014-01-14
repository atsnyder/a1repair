imgarray1 = new Array();
imgarray1[0] = "tn/welder/welder1.jpg";
imgarray1[1] = "tn/welder/welder2.jpg";
imgarray1[2] = "tn/welder/welder3.jpg";
imgarray1[3] = "tn/welder/welder4.jpg";
curr1 = 0;

imgarray2 = new Array();
imgarray2[0] = "tn/gtrac/gtrac1.jpg";
imgarray2[1] = "tn/gtrac/gtrac2.jpg";
imgarray2[2] = "tn/gtrac/gtrac3.jpg";
imgarray2[3] = "tn/gtrac/gtrac4.jpg";
imgarray2[4] = "tn/gtrac/gtrac5.jpg";
curr2 = 0;

imgarray3 = new Array();
imgarray3[0] = "tn/coronet/coronet1.jpg";
imgarray3[1] = "tn/coronet/coronet2.jpg";
imgarray3[2] = "tn/coronet/coronet3.jpg";
imgarray3[3] = "tn/coronet/coronet4.jpg";
imgarray3[4] = "tn/coronet/coronet5.jpg";
imgarray3[5] = "tn/coronet/coronet6.jpg";
imgarray3[6] = "tn/coronet/coronet7.jpg";
imgarray3[7] = "tn/coronet/coronet8.jpg";
imgarray3[8] = "tn/coronet/coronet9.jpg";
imgarray3[9] = "tn/coronet/coronet10.jpg";
imgarray3[10] = "tn/coronet/coronet11.jpg";
imgarray3[11] = "tn/coronet/coronet12.jpg";
imgarray3[12] = "tn/coronet/coronet13.jpg";
imgarray3[13] = "tn/coronet/coronet14.jpg";
imgarray3[14] = "tn/coronet/coronet15.jpg";
imgarray3[15] = "tn/coronet/coronet16.jpg";
curr3 = 0;

imgarray4 = new Array();
imgarray4[0] = "tn/fifth/fifth1.jpg";
imgarray4[1] = "tn/fifth/fifth2.jpg";
imgarray4[2] = "tn/fifth/fifth3.jpg";
imgarray4[3] = "tn/fifth/fifth4.jpg";
curr4 = 0;

imgarray5 = new Array();
imgarray5[0] = "tn/minitr/minitr1.jpg";
imgarray5[1] = "tn/minitr/minitr2.jpg";
imgarray5[2] = "tn/minitr/minitr3.jpg";
curr5 = 0;

imgarray6 = new Array();
imgarray6[0] = "tn/atrac/atrac1.jpg";
imgarray6[1] = "tn/atrac/atrac2.jpg";
imgarray6[2] = "tn/atrac/atrac3.jpg";
imgarray6[3] = "tn/atrac/atrac4.jpg";
imgarray6[4] = "tn/atrac/atrac5.jpg";
imgarray6[5] = "tn/atrac/atrac6.jpg";
imgarray6[6] = "tn/atrac/atrac7.jpg";
curr6 = 0;

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

function nI5() {
	curr5 = curr5 + 1;
	if (curr5 == imgarray5.length){
		curr5 = 0;
	}
	nextImage(imgarray5, curr5, "saleimg5");
}

function pI5() {
	curr5 = curr5 - 1;
	if (curr5 < 0){
		curr5 = imgarray5.length - 1;
	}
	nextImage(imgarray5, curr5, "saleimg5");
}

function nI6() {
	curr6 = curr6 + 1;
	if (curr6 == imgarray6.length){
		curr6 = 0;
	}
	nextImage(imgarray6, curr6, "saleimg6");
}

function pI6() {
	curr6 = curr6 - 1;
	if (curr6 < 0){
		curr6 = imgarray6.length - 1;
	}
	nextImage(imgarray6, curr6, "saleimg6");
}