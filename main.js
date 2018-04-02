function toRadians (angle) {
  return angle * (Math.PI / 180);
}

$(document).ready(function() {
	let deg = 0
	let count = 0
	let timer = null
		setInterval(function() {
	 					let y = Math.sin(toRadians(deg))
		 				let x = Math.cos(toRadians(deg))
		 				$('.ball').css({top: y*25+50+'vh', left: '50vw'})
		 				
		 				$('.smallball').each(function(i) {
		 					let aBall = $('.smallball')[i]
		 					let radius = jQuery.data(aBall,'radius')
		 					let aX= x * radius+50
		 					let aY= y * radius+50
		 					$(this).css({left: 50-(i)+'vw', display: 'initial', backgroundColor: 'rgba(30,30,30,.'+(80-i/2)+')'})
		 				})

		 				if (deg % 5 === 0){
		 					$('<div class="smallball" style="top:'+(y*25+50)+'vh"></div>').insertAfter('.ball')
		 					

		 					count++
		 					if(count>53) {
		 						$('.smallball')[53].remove()
		 						count=0
		 					}
		 				}
		 						 				deg+=2.5
		 				deg%=360
 					},50)
			
	})
