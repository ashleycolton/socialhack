// Sample text containing multiple \/
const i = `1/9\n2/9\n3/9\n4/9\n5/9\n6/9\n7/9\n8/9\n9/9\nRecently Active\nGrace\n23\n🇺🇸13613 kilometers away\nDon’t ask me how I’m using my degree 😅\nOpen Profile\nNOPE\nLIKE\n1/9\n2/9\n3/9\n4/9\n5/9\n6/9\n7/9\n8/9\n9/9\nJewel\n26\n🇺🇸15760 kilometers away\nlittle weird, kinda nerdy, totally lovable.\nsuper into making genuine friendships butopen to whatever if the connection is theremessage me first bc i’m shy and not good at pick up lines😂\nOpen Profile\nNOPE\nLIKE\n1/9\n2/9\n3/9\n4/9\n5/9\n6/9\n7/9\n8/9\n9/9\nRin\n22\nOpen Profile\nNOPE\nLIKE\nREWIND\nNOPE\nSUPER LIKE\n0\nLIKE\nBOOST\n0\nShow\nNope\nLike\nOpen Profile\nClose Profile\nSuper Like\nNext Photo`;
// and spaces with '>'
const ii = i.replace(/[\s]+/g, '>');

//step 2 define pattern for removing, numbers, text,
//const regex = /[1-9]\/9/g;
const regex = /(1\/9|2\/9|3\/9|4\/9|5\/9|6\/9|7\/9|8\/9|9\/9)/g;
const iii = ii.replace(regex, '>');

//console iii is fine
//regex to replace all numbers before from 1-9/9
//const regexToRemoveBetweenGreaterThanSigns = />[^>]*>/gs;
//problem line is this delete between >0> it deleted all the numbers.
//console.log(iii);

//regex to replace all text between >>
//const iv = iii.replace(regexToRemoveBetweenGreaterThanSigns, '>');

//we fucked up the words at the front before this, probably has to do with space
//should be solved

//console.log(iv);
// Step 3: Clean up the v and remove empty entries
// Convert all text between '>' to space
const regexToReplaceGreaterThan = />/g;
let activity = '';
let name = '';
let age = '';
let location = '';
let bio = '';
let profile = '';
//Step 3.5 need to clean before splitting 不分解怎么删格子？ 现在倒变成删空格，那词语不是连在一起了吗

// Step 4: Split the string into individual profiles using '>' and remove blanks
const profiles = iii.split('>');
//console.log(profiles);
// Use the regex to replace '>' with a blank (empty space) for a single profile
const v = profiles[profiles.length - 1].replace(regexToReplaceGreaterThan, ' ');
console.log(iii);
console.log(v);

//now it lacks step 69 whtie space cleaning before it need to be split into individual profiles
const regex69 = v.replace(/[\s]+/g, '');
const regexToRemoveEmpty = /^[0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]*$/;
//console.log(regex69);
//after cleaning it's 777 cleaning empty arrays
const vii = regex69.split('>');
//
//console.log(vii);

const viii = vii.filter(item => !item.match(regexToRemoveEmpty));

//console.log(viii);


//console.log(profiles);

// Define variables to store extracted data for each profile
const extractedData = [];

