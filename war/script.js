

/*var person1 = {name: 'Marvin', age: 42, size: '2xM'};
var person2 = {name: 'Zaphod', age: 42000000000, size: '1xS'};

var sayHello = function(){
    alert('Hello, ' + this.name);
};

var sayGoodbye = function(){
    alert('Goodbye, ' + this.name);
};

sayHello.call(this,person1);
sayGoodbye();*/



var arr = [];
var temp=[];
var namearr=[];
 

	function constructObj(name, number, email, city) {
		  this.name    =  name;
		  this.number  =  number;
		  this.email   =  email;
     	  this.city    =  city; 
	}
	
	console.log("added something");
	console.log("last line deleted");

	function load() {
		
		document.getElementById("name").focus();
		
	}
	   
	function nameValidate() {	    	
	    
	     document.getElementById("display").innerHTML = "";
	
		 var username = document.getElementById("name").value;
		 var n = /^[A-Za-z ]+$/;
         var a = namearr.indexOf(username);
	     if(a==-1){		
			document.getElementById("disname").innerHTML = "No name found";		   
	       }else{
	    	
			document.getElementById("disname").innerHTML = "";	
			document.getElementById("number").value =  arr[a].number;
	        document.getElementById("email").value  =  arr[a].email;
	        document.getElementById("city").value   =  arr[a].city; }
		 
	 
	 if (!username || username == "") {
		 
		document.getElementById("disname").innerHTML = "please enter name";
		document.getElementById("name").focus();
		return false;
		
	 } else  if(!username.match(n)) {
		 
		document.getElementById("disname").innerHTML = "please enter name";
		document.getElementById("name").focus();
		return false;
		
	}else{
	
	   document.getElementById("disname").innerHTML = "";
	   document.getElementById("number").focus();
	   return true;}
}

	function numberValidate() {
	
	
		var number = document.getElementById("number").value;
		var p = /^[0-9]+$/;
	    if (!number || number == "" || number.length != 10) {
		
		document.getElementById("disnumber").innerHTML = "please enter number";
		document.getElementById("number").focus();
		return false;
		} else if (!number.match(p)) {
		
		document.getElementById("disnumber").innerHTML = "please enter number";
		document.getElementById("number").focus();
		return false;

	} 	
	  document.getElementById("email").focus();
	  document.getElementById("disnumber").innerHTML = "";
	  return true;
}

	function emailValidate() {

	   var email   =   document.getElementById("email").value;
	   var atpos   =   email.indexOf("@");
	   var dotpos  =   email.lastIndexOf(".");
	
	   if (!email || email == "") {
		
		document.getElementById("disemail").innerHTML = "please enter email ID";
		document.getElementById("email").focus();
		return false;
	
	   } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
		document.getElementById("disemail").innerHTML = "please enter valid email";
		document.getElementById("email").focus();
		return false;
	}
	   
	document.getElementById("city").focus();
	document.getElementById("disemail").innerHTML = "";
	return true;
}

	function cityValidate() {

		var city   =    document.getElementById("city").value;
		var n      =    /^[A-Za-z ]+$/;
	
		if (!city || city == "") {
			
			document.getElementById("discity").innerHTML = "please enter city name";
			document.getElementById("city").focus();
			return false;
			
		} else if (!city.match(n)) {
			
			document.getElementById("discity").innerHTML = "please enter city name";
			document.getElementById("city").focus();
			return false;
		}
	
		document.getElementById("save").focus();
		document.getElementById("discity").innerHTML = "";
		return true;
   }
	
	function clearData() {
		var name     =   document.getElementById("name").value;
		var number   =   document.getElementById("number").value;
		var email    =   document.getElementById("email").value;
		var city     =   document.getElementById("city").value;
	
		if(!name || name=="")
		{	
			document.getElementById("name").focus();
		}else if(!number||number==""){
			document.getElementById("number").focus();
		}else if(!email||email==""){
			document.getElementById("email").focus();
		}else if(!city||city==""){
			document.getElementById("city").focus();
			}else{

		document.getElementById("name").value   = "";
		document.getElementById("number").value = "";
		document.getElementById("email").value  = "";
		document.getElementById("city").value   = "";
			}
    }

	function arrayStore() {

		document.getElementById("display").innerHTML = "" ;
		
		var name     =   document.getElementById("name").value;
		var number   =   document.getElementById("number").value;
		var email    =   document.getElementById("email").value;
		var city     =   document.getElementById("city").value;
	
		if(!name || name=="")
		{	
			document.getElementById("name").focus();
		}else if(!number||number==""){
			document.getElementById("number").focus();
		}else if(!email||email==""){
			document.getElementById("email").focus();
		}else if(!city||city==""){
			document.getElementById("city").focus();
			}else{
			
			
		arr.push(new constructObj(name, number, email, city));
		clearData();
		window.confirm("Data's are registered succesfully");
		temp.push(name);
		namearr.push(name);
		return true;
			
			}}


	function print() {
	
		if (arr.length == 0) {
			document.getElementById("display").innerHTML = "No details Found please enter the details ";
			document.getElementById("name").focus();

	
		} else {
			
			document.getElementById("display").innerHTML = "";
			
			   var name     =   document.getElementById("name").value;
			   var number   =   document.getElementById("number").value;
			   var email    =   document.getElementById("email").value;
			   var city     =   document.getElementById("city").value;	
			   

			var name    =  "";
			var number  =  "";
			var email   =  "";
			var city    =  "";
	
			for (var i = 0; i < arr.length; i++) 
	         {
				name   +=  arr[i].name + "<br>";
				number +=  arr[i].number + "<br>";
				email  +=  arr[i].email + "<br>";
				city   +=  arr[i].city + "<br>";
				
				document.getElementById("tname").innerHTML   = "NAME";
				document.getElementById("tnumber").innerHTML = "NUMBER";
				document.getElementById("temail").innerHTML  = "EMAIL ";
				document.getElementById("tcity").innerHTML   = "CITY";
				
				document.getElementById("name").focus();
			}
			
			document.getElementById("displayName").innerHTML   =  name;
			document.getElementById("displayNumber").innerHTML =  number;
			document.getElementById("displayEmail").innerHTML  =  email;
			document.getElementById("displayCity").innerHTML   =  city;
			clearData();
			 
			}
	}

	function  dropdown(){
	  
		   for(var i=0;i<temp.length;i++){
		   var datalist   = document.getElementById("datalistname");
		   var option = document.createElement('option');
		   option.value=temp[i];
		   datalist.appendChild(option);
		   }
		   
		   temp.pop(name);
	} 
  
    


  