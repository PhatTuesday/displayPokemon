// Import necessary modules
import { exec } from 'child_process';
import open from 'open';

// Function to open command prompt and display Pokemon image
function displayPokemonImage() {
    // Open command prompt
    exec('start cmd', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error opening command prompt: ${error}`);
            return;
        }
        console.log('Command prompt opened successfully');
    });

    // Open Pokemon image
    open('path/to/pokemon1.png').catch(err => {
        console.error(`Error opening image: ${err}`);
    });
}

// Call the function
displayPokemonImage();