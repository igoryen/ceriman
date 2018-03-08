$(document).ready( function () {
	console.log("realtor.js");

	$(".barbara").hover( 
		function() {
			$( this ).css( "background", "rgba(248, 249, 249, 1)");

			$( this ).find("img").css({
				'-webkit-transform' : 'rotate(360deg)',
				'-moz-transform'    : 'rotate(360deg)',
				'-ms-transform'     : 'rotate(360deg)',
				'-o-transform'      : 'rotate(360deg)',
				'transform'         : 'rotate(360deg)'
			})

			// $( this ).find(".carol").effect('shake', 
			// 	{ 	
			// 		direction: "up",
			// 		distance: 3,
			// 		times: 1
			// 	}, 100);
				 
		}, 

		function() {
			$( this ).css( "background", "rgba(255, 255, 255, 0)");

			$( this ).find("img").css({
				'-webkit-transform' : 'rotate(0deg)',
				'-moz-transform'    : 'rotate(0deg)',
				'-ms-transform'     : 'rotate(0deg)',
				'-o-transform'      : 'rotate(0deg)',
				'transform'         : 'rotate(0deg)'
			})
		}
	);

});