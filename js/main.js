$(document).ready(function() {

	const $progressbar1 = $('#progressbar1');
	let progressbarValue = 0;

	$('button[id^=progressbarInc]').click(function(event) {
		if (progressbarValue === 100) {
			// console.log('skip');
			return;
		}

		const buttonValue = +this.value;

		if ((progressbarValue + buttonValue) <= 100) {
			progressbarValue += buttonValue;
		} else {
			progressbarValue = 100;
		}
		// console.log(progressbarValue);
		$progressbar1.width(`${progressbarValue}%`);
		$progressbar1.text(`${progressbarValue}%`);
	});

});
