//filterprofile
const i = `1/9\n2/9\n3/9\n4/9\n5/9\n6/9\n7/9\n8/9\n9/9\nRecently Active\nGrace\n23\n🇺🇸13613 kilometers away\nDon’t ask me how I’m using my degree 😅\nOpen Profile\nNOPE\nLIKE\n1/9\n2/9\n3/9\n4/9\n5/9\n6/9\n7/9\n8/9\n9/9\nJewel\n26\n🇺🇸15760 kilometers away\nlittle weird, kinda nerdy, totally lovable.\nsuper into making genuine friendships butopen to whatever if the connection is theremessage me first bc i’m shy and not good at pick up lines😂\nOpen Profile\nNOPE\nLIKE\n1/9\n2/9\n3/9\n4/9\n5/9\n6/9\n7/9\n8/9\n9/9\nRin\n22\nOpen Profile\nNOPE\nLIKE\nREWIND\nNOPE\nSUPER LIKE\n0\nLIKE\nBOOST\n0\nShow\nNope\nLike\nOpen Profile\nClose Profile\nSuper Like\nNext Photo`;
//this matches the numbers before split, after split it's in lines. undetectable.
const regextomatch = /(1\/9|2\/9|3\/9|4\/9|5\/9|6\/9|7\/9|8\/9|9\/9)/g;
const ii = i.replace(regextomatch, '');
// Split the text into individual profiles using "" as a delimiter
const iii = ii.split("\n");
const iv = iii.filter(line => line !== '');
const phrasesToMatch = [
  "Open Profile",
  "NOPE",
  "LIKE",
  "REWIND",
  "NOPE",
  "SUPER LIKE",
  "0",
  "LIKE",
  "BOOST",
  "0",
  "Show",
  "Nope",
  "Like",
  "Open Profile",
  "Close Profile",
  "Super Like",
  "Next Photo"
];
// Iterate through each line in iv and match phrases
iv.forEach((line, index) => {
  phrasesToMatch.forEach(phrase => {
    const regexToMatch = new RegExp(`\\b${phrase}\\b`, 'gi');
    iv[index] = line.replace(regexToMatch, '');
  });
});

console.log(iv);
