 /*
      Test 01 - Part B

      Author: Hengameh Khajehpour 301122261

      Date:  February 2021

   */
 
 function validate() {
      
	if( document.deliveryAddress.firstD.value == "" ) {
	   alert( "Please provide your first name for delivery!" );
	   document.deliveryAddress.firstD.focus() ;
	   return false;
	}
	if( document.deliveryAddress.lastD.value == "" ) {
	   alert( "Please provide your last name for delivery!" );
	   document.deliveryAddress.lastD.focus() ;
	   return false;
	}
	if( document.deliveryAddress.addD.value == "" ) {
	   
	   alert( "Please provide your address for delivery!" );
	   document.deliveryAddress.addD.focus() ;
	   return false;
	}
	if( document.deliveryAddress.genD.value == "" ) {
		alert( "Please provide your gender for delivery!" );
		document.deliveryAddress.genD.focus() ;
		return false;
	}
	if( document.deliveryAddress.phoneD.value == "" ) {
	
		alert( "Please provide your phone number for delivery!" );
		document.deliveryAddress.phoneD.focus() ;
		return false;
	}
	if( document.deliveryAddress.yearD.value == "" ) {
		alert( "Please provide year that you prefer for delivary!" );
	   document.deliveryAddress.yearD.focus() ;
	   return false;
	}
	if( document.billAddress.firstB.value == "" ) {
		alert( "Please provide your first name for billing!" );
		document.billAddress.firstB.focus() ;
		return false;
	 }
	 if( document.billAddress.lastB.value == "" ) {
		alert( "Please provide your last name for billing!" );
		document.billAddress.lastB.focus() ;
		return false;
	 }
	 if( document.billAddress.addB.value == "" ) {
		
		alert( "Please provide your address for billing!" );
		document.billAddress.addB.focus() ;
		return false;
	 }
	 if( document.billAddress.genB.value == "" ) {
		 alert( "Please provide your gender for billing!" );
		 document.billAddress.genB.focus() ;
		 return false;
	 }
	 if( document.billAddress.phoneB.value == "" ) {
	 
		 alert( "Please provide your phone number for billing!" );
		 document.billAddress.phoneB.focus() ;
		 return false;
	 }
	 if( document.billAddress.yearB.value == "" ) {
		 alert( "Please provide year that you prefer for billing!!" );
		document.billAddress.yearB.focus() ;
		return false;
	 }

	return( alert("🌷 Thank you for your order 🌷") );
}



 var same = document.getElementById("check");

   if (same.addEventListener) {
     same.addEventListener("click", copyBillingAddress, false);
   } else if (same.attachEvent)  {
     same.attachEvent("onclick", copyBillingAddress);
   }


   function copyBillingAddress() {
	var deliveryInputElements = document.querySelectorAll("#deliveryAddress input");
	var billingInputElements = document.querySelectorAll("#billAddress input");
	if (document.getElementById("check").checked) {
	   for (var i = 0; i < deliveryInputElements.length; i++) {
		billingInputElements[i + 1].value = deliveryInputElements[i].value;
	   }
	   document.querySelector("#billAddress select").value = document.querySelector("#deliveryAddress select").value;
	} else {
	   for (var i = 0; i < deliveryInputElements.length; i++) {
		billingInputElements[i + 1].value = "";
	   }
	   document.querySelector("#billAddress select").selectedIndex = -1;
	}
 }




			