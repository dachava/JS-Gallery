var index=0;
var previousBtn= document.getElementsByClassName('previousBtn')[0];
previousBtn.addEventListener('click',goPrev);
function goPrev(){	
	 
	index--;
	if (index===-1){
		index=cantItems-1;
		
	}
	itemList.style.left=(-	index*900)+'px';

	console.log(index);
}

var nextBtn= document.getElementsByClassName('nextBtn')[0];
nextBtn.addEventListener('click',goNext);
function goNext(){	
	index++;
	if (index===cantItems){
		index=0;
	}
	
		itemList.style.left=(-index*900)+'px';

	

	console.log(index);
}

var itemList= document.getElementsByClassName('itemsList')[0];
console.log(itemList);

var cantItems=itemList.children.length;
console.log(cantItems);







