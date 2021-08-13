function $(id){
	return document.getElementById(id);
}
var i=0;
var timer=null;
window.onload=function(){
	$("start").onclick=function(){
		timer=setInterval(function(){
		i++;
		$("sec").innerHTML=double(i%60);
		$("min").innerHTML=double(parseInt(i/60)%60);
		$("hour").innerHTML=double(parseInt(i/3600));
	},1000);
	}
	$("pause").onclick=function(){
		clearInterval(timer);
	}
	$("reset").onclick=function(){
	clearInterval(timer);
	i=0;
	$("sec").innerHTML="00";
	$("min").innerHTML="00";
	$("hour").innerHTML="00";
	}
  }
 
function double(n){
	if(n<10){
		return "0"+n;
	}else{
		return n;
	}
}