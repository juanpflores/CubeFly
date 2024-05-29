var score = 0;
var highScore = 0; // Variable to track the high score
var scoreText;

var createHud = function () {
	var hudTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

	// Create a Text Block that can display the current score
	scoreText = new BABYLON.GUI.TextBlock();
	scoreText.fontFamily = "Parchment";
	scoreText.color = "white";
	scoreText.fontSize = 48;
	scoreText.verticalAlignment = BABYLON.GUI.TextBlock.VERTICAL_ALIGNMENT_TOP;
	scoreText.horizontalAlignment = BABYLON.GUI.TextBlock.HORIZONTAL_ALIGNMENT_CENTER;
	scoreText.width = 0.5;
	scoreText.height = 0.15;

	updateScoreText();

	hudTexture.addControl(scoreText);
};

var updateScoreText = function () {
	// Updated to display both current score and high score
	scoreText.text = "Score: " + score + " | High Score: " + highScore;
};

var resetScore = function () {
	console.log("Score reset at: " + score);
	score = 0;
	updateScoreText();
};

var addScore = function (points) {
	score += points;
	if (score > highScore) {
		highScore = score; // Update the high score if current score is greater
	}
	updateScoreText();
};
