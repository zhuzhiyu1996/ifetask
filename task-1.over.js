// JavaScript Document
/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-30 17:37:24
 * @version $Id$
 */
 var times=0;
 function changecolor(){
 	var headcolor=document.getElementById("head");
 	headcolor.style.background=times%2==0?'white':'linear-gradient(to bottom,#4e00b7,#a82df0)';
 	headcolor.style.color=times%2==0?'#4e00b7':'white';
 	document.getElementById('span1-1').style.width=times%2==0?'122px':'0';
 	document.getElementById('span2').style.width=times%2==0?'0':'120px';
 	times++;
 }
 function changewidth() {
 	//document.getElementById('span1').style.display=times%2==0?'none':'block';
 	//document.getElementById('span2').style.display=times%2==0?'none':'block';
 	//times++;
 }

