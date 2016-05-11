LANDED = true;

function init(){
	
	document.getElementById("bg").style.left = "-" + (Math.floor(Math.random()*70) + 20) + "px";
	document.getElementById("bg").style.top = "-" + (Math.floor(Math.random()*70) + 20) + "px";
	document.getElementsByTagName("a")[0].addEventListener('click', transfer, false);
	document.getElementsByTagName("a")[1].addEventListener('click', transfer, false);
	document.getElementsByTagName("a")[2].addEventListener('click', transfer, false);

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
	document.getElementById('PROJECTS').style.display = 'none';
	document.getElementById('INFO').style.display = 'none';
	document.getElementById('CONTACT').style.display = 'none';
	document.getElementById(elem).style.display = 'inline';
	console.log(elem);
	
}

document.addEventListener("DOMContentLoaded", init, false );