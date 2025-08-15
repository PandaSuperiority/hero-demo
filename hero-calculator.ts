// Hero Power Level Calculator
// This program asks the user for a hero's stats and calculates their power level

// Function to get user input and validate it
function getUserInput(): { name: string; strength: number; speed: number } | null {
    // Step 1: Ask the user for the hero's name
    const heroName = prompt("What is your hero's name?");
    
    // Check if the user cancelled the prompt or entered an empty name
    if (!heroName || heroName.trim() === "") {
        alert("❌ Hero name cannot be empty! Please try again.");
        return null;
    }
    
    // Step 2: Ask for strength and convert to number
    const strengthInput = prompt(`What is ${heroName}'s strength? (1-10)`);
    
    // Check if user cancelled or entered invalid strength
    if (!strengthInput) {
        alert("❌ Strength input cancelled!");
        return null;
    }
    
    // Convert strength input to a number
    const strength = Number(strengthInput);
    
    // Validate that strength is a valid number between 1-10
    if (isNaN(strength) || strength < 1 || strength > 10) {
        alert(`❌ Invalid strength! Please enter a number between 1 and 10. You entered: ${strengthInput}`);
        return null;
    }
    
    // Step 3: Ask for speed and convert to number
    const speedInput = prompt(`What is ${heroName}'s speed? (1-10)`);
    
    // Check if user cancelled or entered invalid speed
    if (!speedInput) {
        alert("❌ Speed input cancelled!");
        return null;
    }
    
    // Convert speed input to a number
    const speed = Number(speedInput);
    
    // Validate that speed is a valid number between 1-10
    if (isNaN(speed) || speed < 1 || speed > 10) {
        alert(`❌ Invalid speed! Please enter a number between 1 and 10. You entered: ${speedInput}`);
        return null;
    }
    
    // Return the validated hero data
    return {
        name: heroName.trim(),
        strength: strength,
        speed: speed
    };
}

// Function to calculate power level using the formula: (strength * 2) + (speed * 3)
function calculatePowerLevel(strength: number, speed: number): number {
    const powerLevel = (strength * 2) + (speed * 3);
    return powerLevel;
}

// Function to display the hero's power level with a nice message
function displayPowerLevel(heroName: string, strength: number, speed: number, powerLevel: number): void {
    // Create a detailed message showing the calculation
    const message = `
🦸‍♂️ HERO POWER LEVEL CALCULATION 🦸‍♂️

Hero Name: ${heroName}
Strength: ${strength}/10
Speed: ${speed}/10

Power Level Formula: (${strength} × 2) + (${speed} × 3)
Power Level Calculation: ${strength * 2} + ${speed * 3}

🔥 ${heroName}'s Power Level is: ${powerLevel} 🔥

${getPowerLevelDescription(powerLevel)}
    `;
    
    // Display the result in the console
    console.log(message);
    
    // Also show an alert for the user
    alert(`${heroName}'s power level is: ${powerLevel}`);
}

// Function to give a description based on power level
function getPowerLevelDescription(powerLevel: number): string {
    if (powerLevel >= 40) {
        return "🌟 This hero is incredibly powerful! A true legend!";
    } else if (powerLevel >= 30) {
        return "💪 This hero is very strong! They can handle most challenges!";
    } else if (powerLevel >= 20) {
        return "👍 This hero has good power! They're ready for action!";
    } else if (powerLevel >= 10) {
        return "🤔 This hero has some power, but could use more training!";
    } else {
        return "😅 This hero might need some superpower lessons!";
    }
}

// Main function that runs the entire program
function main(): void {
    console.log("🚀 Welcome to the Hero Power Level Calculator! 🚀");
    console.log("This program will help you calculate your hero's power level.");
    console.log("Power Level = (Strength × 2) + (Speed × 3)");
    console.log("================================================");
    
    // Get user input (hero name, strength, and speed)
    const heroData = getUserInput();
    
    // Check if we got valid data from the user
    if (heroData) {
        // Calculate the power level using our formula
        const powerLevel = calculatePowerLevel(heroData.strength, heroData.speed);
        
        // Display the results
        displayPowerLevel(heroData.name, heroData.strength, heroData.speed, powerLevel);
        
        console.log("✅ Power level calculation completed successfully!");
    } else {
        console.log("❌ Program ended due to invalid input.");
    }
    
    console.log("================================================");
    console.log("Thanks for using the Hero Power Level Calculator! 👋");
}

// Start the program when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Add a button to the page to run the calculator
    const calculatorButton = document.createElement('button');
    calculatorButton.textContent = '🧮 Calculate Hero Power Level';
    calculatorButton.style.cssText = `
        margin: 20px auto;
        padding: 15px 30px;
        font-size: 1.2em;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        color: white;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        font-family: inherit;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        display: block;
    `;
    
    // Add hover effect
    calculatorButton.addEventListener('mouseenter', () => {
        calculatorButton.style.transform = 'translateY(-2px)';
        calculatorButton.style.boxShadow = '0 7px 20px rgba(0, 0, 0, 0.3)';
    });
    
    calculatorButton.addEventListener('mouseleave', () => {
        calculatorButton.style.transform = 'translateY(0)';
        calculatorButton.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    });
    
    // Run the calculator when button is clicked
    calculatorButton.addEventListener('click', main);
    
    // Add the button to the hero card
    const heroCard = document.querySelector('.hero-card');
    if (heroCard) {
        heroCard.appendChild(calculatorButton);
    }
    
    console.log("🎯 Hero Power Level Calculator is ready! Click the button to start!");
});

// Export functions for use in other files (optional)
export { getUserInput, calculatePowerLevel, displayPowerLevel, main };
