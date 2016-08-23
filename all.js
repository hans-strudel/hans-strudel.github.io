LANDED = true;
var scrollTotal = 0;

function init(){
	
	document.getElementById("bg").style.left = "-" + (Math.floor(Math.random()*70) + 20) + "px";
	document.getElementById("bg").style.top = "-" + (Math.floor(Math.random()*70) + 20) + "px";
	document.getElementsByTagName("a")[0].addEventListener('click', transfer, false);
	document.getElementsByTagName("a")[1].addEventListener('click', transfer, false);
	document.getElementsByTagName("a")[2].addEventListener('click', transfer, false);
	document.onmousewheel = function(e){
		scrollTotal += e.deltaY;
		if (scrollTotal <= 500 && scrollTotal >= -500){
			bgColor = '#FFFFC2';
		} else if (scrollTotal < 1500 && scrollTotal > 500){
			bgColor = '#C2FFFF';
		}
		
		document.getElementById('bg').style.backgroundColor = bgColor;
	}

}
function transfer(to){
	console.log(to.toElement.style);
	links = document.getElementById("links").getElementsByTagName("a");
	if (LANDED) {
		document.getElementById("bg").style.top = "-200%";
		document.getElementById("bg").style.opacity = 0;
		document.getElementById("circ").style.border = '0px';
		document.getElementById("circ").style.top = "70%";
		LANDED = false;
		} else {
			for (i=0;i<links.length;i++){
				links[i].style.color = "#727272";
			}
		}
		to.toElement.style.color = "#161616";
		var elem = String(to.target.text);
		document.getElementById('PROJECTS').style.opacity = 0;
		document.getElementById('PROJECTS').style.display = 'none';
		document.getElementById('INFO').style.opacity = 0;
		document.getElementById('INFO').style.display = 'none';
		document.getElementById('CONTACT').style.opacity = 0;
		document.getElementById('CONTACT').style.display = 'none';
		
		document.getElementById(elem).style.display = 'inline-block';
		document.getElementById(elem).style.opacity = '1';
		console.log(elem);

	
}

document.addEventListener("DOMContentLoaded", init, false );