



function myFunction() 
{
  
  
  
  let Textinput = document.getElementById("myInput").value;
  
  
  let newString = Textinput.replaceAll("a", "а")
.replaceAll("c", "с")
.replaceAll("e", "е")
.replaceAll("i", "і")
.replaceAll("j", "ј")
.replaceAll("o", "о")
.replaceAll("p", "р")
.replaceAll("s", "ѕ")
.replaceAll("x", "х")
.replaceAll("y", "у")
.replaceAll("A", "А")
.replaceAll("B", "В")
.replaceAll("C", "С")
.replaceAll("E", "Е")
.replaceAll("H", "Н")
.replaceAll("I", "І")
.replaceAll("K", "Κ")
.replaceAll("M", "М")
.replaceAll("N", "Ν")
.replaceAll("O", "О")
.replaceAll("P", "Р")
.replaceAll("S", "Ѕ")
.replaceAll("T", "Т")
.replaceAll("X", "Х")
.replaceAll("Y", "Υ")
.replaceAll("Z", "Ζ");

  
  
  
  //copy to clipboard
  navigator.clipboard.writeText(newString + "   alg0");
  
  // Alert the copied text
  //alert("Copied the text: " + newString);
  
  document.getElementById("myOutput").innerHTML = newString;
  
  

}


//plan:
////////
//button click 
//> paste from field (copy from clipboard in furure?)
//> transform text.
//> copy to clipboard and show

