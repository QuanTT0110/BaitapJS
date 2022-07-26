const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "!@#$%^&*()_+~`|}{[]\:;?><,./-="


function makePassword(l,up,lw,num,sym){
  let password = "";
  let passwordCharSet  = "";
  if(up == true ){
    passwordCharSet += upperCase;
  }
  if(lw == true ){
    passwordCharSet += lowerCase;

  }
  if(num == true ){
    passwordCharSet += number;

  }
  if(sym == true ){
    passwordCharSet += symbol;
  }
  for (let i = 0; i < l; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  if(password )
  return password;
}


console.log(makePassword(25,true,true,true,true));

