const selectPlayer = document.querySelectorAll(".select-player");
const selectTheme = document.querySelectorAll(".select-theme");
const selectSize = document.querySelectorAll(".select-size");
const startBtn = document.querySelector(".start-js");

const setupContainer = document.querySelector(".setup-container");
const gameContainer = document.querySelector(".game-container");

const gameContainer6x6 = document.querySelector(".game-container-6x6");
const gameContainer4x4 = document.querySelector(".game-container-4x4");

const singlePlayerContainer = document.querySelector(".single-player-mode");
const multiPlayerContainer = document.querySelector(".multi-player-mode");

const rounds4x4 = document.querySelectorAll(".game-container-4x4 >.round");
const rounds6x6 = document.querySelectorAll(".game-container-6x6 >.round");

const restart = document.querySelectorAll(".restart-js");
const newGame = document.querySelectorAll(".newGame-js");
const wl_overlay = document.querySelector(".overlay");
const wl_playerTable = document.querySelector(".players-table");
const wl_title = document.querySelector(".wl-title-js");

let multiPlayerBox;
const players = [];
const timeLabel = document.querySelector(".time-js");
const moves = document.querySelector(".moves-js");
let isDraw;
let setupBtns = [selectPlayer, selectTheme, selectSize];
let gameConfig = {};

let shortArray = [1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 6, 5, 4, 3, 2, 1];
let longArray = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 18, 17, 16, 15,
	14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
];
let iconsShortArray = [
	'<i class="icon-weather-aquarius"></i>',
	'<i class="icon-weather-aries"></i>',
	'<i class="icon-weather-cancer"></i>',
	'<i class="icon-weather-capricorn"></i>',
	'<i class="icon-weather-cloud"></i>',
	'<i class="icon-weather-cloud-drop"></i>',
	'<i class="icon-weather-cloud-lightning"></i>',
	'<i class="icon-weather-cloud-snowflake"></i>',
	'<i class="icon-weather-aquarius"></i>',
	'<i class="icon-weather-aries"></i>',
	'<i class="icon-weather-cancer"></i>',
	'<i class="icon-weather-capricorn"></i>',
	'<i class="icon-weather-cloud"></i>',
	'<i class="icon-weather-cloud-drop"></i>',
	'<i class="icon-weather-cloud-lightning"></i>',
	'<i class="icon-weather-cloud-snowflake"></i>',
];
let iconsLongArray = [
	'<i class="fa-solid fa-basketball"></i>',
	'<i class="fa-solid fa-football"></i>',
	'<i class="fa-solid fa-snowflake"></i>',
	'<i class="fa-solid fa-moon"></i>',
	'<i class="fa-solid fa-star"></i>',
	'<i class="fa-solid fa-car"></i>',
	'<i class="fa-solid fa-flask"></i>',
	'<i class="fa-solid fa-sun"></i>',
	'<i class="fa-solid fa-basketball"></i>',
	'<i class="fa-solid fa-football"></i>',
	'<i class="fa-solid fa-snowflake"></i>',
	'<i class="fa-solid fa-moon"></i>',
	'<i class="fa-solid fa-star"></i>',
	'<i class="fa-solid fa-car"></i>',
	'<i class="fa-solid fa-flask"></i>',
	'<i class="fa-solid fa-sun"></i>',
	'<i class="fa-solid fa-dollar-sign"></i>',
	'<i class="fa-solid fa-sterling-sign"></i>',
	'<i class="fa-solid fa-sterling-sign"></i>',
	'<i class="fa-solid fa-dollar-sign"></i>',
	'<i class="fa-solid fa-hashtag"></i>',
	'<i class="fa-solid fa-hashtag"></i>',
];

let timeLabelId;
let counterMoves = 0;
let currentMoves = [];
let currentPlayer = 0;

shuffle(shortArray);
shuffle(longArray);

// ---------Implementing event listeners
setupBtns.forEach((buttons) => {
	buttons.forEach((btn) => {
		btn.addEventListener("click", addActiveClass.bind(null, btn, buttons));
	});
});
selectPlayer.forEach((player) => {
	player.addEventListener("click", () => {
		gameConfig.playerNum = player.value;
	});
});
selectTheme.forEach((themeType) => {
	themeType.addEventListener("click", () => {
		gameConfig.theme = themeType.value;
	});
});
selectSize.forEach((size) => {
	size.addEventListener("click", () => {
		gameConfig.gameSize = size.value;
		gameConfig.pairs = (+size.value * +size.value) / 2;
	});
});
startBtn.addEventListener("click", gameStart);
restart.forEach((btn) => btn.addEventListener("click", restartGame));
newGame.forEach((btn) => btn.addEventListener("click", reloadGame));

