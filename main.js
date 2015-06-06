/*function that executes on startup*/
$(document).ready(function() {
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

	var buttonAtt = {
		id: 'resetButton',
		value: 'Reset Grid'
	}


	$('<input />').attr('type', 'button').attr(buttonAtt).css(button).appendTo('.Wrapper');
	
	for(var i = 1; i<=256; i++){
   		$('<div />').addClass('sameDiv').attr('id','div'+i).appendTo('.wrapper');
	}

	$('#resetButton').click(function() {
		var sides = prompt('How many sides would you like the grid to have?');

		$('.sameDiv').remove();

		var size = (960)/sides-2;

		for (var i=1; i <= sides*sides; i++) {
			$('<div />').addClass('sameDiv').attr('id','div'+i).css({width: size, height: size}).appendTo('.wrapper');
		}

			$('.sameDiv').hover(
		function() {
			$(this).css('background-color', 'blue')
		})

	})

	$('.sameDiv').hover(
		function() {
			$(this).css('background-color', 'blue')
		})
})


