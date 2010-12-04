var currentRotation=null;

function checkOrientAndLocation(){
	if(currentRotation != window.orientation){
		setOrientation();
	}
}

function setOrientation(){
	switch(window.orientation){
		case 0:
			orient = 'portrait';
			break;
		case 90:
			orient = 'landscape';
			break;
		case -90:
			orient = 'landscape';
			break;
	}
	currentRotation = window.orientation;
	document.body.setAttribute("orient",orient);
	setTimeout(scrollTo,0,0,1);
}

$().ready(function(){
	setTimeout(scrollTo,0,0,1);
	setInterval(checkOrientAndLocation,1000);
	$('#notes').flick();
});