//-------------Implementing single player mode
function activatingSinglePlayer() {
	singlePlayerContainer.classList.contains("d-none")
		? openOrCloseMultiplayer()
		: null;
	timeLabel.textContent = "";
	moves.textContent = 0;
	let time = 0;
	let tick = () => {
		time++;
		let min = String(Math.trunc(time / 60)).padStart(2, "0");
		let sec = String(time % 60).padStart(2, "0");
		timeLabel.textContent = `${min}:${sec}`;
	};
	tick();
	timeLabelId = setInterval(tick, 1000);
}

//-------------Implementing single player mode
function activatingMultiPlayer() {
	multiPlayerContainer.classList.contains("d-none")
		? openOrCloseMultiplayer()
		: null;

	multiPlayerContainer.innerHTML = "";

	for (let i = 1; i <= gameConfig.playerNum; i++) {
		let current = i === 1 ? "current-player" : "";
		playerBox = `<div class="player-box ${current}  row">
            <h1 class="player-${i}">Player-${i}</h1><div class="score score-js">0</div></div>`;

		multiPlayerContainer.insertAdjacentHTML("beforeend", playerBox);
		multiPlayerBox = document.querySelectorAll(".player-box");

		players.push({
			name: `Player ${i}`,
			moves: 0,
			score: 0,
		});
	}
}

function openOrCloseMultiplayer() {
	singlePlayerContainer.classList.toggle("d-none");
	multiPlayerContainer.classList.toggle("d-none");
}
// ----------------- Implementing 4x4 game size
function gameSize4x4() {
	gameContainer4x4.classList.remove("d-none");
	gameContainer6x6.classList.add("d-none");
	let i = 0;
	rounds4x4.forEach((round) => {
		round.classList = "";
		round.classList.add("round");
		round.innerHTML = shortArray[i];
		i++;
	});
	gameContainer.classList.remove("d-none");
}
// ----------------- Implementing 6x6 game size

function gameSize6x6() {
	gameContainer4x4.classList.add("d-none");
	gameContainer6x6.classList.remove("d-none");
	let i = 0;
	rounds6x6.forEach((round) => {
		round.classList = "";
		round.classList.add("round");
		round.textContent = longArray[i];
		i++;
	});
	gameContainer.classList.remove("d-none");
}
// ------randomizing array
function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
}
//----------Adding active class
function addActiveClass(btn, buttons) {
	buttons.forEach((selectBtn) => {
		selectBtn.classList.remove("active");
	});
	btn.classList.add("active");
}
// --------Function for starting game
function gameStart() {
	if (gameConfig.gameSize && gameConfig.theme && gameConfig.playerNum) {
		setupContainer.classList.add("d-none");
		if (gameConfig.theme == "icon") {
			longArray = iconsLongArray;
			shortArray = iconsShortArray;
		}
		gameConfig.gameSize == 6 ? gameSize6x6() : gameSize4x4();

		gameConfig.playerNum == 1
			? activatingSinglePlayer()
			: activatingMultiPlayer();
	}
}

//-----------Restarting game
function restartGame() {
	clearTimer();
	gameStart();
	shuffle(shortArray);
	shuffle(longArray);
	counterMoves = 0;
	wl_overlay.classList.add("d-none");
	currentMoves = [];
}

function clearTimer() {
	clearInterval(timeLabelId);
}

// works when new game clicked
function reloadGame() {
	wl_overlay.classList.add("d-none");
	clearTimer();
	gameConfig.playerNum = gameConfig.theme = gameConfig.gameSize = "";
	gameStart();
	gameContainer.classList.add("d-none");
	setupContainer.classList.remove("d-none");
	removeActiveClasses();
	counterMoves = 0;
	currentMoves = [];
}

// works when new game clicked and it will delate all game config
function removeActiveClasses() {
	setupBtns.forEach((buttons) => {
		buttons.forEach((btn) => {
			btn.classList.remove("active");
		});
	});
}

// Implementing game rules for 6x6 single player
function clickingBtn() {
	+gameConfig.playerNum > 1
		? clickedMultiPlayer.apply(this)
		: clickedSinglePlayer.apply(this);
}

rounds6x6.forEach((roundBtn) =>
	roundBtn.addEventListener("click", clickingBtn)
);

// Implementing game rules for 4x4 single player

rounds4x4.forEach((roundBtn) => {
	roundBtn.addEventListener("click", clickingBtn);
});

