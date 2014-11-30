$(document).ready(function(){
	
	// Question 4
	// IMPLEMENT "SHOW MODAL" WHEN "CLICK ON LOGIN BUTTON FROM MAIN PAGE" HERE
	$("#FindOutMoreButton").click(function(){

		// window.scrollBy(0,735);
		$("html, body").animate({ scrollTop: 709 }, "slow");
  		return false;
    // }
		
	})
	$("#FindOutMoreButton").hover(function(){

		$("#FindOutMoreButton").css("box-shadow", "0px 0px 15px 5px rgba(255, 255, 190, .75)")
  		return false;
		
	})

	$("#Name").hover(function(){

		$("#FindOutMoreButton").css("box-shadow", "0px 0px 0px 0px rgba(0, 0, 0, 0)")
  		return false;
		
	})

	$("#background1").hover(function(){

		$("#FindOutMoreButton").css("box-shadow", "0px 0px 0px 0px rgba(0, 0, 0, 0)")
  		return false;
		
	})



	$("#sideBarButton").click(function(){
		
		if ($("#sideBarPopOut").hasClass("sideBarPopOut-active")){
			$("#sideBarPopOut").removeClass("sideBarPopOut-active");
			setTimeout(function(){
				$("#sideBarPopOut").hide();
			}, 400);
		} else {
			$("#sideBarPopOut").show();
			setTimeout(function(){
			$("#sideBarPopOut").addClass("sideBarPopOut-active");
			}, 0); 
		}
		// $("#sideBarPopOut").hide();
	})
	$("#modal-overlay").click(function(){
		$("#modal-container").hide();
	})


	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON LOGIN BUTTON FROM MODAL BOX" HERE

	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON CANCEL BUTTON FROM MODAL BOX" HERE
	
	
	// Question 5
	// IMPLEMENT "HIDE MODAL" WHEN "CLICK ON MODAL OVERLAY" HERE
	
});