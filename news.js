// Sample text containing multiple profiles
const i = `1/9\n2/9\n3/9\n4/9\n5/9\n6/9\n7/9\n8/9\n9/9\nRecently Active\nGrace\n23\n🇺🇸13613 kilometers away\nDon’t ask me how I’m using my degree 😅\nOpen Profile\nNOPE\nLIKE\n1/9\n2/9\n3/9\n4/9\n5/9\n6/9\n7/9\n8/9\n9/9\nJewel\n26\n🇺🇸15760 kilometers away\nlittle weird, kinda nerdy, totally lovable.\nsuper into making genuine friendships butopen to whatever if the connection is theremessage me first bc i’m shy and not good at pick up lines😂\nOpen Profile\nNOPE\nLIKE\n1/9\n2/9\n3/9\n4/9\n5/9\n6/9\n7/9\n8/9\n9/9\nRin\n22\nOpen Profile\nNOPE\nLIKE\nREWIND\nNOPE\nSUPER LIKE\n0\nLIKE\nBOOST\n0\nShow\nNope\nLike\nOpen Profile\nClose Profile\nSuper Like\nNext Photo`;
// Replace line breaks, carriage returns, and spaces with '>'
const ii = i.replace(/[\r\n\s]+/g, '>');
//step 2 define pattern for removing, numbers, text,
const regex = /[1-9]\/9/g;
const iii = ii.replace(regex, '>');
//regex to replace all numbers before from 1-9/9
const regexToRemoveBetweenGreaterThanSigns = />[^>]*>/gs;
const iv = iii.replace(regexToRemoveBetweenGreaterThanSigns, '>');
//const patterns = ['>Recently Active>', '>Open Profile>', '>NOPE>', '>LIKE>', '>REWIND>', '>SUPER LIKE>', '>0>', '>BOOST>', '>Show>', '>Nope>', '>Like>', '>Open Profile>', '>Close Profile>', '>Super Like>', '>Next Photo>'];
//regex to replace all text between >>


//console.log(iv);
// Step 3: Clean up the profiles and remove empty entries
// Define a regular expression to match '>' characters
const regexToReplaceGreaterThan = />/g;
// Split the string into individual profiles using '>'
const profiles = iv.split('>');

// Define variables to store extracted data
let activity = '';
let name = '';
let age = '';
let location = '';
let bio = '';
// Define a function to extract data for each profile
function extractDataForProfile(profile) {
  if (profile === 'Recently Active') {
    activity = 'Recently Active';
  } else if (profile.startsWith('🇺🇸')) {
    location = profile;
  } else if (!isNaN(profile)) {
    age = profile;
  } else if (profile !== 'Open Profile' && profile !== 'NOPE' && profile !== 'LIKE') {
    name = profile;
  } else {
    bio += ' ' + profile;
  }
}

// Process each profile
for (const profile of profiles) {
  extractDataForProfile(profile);
}

// Log the extracted data
console.log('Activity:', activity);
console.log('Name:', name);
console.log('Age:', age);
console.log('Location:', location);
console.log('Bio:', bio);
// Use the regex to replace '>' with a blank (empty space)
const v = profile.replace(regexToReplaceGreaterThan, ' ');
console.log(v);
// Step 4: Define patterns for splitting

//const profiles = iv.split(new iii(`(${patterns.join('|')})`, 'g'));




