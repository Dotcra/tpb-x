// remove ads
var a=document.getElementsByTagName("iframe");
for(var i in a)
	if(a[i].style)
		a[i].style.display="none";

// highlight 2017 new movies
var year = (new Date()).getFullYear();
var title = document.getElementsByClassName('detLink');
for(var i in title){
	if( title[i].style && title[i].innerHTML.includes(year)){
		title[i].style.color = 'red';
		title[i].style.fontWeight = 'bold';
	}
}
