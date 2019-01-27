function validate() {
      
         if(document.forms["contactMe"]["firstName"].value == "" ) {                    // Checking if User Inputted first Name
            alert( "Please provide your First name! " );
            return false;
          }
         else if(document.forms["contactMe"]["lastName"].value == "" ) {                // Checking if User Inputted last Name
            alert( "Please provide your Last name!" );
            return false;
          }
		 else if(document.forms["contactMe"]["phone"].value == "" ||                     // Checking if User Inputted Phone Number in 10digit format
				isNaN(document.forms["contactMe"]["phone"].value) ||
				document.forms["contactMe"]["phone"].value.length != 10) {
            alert( "Please provide your Phone Number in the Format: xxxxxxxxxx" );
            return false;
          }
        /*  else if(document.getElementById("contact").value) == ""){                   // Not needed as Catering is already default
              alert("Please Select Reason forInquiry!")
              return false;
          }*/
          else if (document.getElementById("info").value == ""){                        // Check if User Inputter Additional Information 
              alert("Please Enter Additional Information!")
              return false;
          }
		  else if ( ((document.getElementById("choice1").checked) == false) && (        // Check if User has Pick Options
			(document.getElementById("choice2").checked) == false) ){
            alert( "Please select if you have been to Dev's before!" );
            return false;
          }
		  else if (	(                                                                    // Check if User has Pick Options
					(document.getElementById("monday").checked) == false)&&
					((document.getElementById("tuesday").checked) == false)&&
					((document.getElementById("wednesday").checked) == false)&&
					((document.getElementById("thursday").checked) == false)&&
					((document.getElementById("friday").checked) == false))
					{
				alert("Please Pick Date(s)")
			return false;
					}	
			else {
				alert("Your Information has been recorded. Thank you!")                // If all good, display Information has been provided
			}

         return false;
      }


// Check functions to check if user has checked options on the Bootstrap items
function check1() {
	document.getElementById("choice1").checked = true;
	}
	
function check2() {
	document.getElementById("choice2").checked = true;
	}
	
	

function checkM() {
	document.getElementById("monday").checked = true;
}
function checkT() {
	document.getElementById("tuesday").checked = true;
}
function checkW() {
	document.getElementById("wednesday").checked = true;
}
function checkTh() {
	document.getElementById("thursday").checked = true;
}
function checkF() {
	document.getElementById("friday").checked = true;
}
	