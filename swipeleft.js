function hasBlacklistKeywords(bio) {
	const blacklist = [
		'ladyboy',
		'banci',
		'bencong',
		'lady boy',
		'not a lady',
		'not lady',
		'not a girl',
		'not girl',
		'trans',
		'shemale',
		'chubby',
		' lb ',
        '@',
        'tattoo',
        'smoke',
        'smoking',
	];

	for (item of blacklist) {
		if (bio.toLowerCase().indexOf(item) !== -1) {
			console.log('skipping profile, matched blacklist keyword ' + item);
			return true;
		}
	}
	for (let i = 0; i < blacklist.length; i++) {
		if (name.toLowerCase().indexOf(blacklist[i]) !== -1) {
		  console.log('skipping profile, matched blacklist keyword ' + blacklist[i]);
		  return true;
		}
	  }
	  return false;
	}
	
	function hasChineseOrThaiCharacters(name) {
	  const chineseRegex = /[\u4e00-\u9fa5]/;
	  const thaiRegex = /[\u0e00-\u0e7f]/;
	  return chineseRegex.test(name) || thaiRegex.test(name);
	}
	
	function filterNames(names) {
		return names.filter(name => !hasBlacklistKeywords(name) && !hasChineseOrThaiCharacters(name));
	  }
  
	  // Check for Thai and Chinese characters
	  function hasThaiOrChineseCharacters(bio) {
		const thaiRegex = /[\u0E00-\u0E7F]/;
		const chineseRegex = /[\u4E00-\u9FAF]/;
  
		if (thaiRegex.test(bio) || chineseRegex.test(bio)) {
		  console.log('skipping profile, matched Thai or Chinese characters');
		  return true;
		}
  
		return false;
	  }
function hasValidProfile() {
	try {
		const bioContainer = document.querySelector('.profileCard .profileContent .profileCard__card .BreakWord');
		if (!bioContainer) return true;
		const bio = bioContainer.textContent;
		const nameContainer = document.querySelector('.profileCard .profileContent .profileCard__card .Fz($xl)');
		if (!nameContainer) return true;
		const name = nameContainer.textContent.trim();
		console.log(bio);
		console.log(name);

		// Check if the bio contains "Recently Active" or "Active" (case-sensitive)
		const isBioValid = /Recently Active|Active/.test(bio);

		const isValid = !hasBlacklistKeywords(bio) && !hasBlacklistKeywords(name) && !hasChineseOrThaiCharacters(name) && isBioValid;
        
		// Debug statement: Show a dialog box indicating if the profile is valid
		if (isValid) {
			alert('Profile is valid.');
		} else {
			alert('Profile is not valid.');
		}

		return isValid;
	} catch (e) {
		 console.log(e);
		return true; // possible empty bio
	}
}

function checkTinder() {
	const base = "https://tinder.com/";
	return window.location.href.startsWith(base + "app/recs") || window.location.href.startsWith(base + "app/matches");
}

function isMatch() {
	return document.querySelector('a.active');
}

// prevent async execution
function pause(milliseconds) {
	const dt = new Date();
	while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}
function simulateRandomSpacebarPresses() {
    const numberOfPresses = Math.floor(Math.random() * 3) + 1; // Generates a random number between 1 and 3
    
    const spaceKeyEvent = new KeyboardEvent('keydown', {
      key: ' ',
      code: 'Space',
      keyCode: 32,
      which: 32,
      charCode: 32,
    });
  
    for (let i = 0; i < numberOfPresses; i++) {
      setTimeout(() => {
        document.dispatchEvent(spaceKeyEvent);
      }, i * 500); // Adjust the delay between presses (e.g., 500ms here)
    }
}
  
 
function trickTinder() {
    const rand = Math.floor(Math.random() * (1000 - 500 + 1)) + 500; 
    //const rand2 = Math.floor(Math.random() * (1000 - 997 + 1)) + 1;  //for 
    //The "undefined" error you're encountering may be due to the use of the random function without properly defining it. 
    //JavaScript doesn't have a built-in random function, so you need to use Math.random() to generate random numbers.
	const infoClassName = 'focus-button-style';
	const nbButtons = document.getElementsByClassName("button").length;
	const buttons = document.getElementsByClassName("button");
	console.log("Number of buttons detected:", nbButtons); //check for qty of butttons
	const dislike = nbButtons === 5 ? buttons[1] : buttons[0]; // 按位置分配的
	const like = nbButtons === 3 ? buttons[0] : buttons[0]; //前面的1是不点开信息用 2Superlike 3like，后面的0是返回，1是拒绝 3是接受
	
	//const age = 20;
	//const isAdult = age >= 18 ? "Yes" : "No";
	//console.log(isAdult); // Output: "Yes"

    // Usage: Simulate pressing the spacebar 5 times with a 500ms delay between each press
    simulateRandomSpacebarPresses();
	// Open profile bio
	const info = document.getElementsByClassName(infoClassName)[5]; //2是弹窗 3是模糊 4是返回 5是正确的打开信息 12keyi 0safetytips 1啥也不是
	if (info) {
		info.click();
        console.log("Number of buttons debug:", nbButtons); //check for qty of butttons
        if (nbButtons === 0 || nbButtons === 2) {
            console.log("No buttons to interact with. Script suspended.");
            return; // Exit the function and suspend the script
        }
	}
	pause(rand);//原来是600

	// Like or deslike depending on validation
	if (hasValidProfile()) {
        var numba = 1;
        var doshit = function(){
        document.querySelector('[aria-label="Like"]').click();
        //console.log(numba);
        numba++;
        setTimeout(doshit, 100);
        };
        //doshit()
		like.click();
        //console.log("debug like:", nbButtons); //check for qty of butttons
		const thereIsMatch = isMatch();
		if (thereIsMatch) {
			console.log('------------- IT\'S A MATCH ! -------------');
			thereIsMatch.click();
		}
	} else {
		dislike.click();
        console.log("debug dislike:", nbButtons); //check for qty of butttons
	}

	// If reached max likes per day then show modal and get it's content...
	// Check if there is any subscription button...
if (document.getElementsByClassName('productButton__subscriptionButton').length > 0) {
	// We get the counter thing
	const hms = document.getElementsByClassName('Fz($ml)')[0].textContent;
	// Split it at the colons
	const a = hms.split(':');
	// Minutes are worth 60 seconds. Hours are worth 60 minutes. 1 second = 1kmilliseconds.
	// Genius... rocket science...
	const seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);

	return seconds * 1000;
	}
}
// There is a lot more fun that can be achieved
// Need to add socket puppetry (VPNs solutions? several accounts?) - :D
// TODO: Need to accept automatically permissions except for
// TODO: Need to add ANN for fake pics
// TODO: Need to add RNN for fake messages

function getRandomPeriod() {
	return Math.round(Math.random() * (2000 - 500)) + 500;
}

(function loopSasori() {
	// A random period between 500ms and 2secs
	let randomPeriod = getRandomPeriod();

	setTimeout(function () {
		randomPeriod = undefined;

		if (checkTinder()) {
			const delay = trickTinder();

			if (delay) {
				console.log('Too many likes for now, have to wait: ' + delay + ' ms');
				randomPeriod = delay;
			}
		} else if (checkOkCupid()) {
			trickOkCupid();
		}

		if (!randomPeriod) {
			loopSasori();
		} else {
			setTimeout(loopSasori, randomPeriod);
		}
	}, randomPeriod);
}());
