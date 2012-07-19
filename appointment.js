$(document).ready(function(){ 
$('#getdata-button').live('click', function(){
//alert("Clicked"); 
$.ajax({

            type: "GET",

            url: "http://api.informulate.com/api/appointments"

        }).done(function(data) { 
  //alert("JDATA");
            $.each(data, function(i, val) {		
               	$('#appointmentList').append('<li>' +
					'<img src="http://www.newwinechurch.com/wp-content/uploads/2011/06/Sunrise.jpg' + '" height="40px" width="60px"/>' +
					'<h4>' + val.name + ' ' + '</h4>' +
					'<p>' + val.date.date + '</p>' +
					'<div style="height:20px;overflow:hidden" class="desc"> '+val.Description+'</div></li>');
 			if (i==9)
			return false;
                    
            });
			
                  //location.reload();
        });

 });
var showmore = false;
$('.desc').live("click",function() {
//alert("Hi");
    if (showmore) {
        $(this).animate({height:'20px'}); 
    }
    else {
        $(this).animate({height:'100%'});
    }
    showmore = !showmore;
});


}); 
