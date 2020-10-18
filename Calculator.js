function act(num){	
	let win = window.frames["label"];
	let cont = win.document.body.innerHTML;
	let character = cont[cont.length-1];
	let operator = ["+","-","*","/","=",".","+/-"];
	let bracket = ["(",")"];
	let i;
	let j;
	for(i = 0; i<operator.length; i++)
	{
		for(j = 0; j<operator.length; j++)
		{
			if(num==operator[i] && character==operator[j])
				return;
		}
	}
	for(i = 0; i<bracket.length; i++)
	{
		for(j = 0; j<bracket.length; j++)
		{
			if(num==bracket[i] && character==bracket[j])
				return;
		}
	}
	if(num=='') cont=''
	cont = cont+num;
	win.document.write(cont);
	win.document.close();
}
let frame = document.getElementById('label');
frame.onload = function () 
{
	let body = frame.contentWindow.document.querySelector('body');
	body.style.color = 'red';
	body.style.fontSize = '20px';
	body.style.lineHeight = '20px'; 
} 
function solve()
{
	let win = window.frames["label"];
	let cont = win.document.body.innerHTML;
	let x = eval(cont);
	win.document.write(x);
	win.document.close();
}
