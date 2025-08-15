// Define the Hero interface with all the properties we need
// Note: In JavaScript, we don't have interfaces, but we can still follow the same structure

// Create a hero object with your favorite superhero's details
// You can easily change this data to create different hero profiles!
const myHero = {
    name: "Spider-Man",
    power: "Web-slinging & Spider-senses",
    bio: "Peter Parker, the friendly neighborhood Spider-Man! With amazing spider powers, he swings through the city saving lives and fighting crime. His spider-sense warns him of danger, and he can shoot webs to swing between buildings. Always ready to help others, no matter the risk! 🕷️🕸️",
    imageUrl: "🕷️" // You can replace this with an actual image URL later
};

// Function to populate the HTML with hero data
function populateHeroCard(hero) {
    // Get the HTML elements we want to update
    const heroNameElement = document.querySelector('.hero-name');
    const heroPowerElement = document.querySelector('.superpower');
    const heroBioElement = document.querySelector('.hero-bio');
    const heroImageElement = document.querySelector('.hero-image');

    // Check if all elements were found before updating them
    if (heroNameElement && heroPowerElement && heroBioElement && heroImageElement) {
        // Update the hero name
        heroNameElement.textContent = hero.name;
        
        // Update the superpower (keep the lightning emojis for decoration)
        heroPowerElement.innerHTML = `⚡ ${hero.power} ⚡`;
        
        // Update the hero bio
        heroBioElement.textContent = hero.bio;
        
        // Update the hero image
        // If it's an emoji, use textContent; if it's a URL, create an img element
        if (hero.imageUrl.startsWith('http')) {
            // For actual image URLs, create an img element
            heroImageElement.innerHTML = '';
            const img = document.createElement('img');
            img.src = hero.imageUrl;
            img.alt = `${hero.name} image`;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '50%';
            heroImageElement.appendChild(img);
        } else {
            // For emojis, just update the text content
            heroImageElement.textContent = hero.imageUrl;
        }
        
        console.log(`✅ Hero card populated with ${hero.name}'s data!`);
    } else {
        console.error('❌ Could not find all required HTML elements');
    }
}

// Function to calculate a hero's power level based on strength and speed
function calculatePowerLevel(strength, speed) {
    // Calculate power level: (strength * 2) + (speed * 3)
    const powerLevel = (strength * 2) + (speed * 3);
    return powerLevel;
}

// Function to update the power stats in the UI
function updatePowerStats(strength, speed, powerLevel) {
    // Update strength value and bar
    const strengthValue = document.getElementById('strength-value');
    const strengthFill = document.getElementById('strength-fill');
    if (strengthValue && strengthFill) {
        strengthValue.textContent = strength;
        strengthFill.style.width = `${(strength / 10) * 100}%`;
    }
    
    // Update speed value and bar
    const speedValue = document.getElementById('speed-value');
    const speedFill = document.getElementById('speed-fill');
    if (speedValue && speedFill) {
        speedValue.textContent = speed;
        speedFill.style.width = `${(speed / 10) * 100}%`;
    }
    
    // Update power level value
    const powerLevelValue = document.getElementById('power-level-value');
    if (powerLevelValue) {
        powerLevelValue.textContent = powerLevel;
    }
}

// Function to create a new hero (useful for switching between different heroes)
function createNewHero(name, power, bio, imageUrl) {
    return {
        name: name,
        power: power,
        bio: bio,
        imageUrl: imageUrl
    };
}

// Example of how to create and use a different hero
function switchToDifferentHero() {
    const ironMan = createNewHero(
        "Iron Man",
        "Genius Intelligence & Advanced Technology",
        "Tony Stark, the brilliant inventor who built a suit of armor to save his life and now uses it to protect the world! With his incredible intelligence and cutting-edge technology, he creates amazing gadgets and flies around in his powerful Iron Man suit. A true genius who never gives up! 🤖✨",
        "🤖"
    );
    
    populateHeroCard(ironMan);
}

// Wait for the HTML page to fully load before running our code
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Hero Profile Card is ready!');
    
    // Populate the card with our default hero
    populateHeroCard(myHero);
    
    // Calculate and display Spider-Man's power level
    const spiderManStrength = 8; // Spider-Man has high strength (scale 1-10)
    const spiderManSpeed = 9;    // Spider-Man is very fast (scale 1-10)
    const spiderManPowerLevel = calculatePowerLevel(spiderManStrength, spiderManSpeed);
    
    // Update the UI with power stats
    updatePowerStats(spiderManStrength, spiderManSpeed, spiderManPowerLevel);
    
    console.log(`🕷️ ${myHero.name}'s Power Level Calculation:`);
    console.log(`   Strength: ${spiderManStrength}/10`);
    console.log(`   Speed: ${spiderManSpeed}/10`);
    console.log(`   Power Level: ${spiderManPowerLevel} (${spiderManStrength} × 2 + ${spiderManSpeed} × 3)`);
    console.log(`   💪 ${myHero.name} is a powerful hero!`);
    
    // Optional: Add a button to switch heroes (uncomment the lines below if you want this feature)
    // const switchButton = document.createElement('button');
    // switchButton.textContent = 'Switch to Iron Man';
    // switchButton.style.cssText = 'margin-top: 20px; padding: 10px 20px; border-radius: 15px; border: none; background: linear-gradient(45deg, #ff9a9e, #fecfef); color: white; cursor: pointer; font-family: inherit;';
    // switchButton.addEventListener('click', switchToDifferentHero);
    // document.querySelector('.hero-card')?.appendChild(switchButton);
});
