function runInitiation() {
	
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

	showInstructions(3, "We run some last minute background checks for you...");
	showInstructions(4, "This may take a while...");
	showInstructions(5, "Redirection will occur soon.");
	timedRedirection(10, "./main_menu.html");
}