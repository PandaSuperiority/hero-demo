// Define the Hero interface with all the properties we need
interface Hero {
    name: string;
    power: string;
    bio: string;
    imageUrl: string;
}

// Create a hero object with your favorite superhero's details
// You can easily change this data to create different hero profiles!
const myHero: Hero = {
    name: "Spider-Man",
    power: "Web-slinging & Spider-senses",
    bio: "Peter Parker, the friendly neighborhood Spider-Man! With amazing spider powers, he swings through the city saving lives and fighting crime. His spider-sense warns him of danger, and he can shoot webs to swing between buildings. Always ready to help others, no matter the risk! 🕷️🕸️",
    imageUrl: "🕷️" // You can replace this with an actual image URL later
};

// Function to populate the HTML with hero data
function populateHeroCard(hero: Hero): void {
    // Get the HTML elements we want to update
    const heroNameElement = document.querySelector('.hero-name') as HTMLElement;
    const heroPowerElement = document.querySelector('.superpower') as HTMLElement;
    const heroBioElement = document.querySelector('.hero-bio') as HTMLElement;
    const heroImageElement = document.querySelector('.hero-image') as HTMLElement;

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

// Function to create a new hero (useful for switching between different heroes)
function createNewHero(name: string, power: string, bio: string, imageUrl: string): Hero {
    return {
        name: name,
        power: power,
        bio: bio,
        imageUrl: imageUrl
    };
}

// Example of how to create and use a different hero
function switchToDifferentHero(): void {
    const ironMan: Hero = createNewHero(
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
    
    // Optional: Add a button to switch heroes (uncomment the lines below if you want this feature)
    // const switchButton = document.createElement('button');
    // switchButton.textContent = 'Switch to Iron Man';
    // switchButton.style.cssText = 'margin-top: 20px; padding: 10px 20px; border-radius: 15px; border: none; background: linear-gradient(45deg, #ff9a9e, #fecfef); color: white; cursor: pointer; font-family: inherit;';
    // switchButton.addEventListener('click', switchToDifferentHero);
    // document.querySelector('.hero-card')?.appendChild(switchButton);
});

// Export the interface and functions so they can be used in other files if needed
export { Hero, createNewHero, populateHeroCard };
