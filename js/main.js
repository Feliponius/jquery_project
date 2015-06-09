/*function that executes on startup*/
$(document).ready(function() {
	
	//CSS for button//
	
	var button = {
		display: 'block',
		margin: '5 auto 2',
		padding: 15,
		color: '#666',
		background: '#ffffff',
		fontsize: '12px',
		border: '1px solid #ddd',
		lineheight: 30
	}
	
	//Element Attributes for button//
	
	var buttonAtt = {
		id: 'resetButton',
		value: 'Reset Grid'
	}


	$('<input />').attr('type', 'button').attr(buttonAtt).css(button).prependTo('body');
	
	//startup//

	var size = (1080/16);

	math = Math.floor(938/size);

	loop = 16 * math + .5;

	for(var i = 1; i < loop; i++){
   		$('<div />').addClass('sameDiv').attr('id','div'+i).css({
   			width: size,
   			height: size,
   			background: '#ffffff',
   		}).appendTo('.wrapper');
	}

	//startup hover effect//

	$('.sameDiv').hover(
		function() {
			$(this).css('background-color', 'blue')
		})

	//reset function//

	$('#resetButton').click(function() {
		var sides = prompt('How many sides would you like the grid to have?');

		$('.sameDiv').remove();

		var size = (1080)/sides;

		math = Math.floor(938/size);

		loop = sides * math + .5;

		for (var i=1; i <= loop; i++) {
			$('<div />').addClass('sameDiv').attr('id','div'+i).css({
				width: size, 
				height: size,
				background: '#ffffff',
	   			//margin: '1px',
	   			//'border-radius': '2px'
	   			//border: '1px solid #666'
			}).appendTo('.wrapper');
		}
			//function hover effect//
			$('.sameDiv').hover(
				function() {
					$(this).css('background-color', 'blue')
				})
	})
})


