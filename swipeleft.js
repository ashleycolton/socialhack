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

	  function waitForBioContainer() {
		const bioContainer = document.querySelector('.profileCard .profileContent'); //.profileCard__card
		if (bioContainer) {
		  // Element found, proceed with your logic
		  hasValidProfile(bioContainer);
		  console.log('has biocontainer');
		} else {
		  // Element not found, check again after a delay
		  setTimeout(waitForBioContainer, 1000); // Check again in 1 second
		  console.log('dont have biocontainer,it is null, your selector not right ');
		}
	  }
	  function hasValidProfile(bioContainer) {
		try {
    // Use XPath expressions to extract profile data
    //const nameElement = bioContainer.querySelector(".//h1[@class='Typs(display-1-strong) Fxs(1) Fxw(w) Pend(8px) M(0) D(i)']");
    //const ageElement = bioContainer.querySelector(".//span[@aria-label='28 years']");
    //const genderElement = bioContainer.querySelector(".//div[@class='Us(t) Va(m) D(ib) NetWidth(100%,20px) C($c-ds-text-secondary)']");
    //const distanceElement = bioContainer.querySelector(".//div[contains(text(), 'kilometers away')]");
    //const profileTextElement = bioContainer.querySelector(".//div[contains(@class, 'Px(16px) Py(12px) Us(t) C($c-ds-text-secondary) BreakWord Whs(pl) Typs(body-1-regular)')]");

    // Extract the innerHTML of the elements or provide a default value ('N/A')
	//const nameElement = document.querySelector('.profileCard .profileContent .profileCard__card .Px(16px):nth-child(3) .Py(10px)');
	const profileCard = document.querySelector('.profileCard .profileContent .profileCard__card');
    const nameElement = profileCard.querySelector('h1.Typs(display-1-strong).Fxs(1).Fxw(w).Pend(8px).M(0).D(i)');
	const ageElement = document.querySelector('.profileCard .profileContent .profileCard__card span[aria-label]:not([aria-label="17 years"])');
    const name = nameElement ? nameElement.textContent.trim() : 'N/A';
    const age = ageElement ? ageElement.textContent.trim() : 'N/A';
    const gender = genderElement ? genderElement.textContent.trim() : 'N/A';
    const distance = distanceElement ? distanceElement.textContent.trim() : 'N/A';
    const bio = profileTextElement ? profileTextElement.textContent.trim() : 'N/A';

	  
		  console.log('Name:', name);
		  console.log('Age:', age);
		  console.log('Gender:', gender);
		  console.log('Distance:', distance);
		  console.log('Bio:', bio);
	  
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
	  
	  // Call the initial waiting function
	  waitForBioContainer();

function checkTinder() {
	const base = "https://tinder.com/";
	return window.location.href.startsWith(base + "app/recs") || window.location.href.startsWith(base + "app/matches");
}
//working, it brings u to the main page, even if you have not reacted like/dislike in time.

function isMatch() {
	return document.querySelector('a.active');
}

// prevent async execution
function pause(milliseconds) {
	const dt = new Date();
	while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
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


  


	// Open profile bio
	const info = document.getElementsByClassName(infoClassName)[5]; //2是弹窗 3是模糊 4是返回 5是正确的打开信息 12keyi 0safetytips 1啥也不是
	if (info) {
		info.click();
        if (hasValidProfile()) {
			like.click();
			
			if (info.length >= 6) {
				console.log("debug like:", info[0], info[1], info[2], info[3], info[4], info[5]);
			  } else {
				console.log("Not enough elements with class name", infoClassName);
			  }
			console.log("debug like:", info[0], info[1], info[2], info[3], info[4], info[5]); //check for qty of butttons
			const thereIsMatch = isMatch();
			if (thereIsMatch) {
				console.log('------------- IT\'S A MATCH ! -------------');
				thereIsMatch.click();
			}
		} else {
			dislike.click();
			console.log("debug dislike:", nbButtons); //check for qty of butttons
		} //check whether has valid profile
        if (nbButtons === 0 || nbButtons === 2) {
            console.log("No buttons to interact with. Script suspended.");
            return; // Exit the function and suspend the script
        }
	}
	pause(rand);//原来是600

	// Like or dislike depending on validation
	

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

	let random1 = getRandomPeriod();
	setTimeout(function (){
		random1 = undefined;
		// Start waiting for the bio container
		waitForBioContainer();
	}, random1);
}());
//document.querySelector('.profileCard .profileContent .profileCard__card .Fx\\(\\$flx1\\)')
//document.querySelector('.profileCard .profileContent .profileCard__card [style*="overflow-wrap: break-word;"]')
//null
//const selectedElement = document.querySelector('div.Px\\(16px\\):nth-child(3).Py\\(10px\\)');
//console.log(selectedElement);
//undefined
//should use a more general selector


//the whole profile including name age gender distance value
//inner html px) C($c-ds-text-primary) Us(t) D(f) Ai(b) Maw(90%)"><div class="Ov(h) Ws(nw) Ell"><h1 class="Typs(display-1-strong) Fxs(1) Fxw(w) Pend(8px) M(0) D(i)">MJ</h1></div><span class="Whs(nw) Typs(display-2-strong)" aria-label="28 years">28</span></div><div class="Typs(body-1-regular)"><div class="Row"><div class="Mend(4px) D(ib) Va(t)"><svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="24px" height="24px" class="Va(m) Sq(16px)"><path d="M15.507 13.032c1.14-.952 1.862-2.656 1.862-5.592C17.37 4.436 14.9 2 11.855 2 8.81 2 6.34 4.436 6.34 7.44c0 3.07.786 4.8 2.02 5.726-2.586 1.768-5.054 4.62-4.18 6.204 1.88 3.406 14.28 3.606 15.726 0 .686-1.71-1.828-4.608-4.4-6.338" stroke="#505965" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="Us(t) Va(m) D(ib) NetWidth(100%,20px) C($c-ds-text-secondary)">Woman</div></div><div class="Row"><div class="Mend(4px) D(ib) Va(t)"><svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="24px" height="24px" class="Va(m) Sq(16px)"><g fill="#505965" stroke="#505965" stroke-width=".5" fill-rule="evenodd"><path d="M11.436 21.17l-.185-.165a35.36 35.36 0 0 1-3.615-3.801C5.222 14.244 4 11.658 4 9.524 4 5.305 7.267 2 11.436 2c4.168 0 7.437 3.305 7.437 7.524 0 4.903-6.953 11.214-7.237 11.48l-.2.167zm0-18.683c-3.869 0-6.9 3.091-6.9 7.037 0 4.401 5.771 9.927 6.897 10.972 1.12-1.054 6.902-6.694 6.902-10.95.001-3.968-3.03-7.059-6.9-7.059h.001z"></path><path d="M11.445 12.5a2.945 2.945 0 0 1-2.721-1.855 3.04 3.04 0 0 1 .641-3.269 2.905 2.905 0 0 1 3.213-.645 3.003 3.003 0 0 1 1.813 2.776c-.006 1.653-1.322 2.991-2.946 2.993zm0-5.544c-1.378 0-2.496 1.139-2.498 2.542 0 1.404 1.115 2.544 2.495 2.546a2.52 2.52 0 0 0 2.502-2.535 2.527 2.527 0 0 0-2.499-2.545v-.008z"></path></g></svg></div><div class="Us(t) Va(m) D(ib) NetWidth(100%,20px) C($c-ds-text-secondary)">15076 kilometers away</div></div></div></div>
//outer html <div class="D(f) Jc(sb) Us(n) Px(16px) Py(10px)"><div class="W(100%)"><div class="My(2px) C($c-ds-text-primary) Us(t) D(f) Ai(b) Maw(90%)"><div class="Ov(h) Ws(nw) Ell"><h1 class="Typs(display-1-strong) Fxs(1) Fxw(w) Pend(8px) M(0) D(i)">MJ</h1></div><span class="Whs(nw) Typs(display-2-strong)" aria-label="28 years">28</span></div><div class="Typs(body-1-regular)"><div class="Row"><div class="Mend(4px) D(ib) Va(t)"><svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="24px" height="24px" class="Va(m) Sq(16px)"><path d="M15.507 13.032c1.14-.952 1.862-2.656 1.862-5.592C17.37 4.436 14.9 2 11.855 2 8.81 2 6.34 4.436 6.34 7.44c0 3.07.786 4.8 2.02 5.726-2.586 1.768-5.054 4.62-4.18 6.204 1.88 3.406 14.28 3.606 15.726 0 .686-1.71-1.828-4.608-4.4-6.338" stroke="#505965" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><div class="Us(t) Va(m) D(ib) NetWidth(100%,20px) C($c-ds-text-secondary)">Woman</div></div><div class="Row"><div class="Mend(4px) D(ib) Va(t)"><svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="24px" height="24px" class="Va(m) Sq(16px)"><g fill="#505965" stroke="#505965" stroke-width=".5" fill-rule="evenodd"><path d="M11.436 21.17l-.185-.165a35.36 35.36 0 0 1-3.615-3.801C5.222 14.244 4 11.658 4 9.524 4 5.305 7.267 2 11.436 2c4.168 0 7.437 3.305 7.437 7.524 0 4.903-6.953 11.214-7.237 11.48l-.2.167zm0-18.683c-3.869 0-6.9 3.091-6.9 7.037 0 4.401 5.771 9.927 6.897 10.972 1.12-1.054 6.902-6.694 6.902-10.95.001-3.968-3.03-7.059-6.9-7.059h.001z"></path><path d="M11.445 12.5a2.945 2.945 0 0 1-2.721-1.855 3.04 3.04 0 0 1 .641-3.269 2.905 2.905 0 0 1 3.213-.645 3.003 3.003 0 0 1 1.813 2.776c-.006 1.653-1.322 2.991-2.946 2.993zm0-5.544c-1.378 0-2.496 1.139-2.498 2.542 0 1.404 1.115 2.544 2.495 2.546a2.52 2.52 0 0 0 2.502-2.535 2.527 2.527 0 0 0-2.499-2.545v-.008z"></path></g></svg></div><div class="Us(t) Va(m) D(ib) NetWidth(100%,20px) C($c-ds-text-secondary)">15076 kilometers away</div></div></div></div></div>
//css selector .Py\(10px\)

//distance
//attribute value class="Us(t) Va(m) D(ib) NetWidth(100%,20px) C($c-ds-text-secondary)"
//inner html 15076 kilometers away
//outer html <div class="Us(t) Va(m) D(ib) NetWidth(100%,20px) C($c-ds-text-secondary)">15076 kilometers away</div>
//css selector div.Row:nth-child(2) > div:nth-child(2)
//css path html#Tinder.W(100%).Us(n) body.M(0).Pos(f).Ov(h).P(0).Expand.Fz($s).C($c-ds-text-primary).Ovsby(n).theme-light div#q1388042758.H(100%).Ov(h) div.App.Expand.Ovy(a).Ovx(h).animation-fade-in-out-enter-done div.App__body.H(100%).Pos(r).Z(0) div.D(f).Fxd(r).Fx($flx1).H(100%).desktop.Ov(h) main.H(100%).Ov(h).Pos(r).Bgc($c-ds-background-secondary).Z(1).Fx($flx1).BdStart.Bdc($c-ds-divider-primary) div.H(100%) div.H(100%) div.CenterAlign.H(100%).Fxd(c) div.Pos(r).D(f).Ai(c).Fxd(c).Mt(a).Expand.H(--recs-card-height)--ml.Maw(--recs-card-width)--ml div.Pos(r)--ml.Z(1).Bgc($c-ds-background-primary).Ov(h).Expand.profileContent.Bdrs(8px)--ml.Bxsh($bxsh-card)--ml div.profileCard__card.Ovs(touch).Ovy(s).D(f).Fxd(c).Expand.Bdrs(8px)--ml.Bxsh($bxsh-card)--ml div.Bgc($c-ds-background-primary).Fxg(1).Z(1).Pb(100px) div.D(f).Jc(sb).Us(n).Px(16px).Py(10px) div.W(100%) div.Typs(body-1-regular) div.Row div.Us(t).Va(m).D(ib).NetWidth(100%,20px).C($c-ds-text-secondary)

//profile text
//attribute Px(16px) Py(12px) Us(t) C($c-ds-text-secondary) BreakWord Whs(pl) Typs(body-1-regular)
//inner html <div>Here for the good times not for the long times 🙌🏻🍁😈Like David After Dentist once said, “is this real life..?”</div>
//outer html <div class="Px(16px) Py(12px) Us(t) C($c-ds-text-secondary) BreakWord Whs(pl) Typs(body-1-regular)"><div>Here for the good times not for the long times 🙌🏻🍁😈Like David After Dentist once said, “is this real life..?”</div></div>
//css selector div.Px\(16px\):nth-child(3)
//css path html#Tinder.W(100%).Us(n) body.M(0).Pos(f).Ov(h).P(0).Expand.Fz($s).C($c-ds-text-primary).Ovsby(n).theme-light div#q1388042758.H(100%).Ov(h) div.App.Expand.Ovy(a).Ovx(h).animation-fade-in-out-enter-done div.App__body.H(100%).Pos(r).Z(0) div.D(f).Fxd(r).Fx($flx1).H(100%).desktop.Ov(h) main.H(100%).Ov(h).Pos(r).Bgc($c-ds-background-secondary).Z(1).Fx($flx1).BdStart.Bdc($c-ds-divider-primary) div.H(100%) div.H(100%) div.CenterAlign.H(100%).Fxd(c) div.Pos(r).D(f).Ai(c).Fxd(c).Mt(a).Expand.H(--recs-card-height)--ml.Maw(--recs-card-width)--ml div.Pos(r)--ml.Z(1).Bgc($c-ds-background-primary).Ov(h).Expand.profileContent.Bdrs(8px)--ml.Bxsh($bxsh-card)--ml div.profileCard__card.Ovs(touch).Ovy(s).D(f).Fxd(c).Expand.Bdrs(8px)--ml.Bxsh($bxsh-card)--ml div.Bgc($c-ds-background-primary).Fxg(1).Z(1).Pb(100px) div.Px(16px).Py(12px).Us(t).C($c-ds-text-secondary).BreakWord.Whs(pl).Typs(body-1-regular)

//DOM might not be loaded 

//THIS SHOUND BE RIGHT but too specific for 1
//const profileCard = document.querySelector('.profileCard .profileContent .profileCard__card .Px\\(16px\\):nth-child(3) .Py\\(10px\\)');

// Use a more general selector:
//const profileCard = document.querySelector('.profileCard .profileCard__card div:nth-child(3) .Py\\(10px\\)');
//const profileCard = document.querySelector('.profileCard .profileCard__card .Py\\(10px\\)');

//use xpath if selector is not locateable.


// Assuming you have already selected the profile card container, e.g., profileCard

// XPath for the name element within the profile card
//const nameElement = document.evaluate(".//h1[@class='Typs(display-1-strong) Fxs(1) Fxw(w) Pend(8px) M(0) D(i)']", profileCard, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// XPath for the age element within the profile card
//const ageElement = document.evaluate(".//span[@aria-label='28 years']", profileCard, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// XPath for the gender element within the profile card
//const genderElement = document.evaluate(".//div[@class='Us(t) Va(m) D(ib) NetWidth(100%,20px) C($c-ds-text-secondary)']", profileCard, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// XPath for the distance element within the profile card
//const distanceElement = document.evaluate(".//div[contains(text(), 'kilometers away')]", profileCard, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// XPath for the profile text element within the profile card
//const profileTextElement = document.evaluate(".//div[contains(@class, 'Px(16px) Py(12px) Us(t) C($c-ds-text-secondary) BreakWord Whs(pl) Typs(body-1-regular)')]", profileCard, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

// Now, you have individual elements within the profile card, and you can extract their innerHTML or other attributes as needed
//const name = nameElement ? nameElement.innerHTML : 'N/A';
//const age = ageElement ? ageElement.innerHTML : 'N/A';
//const gender = genderElement ? genderElement.innerHTML : 'N/A';
//const distance = distanceElement ? distanceElement.innerHTML : 'N/A';
//const profileText = profileTextElement ? profileTextElement.innerHTML : 'N/A';
