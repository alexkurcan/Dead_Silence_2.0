let playerName = "";
const introSection = document.getElementById("intro");
const gameSection = document.getElementById("game");
const restartSection = document.getElementById("restart-section");
const textElement = document.getElementById("story-text");
const choicesElement = document.getElementById("choices");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const usernameInput = document.getElementById("username");
const imageElement = document.getElementById("story-image");
const backgroundMusic = document.getElementById("background-music");

// Story Variables
let currentStep = 0;
const backMusic = new Audio("background-music.mp3");
backMusic.loop = true;

// Start Game Function
function startGame() {
    playerName = usernameInput.value.trim() || "Player";
    introSection.style.display = "none";
    gameSection.style.display = "block";
    restartSection.style.display = "none";
    showStory();
}

// Restart Game Function
function restartGame() {
    introSection.style.display = "block";
    gameSection.style.display = "none";
    restartSection.style.display = "none"
    usernameInput.value = "";
    currentStep = 0; // Reset the current step
}

// Show Story Function
function showStory() {
    let storyText = "";
    let choices = [];
    let imgSrc = "";

    switch (currentStep) {
        case 0:
            storyText = `You receive a cryptic voicemail from Ivy: "They're coming... the silence...".`;
            imgSrc = "start.jpg";
            choices = [
                { text: "Go to Ivy's Apartment", next: 1 },
                { text: "Check the Archives", next: 2 }
            ];
            break;
        case 1:
            storyText = `Ivy's apartment is empty. You notice a strange symbol etched into the wall. Suddenly, you hear a noise from the bathroom. What do you do?`;
            imgSrc = "aparment_symbol.jpg";
            choices = [
                { text: "Investigate the noise", next: 3 },
                { text: "Leave immediately", next: 4 }
            ];
            break;
        case 2:
            storyText = `You rush to the archives, filled with old records. A newspaper headline catches your eye: "Mysterious Disappearances Linked to Cult". You feel a chill down your spine.`;
            imgSrc = "archives.jpg";
            choices = [
                { text: "Research the cult further", next: 5 },
                { text: "Leave and call for help", next: 6 }
            ];
            break;
        case 3:
            storyText = `You open the bathroom door to find Ivy, pale and trembling. "I need your help!" she whispers. "They're coming for me!"`;
            imgSrc = "start.jpg";
            choices = [
                { text: "Take her and run", next: 7 },
                { text: "Stay and confront the danger", next: 8 }
            ];
            break;
        case 4:
            storyText = `As you reach the street, you notice shadows moving in the distance. It's too late; they've found you.`;
            imgSrc = "street.jpg";
            choices = [{ text: "Ending: The Darkness Takes You", next: null }];
            break;
        case 5:
            storyText = `You uncover the cult's plans to summon a dark entity. Realizing the danger, you decide to warn the authorities.`;
            imgSrc = "start.jpg";
            choices = [
                { text: "Alert the police", next: 9 },
                { text: "Confront the cult alone", next: 10 }
            ];
            break;
        case 6:
            storyText = `No one believes you. As you leave the archives, a hooded figure follows you, whispering dark secrets.`;
            imgSrc = "figure.jpg";
            choices = [{ text: "Ending: No One Will Listen", next: null }];
            break;
        case 7:
            storyText = `You escape, but Ivy is still in danger. You have to save her before it's too late.`;
            imgSrc = "start.jpg";
            choices = [
                { text: "Return to Ivy's apartment", next: 1 },
                { text: "Call for backup", next: 6 }
            ];
            break;
        case 8:
            storyText = `You confront the danger, and in the process, discover that Ivy is part of the cult. Betrayed, you fight back.`;
            imgSrc = "start.jpg";
            choices = [
                { text: "Fight Ivy", next: 11 },
                { text: "Try to reason with her", next: 12 }
            ];
            break;
        case 9:
            storyText = `The police arrive just in time. They take the cult members into custody, but Ivy is nowhere to be found.`;
            imgSrc = "start.jpg";
            choices = [{ text: "Ending: The Lost One", next: null }];
            break;
        case 10:
            storyText = `You decide to confront the cult alone. In the dark of the night, you face the leader, but the cult has grown powerful.`;
            imgSrc = "start.jpg";
            choices = [{ text: "Ending: A Fight Against Shadows", next: null }];
            break;
        case 11:
            storyText = `Ivy pleads for you to join her, claiming the cult can grant you power. You must make a choice.`;
            imgSrc = "start.jpg";
            choices = [
                { text: "Join Ivy", next: 13 },
                { text: "Refuse and escape", next: 14 }
            ];
            break;
        case 12:
            storyText = `You escape, but you can never forget what you learned. The silence echoes in your mind.`;
            imgSrc = "start.jpg";
            choices = [{ text: "Ending: The Echoing Silence", next: null }];
            break;
        case 13:
            storyText = `You join Ivy, becoming a part of something greater, but the cost is your freedom.`;
            imgSrc = "start.jpg";
            choices = [{ text: "Ending: Bound by Silence", next: null }];
            break;
        case 14:
            storyText = `You escape, but the darkness is never far behind. You are always watching over your shoulder.`;
            imgSrc = "start.jpg";
            choices = [{ text: "Ending: Forever Watching", next: null }];
            break;
        default:
            break;
    }
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowUp") {
            alert("BOOM BOOM BOOM BOOM BOOM, you get a cookie! 🍪");
        }
    });    
    
    // Update the HTML elements
    textElement.textContent = storyText;
    imageElement.src = imgSrc;
    choicesElement.innerHTML = "";

    for (let choice of choices) {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => {
            if (choice.next === null) {
                // Show restart section if ending is reached
                gameSection.style.display = "none";
                restartSection.style.display = "block";
            } else {
                currentStep = choice.next;
                showStory();
            }
        };
        choicesElement.appendChild(button);
    }
}

// Event Listeners
startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", restartGame);
