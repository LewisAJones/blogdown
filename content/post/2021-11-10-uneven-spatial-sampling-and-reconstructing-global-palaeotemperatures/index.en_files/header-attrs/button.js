var english = document.getElementById("en"),
german = document.getElementById("deu"),
spanish = document.getElementById("esp"),
change_text = document.getElementById("translate");
// declare some variables to catch the various HTML elements

english.addEventListener("click", function() {
  change(english, german, spanish);
}, false
);
// add an event listener to listen to when the user clicks on one of the language span tags
// this triggers our custom "change" function, which we will define later

german.addEventListener("click", function() {
  change(german, english, spanish);
}, false
);

spanish.addEventListener("click", function() {
  change(spanish, english, german);
}, false
);

function change(lang_on, lang_off1, lang_off2) {
  if (!lang_on.classList.contains("current_lang")) {
    // if the span that the user clicks on does not have the "current_lang" class
    lang_on.classList.add("current_lang");
    // add the "current_lang" class to it
    lang_off1.classList.remove("current_lang");
    lang_off2.classList.remove("current_lang");
    // remove the "current_lang" class from the other span
  }
  
  if (lang_on.innerHTML == "EN") {
    change_text.classList.add("english");
    change_text.classList.remove("spanish");
    change_text.classList.remove("german");
    change_text.innerHTML = "The text here will change!";
  }
  
  else if (lang_on.innerHTML == "ESP") {
    change_text.classList.add("spanish");
    // first line adds the corrent language class to the text
    change_text.classList.remove("english");
    // second and third line removes the other language classes
    // this allows you to apply CSS that is specific to each language
    change_text.classList.remove("german");
    change_text.innerHTML = "这里的文字会改变";
    // fourth line is where you key in the text that will replace what is currently on-screen
  }
  
  else if (lang_on.innerHTML == "DEU") {
    change_text.classList.add("german");
    change_text.classList.remove("english");
    change_text.classList.remove("spanish");
    change_text.innerHTML = "ここの文字は変わります";
  }
}