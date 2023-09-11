  
  const infoClassName = 'focus-button-style';
	const nbButtons = document.getElementsByClassName("button").length;
	const buttons = document.getElementsByClassName("button");
	console.log("Number of buttons detected:", nbButtons); //check for qty of butttons
	const dislike = nbButtons === 5 ? buttons[1] : buttons[0]; // 按位置分配的
	const like = nbButtons === 3 ? buttons[0] : buttons[0]; //前面的1是不点开信息用 2Superlike 3like，后面的0是返回，1是拒绝 3是接受
	
document.addEventListener('DOMContentLoaded', function() {
    function clickButtonWhenAvailable() {
      const element = document.querySelector('.my-button');
      element.addEventListener('click', function(event) {
        // Access the clicked button element
        const clickedButton = event.target;
      
        // Get the class attribute of the clicked button
        const buttonClass = clickedButton.className;
      
        // Log the class name to the console
        console.log('Button was clicked with class:', buttonClass);
      
        // You can also check for other attributes or properties of the button here
        const buttonText = event.target.innerHTML;
        console.log('Button text:', buttonText);
        const buttonOuterHTML = event.target.outerHTML;
        console.log('Button outer HTML:', buttonOuterHTML);
        //features
        const buttonValue = event.target.value;
        console.log('Button value:', buttonValue);
        const buttonId = event.target.id;
        console.log('Button ID:', buttonId);
        const customDataAttribute = event.target.getAttribute('data-custom');
        console.log('Custom data attribute:', customDataAttribute);
        const buttonType = event.target.type;
        console.log('Button type:', buttonType);


      });
      if (button) {
        button.addEventListener('click', function(event) {
          // Your code to handle the click event goes here
          console.log('Button clicked!');
        });
      } else {
        // If the button is not available, check again in 1 second
        setTimeout(clickButtonWhenAvailable, 1000);
      }
    }
  
    // Call the function to start listening for the button
    clickButtonWhenAvailable();
  });

  //this only loop check for button and calls a function 
  //it does have a function to write something to get the selector.

  function getElementXPath(element) {
    if (!element || element === document.body) {
      return 'body';
    }
  
    const siblingElements = Array.from(element.parentNode.children);
    const index = siblingElements.indexOf(element) + 1;
  
    return `${getElementXPath(element.parentNode)}/${element.tagName.toLowerCase()}[${index}]`;
  }
  
  const buttonXPath = getElementXPath(event.target);
  console.log('Button XPath:', buttonXPath);