function runScenario() {
	
	getIP().then(ip => {
	  if (ip) {
		showInstructions(3, `Hello ${ip}!`);

		const playerClass = getPlayerIndex(ip, 6);
		showInstructions(4, `You belong to Player Class: ${playerClass}.`);

	  } else {
		console.log("Connection Error!");
		showInstructions(3, "Hello Player!");
	  }
	});

	showInstructions(5, "We run some last minute checks for you...");
	showInstructions(6, "This may take a while...");
	showInstructions(50, "Redirection in 10 seconds!");
	timedRedirection(60, "./html/giraffe.html");
}