// game rules for single player
function doesExist() {
	let gameSize = gameConfig.gameSize == 4 ? rounds4x4 : rounds6x6;

	let sum = Array.from(gameSize).reduce(
		(sum, cur) => (cur.classList.contains("current") ? ++sum : sum),
		0
	);
	return sum > 1 ? false : true;
}

function clickedSinglePlayer() {
	if (
		currentMoves[0] !== this &&
		!this.classList.contains("found") &&
		doesExist()
	) {
		currentMoves.push(this);
		this.classList.add("current");
		counterMoves = +moves.textContent;
		if (
			currentMoves.length === 2 &&
			currentMoves[0].textContent === currentMoves[1].textContent
		) {
			currentMoves[0].classList.add("found");
			currentMoves[1].classList.add("found");

			singlePlayerWl();
			removeCurrent();
		} else if (currentMoves.length === 2) {
			setTimeout(() => {
				removeCurrent();
			}, 1000);
		}
	}
}
function singlePlayerWl() {
	gameConfig.pairs--;
	gameConfig.pairs === 0 ? finishGameSP() : null;
}
function finishGameSP() {
	wl_overlay.classList.remove("d-none");
	wl_playerTable.innerHTML = "";

	wl_title.textContent = "You did it!";
	let playerMoves = `<div class="player-table-box  row">
		<h3 class="player-name">Moves Taken</h3>
		<h2 class="player-score">${counterMoves}</h2>
	</div>`;
	let playerTime = `<div class="player-table-box  row">
		<h3 class="player-name">Time Elapsed</h3>
		<h2 class="player-score">${timeLabel.textContent}</h2>
	</div>`;
	clearTimer();
	wl_playerTable.insertAdjacentHTML("afterbegin", playerTime);
	wl_playerTable.insertAdjacentHTML("afterbegin", playerMoves);
}
function removeCurrent() {
	currentMoves[0].classList.remove("current");
	currentMoves[1].classList.remove("current");
	currentMoves = [];
	moves.textContent = ++counterMoves;
}

// game rules for multiPlayer

function clickedMultiPlayer() {
	if (
		currentMoves[0] !== this &&
		!this.classList.contains("found") &&
		doesExist()
	) {
		currentMoves.push(this);
		this.classList.add("current");

		if (
			currentMoves.length === 2 &&
			currentMoves[0].innerHTML === currentMoves[1].innerHTML
		) {
			findingEqualBtn();
		} else if (currentMoves.length === 2) {
			setTimeout(movingPlayer, 1000);
		}
	}
}

function findingEqualBtn() {
	currentMoves[0].classList.add("found");
	currentMoves[1].classList.add("found");

	multiPlayerBox[currentPlayer].classList.add("current-player");

	multiPlayerBox[currentPlayer].querySelector(".score").textContent =
		+multiPlayerBox[currentPlayer].querySelector(".score").textContent + 1;

	gameConfig.pairs--;

	players[currentPlayer].score++;
	setTimeout(() => {
		movingPlayer();
		gameConfig.pairs == 0 ? finishGame() : null;
	}, 2000);
}
function movingPlayer() {
	currentMoves[0].classList.remove("current");
	currentMoves[1].classList.remove("current");
	currentMoves = [];

	multiPlayerBox.forEach((box) => box.classList.remove("current-player"));

	currentPlayer++;

	if (currentPlayer === +gameConfig.playerNum) currentPlayer = 0;
	multiPlayerBox[currentPlayer].classList.add("current-player");
}
function finishGame() {
	//showing result menu
	wl_overlay.classList.remove("d-none");
	wl_playerTable.innerHTML = "";

	//sorting array by highest score
	players.sort((a, b) => a.score - b.score);

	//implementing winner property to highest score owner
	players[players.length - 1].winner = "(Winner)";

	//finding other winners

	players.forEach((val, i) => {
		if (
			val.score == players[players.length - 1].score &&
			val !== players[players.length - 1]
		) {
			players[i].winner = "(Winner)";
			isDraw = "Draw";
		}
	});

	renderingResult();
}
function renderingResult() {
	for (let i = 0; i < players.length; i++) {
		let player = players[i];

		playerTable = `<div class="player-table-box winner row">
		<h3 class="player-name">${player.name} ${
			player.winner ? player.winner : ""
		}</h3>
		<h2 class="player-score">${player.score} Pairs</h2>
	</div>`;

		wl_playerTable.insertAdjacentHTML("afterbegin", playerTable);
	}
	wl_title.textContent = isDraw
		? "Draw"
		: `${players[players.length - 1].name} Wins!`;
}