// Define a function to extract data for each profile
function extractDataForProfile(profile) {
  const profileData = {}; // Create an object to store data for this profile
  const flagRegex = /🇦🇫|🇦🇽|🇦🇱|🇩🇿|🇦🇸|🇦🇩|🇦🇴|🇦🇮|🇦🇶|🇦🇬|🇦🇷|🇦🇲|🇦🇼|🇦🇺|🇦🇹|🇦🇿|🇧🇸|🇧🇭|🇧🇩|🇧🇧|🇧🇾|🇧🇪|🇧🇿|🇧🇯|🇧🇲|🇧🇹|🇧🇴|🇧🇦|🇧🇼|🇧🇷|🇮🇴|🇻🇬|🇧🇳|🇧🇬|🇧🇫|🇧🇮|🇨🇻|🇰🇭|🇨🇲|🇨🇦|🇮🇨|🇨🇴|🇰🇲|🇨🇬|🇨🇩|🇨🇷|🇭🇷|🇨🇺|🇨🇼|🇨🇾|🇨🇿|🇩🇰|🇩🇯|🇩🇲|🇩🇴|🇪🇨|🇪🇬|🇸🇻|🇬🇶|🇪🇷|🇪🇪|🇪🇹|🇪🇺|🇫🇰|🇫🇴|🇫🇯|🇫🇮|🇫🇷|🇬🇫|🇵🇫|🇹🇫|🇬🇦|🇬🇲|🇬🇪|🇩🇪|🇬🇭|🇬🇮|🇬🇷|🇬🇱|🇬🇩|🇬🇵|🇬🇺|🇬🇹|🇬🇬|🇬🇳|🇬🇼|🇬🇾|🇭🇹|🇭🇳|🇭🇰|🇭🇺|🇮🇸|🇮🇳|🇮🇩|🇮🇷|🇮🇶|🇮🇪|🇮🇲|🇮🇱|🇮🇹|🇯🇲|🇯🇵|🎌|🇯🇪|🇯🇴|🇰🇿|🇰🇪|🇰🇮|🇰🇭|🇰🇬|🇱🇦|🇱🇻|🇱🇧|🇱🇸|🇱🇷|🇱🇾|🇱🇮|🇱🇹|🇱🇺|🇲🇴|🇲🇰|🇲🇬|🇲🇼|🇲🇾|🇲🇻|🇲🇱|🇲🇹|🇲🇭|🇲🇷|🇲🇺|🇾🇹|🇲🇽|🇫🇲|🇲🇩|🇲🇨|🇲🇳|🇲🇪|🇲🇸|🇲🇦|🇲🇿|🇲🇲|🇳🇦|🇳🇷|🇳🇵|🇳🇱|🇳🇨|🇳🇿|🇳🇮|🇳🇪|🇳🇬|🇳🇺|🇳🇫|🇰🇵|🇲🇵|🇳🇴|🇴🇲|🇵🇰|🇵🇼|🇵🇸|🇵🇦|🇵🇬|🇵🇾|🇵🇪|🇵🇭|🇵🇳|🇵🇱|🇵🇹|🇵🇷|🇶🇦|🇷🇪|🇷🇴|🇷🇺|🇷🇼|🇼🇸|🇸🇲|🇸🇦|🇸🇳|🇷🇸|🇸🇨|🇸🇱|🇸🇬|🇸🇽|🇸🇰|🇸🇮|🇸🇧|🇸🇴|🇿🇦|🇰🇷|🇸🇸|🇪🇸|🇱🇰|🇧🇱|🇸🇭|🇰🇳|🇱🇨|🇵🇲|🇻🇨|🇸🇩|🇸🇷|🇸🇪|🇨🇭|🇸🇾|🇸🇹|🇸🇿|🇹🇼|🇹🇯|🇹🇿|🇹🇭|🇹🇱|🇹🇬|🇹🇰|🇹🇴|🇹🇹|🇹🇳|🇹🇷|🇹🇲|🇹🇨|🇹🇻|🇺🇬|🇺🇦|🇦🇪|🇬🇧|🇬🇧|🇻🇬|🇺🇸|🇺🇾|🇺🇿|🇻🇺|🇻🇦|🇻🇪|🇻🇳|🇼🇫|🇪🇭|🇾🇪|🇿🇲|🇿🇼/;
  const flagMatch = profile.match(flagRegex);
  if (/^Recently\s+Active$/i.test(profile)) {
      profileData.activity = 'Recently Active';
  } else if (!['Open Profile', 'NOPE', 'LIKE'].includes(profile)) {
      profileData.name = profile;
  } else if (!isNaN(profile)) {
      profileData.age = profile;
  } else if (flagMatch) {
      profileData.location = flagMatch[0] + ' ' + profile.replace(flagMatch[0], '').trim();
  } else if (profile !== 'Open Profile' && profile !== 'NOPE' && profile !== 'LIKE') {
      profileData.name = profile;
  } else {
      profileData.bio = (profileData.bio || '') + ' ' + profile;
  }
  extractedData.push(profileData);
}

// Process each profile
  for (const profile of profiles) {
    extractDataForProfile(profile);
  }

// Log the extracted data for all profiles
for (const data of extractedData) {
  console.log('Activity:', data.activity);
  console.log('Name:', data.name);
  console.log('Age:', data.age);
  console.log('Location:', data.location);
  console.log('Bio:', data.bio);
}

//console.log(viii);
