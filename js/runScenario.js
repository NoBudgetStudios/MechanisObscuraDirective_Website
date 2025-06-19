function runScenario() {
	
	getIP().then(ip => {
	  if (ip) {
		showInstructions(3, `Greetings Player (${ip})!`);

		const playerClass = getPlayerIndex(ip, 6);
		showInstructions(4, `You have been selected for Player Class: #${playerClass}.`);

	  } else {
		console.log("Connection Error!");
		showInstructions(3, "Greetings Player!");
		showInstructions(4, `You have been selected for Player Class: #-1.`);
	  }
	});

	showInstructions(5, "We run some last minute background checks for you...");
	showInstructions(6, "This may take a while...");
	showInstructions(20, "Redirection in 10 seconds.");
	timedRedirection(30, "./colors.html");
}