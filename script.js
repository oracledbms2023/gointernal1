const answer1 = document.getElementById("copyResult1");
const answer2 = document.getElementById("copyResult2");
const answer3 = document.getElementById("copyResult3");
const answer4 = document.getElementById("copyResult4");
const answer5 = document.getElementById("copyResult5");
const answer6 = document.getElementById("copyResult6");
const answer7 = document.getElementById("copyResult7");
const answer8 = document.getElementById("copyResult8");
const answer9 = document.getElementById("copyResult9");
const answer10 = document.getElementById("copyResult10");
const answer11 = document.getElementById("copyResult11");
const answer12 = document.getElementById("copyResult12");
const answer13 = document.getElementById("copyResult13");
const answer14 = document.getElementById("copyResult14");
const answer15 = document.getElementById("copyResult15");
const answer16 = document.getElementById("copyResult16");
const answer17 = document.getElementById("copyResult17");
const answer18 = document.getElementById("copyResult18");
const answer19 = document.getElementById("copyResult19");
const answer20 = document.getElementById("copyResult20");

const copy1   = document.getElementById("copyButton1");
const copy2   = document.getElementById("copyButton2");
const copy3   = document.getElementById("copyButton3");
const copy4   = document.getElementById("copyButton4");
const copy5   = document.getElementById("copyButton5");
const copy6   = document.getElementById("copyButton6");
const copy7   = document.getElementById("copyButton7");
const copy8   = document.getElementById("copyButton8");
const copy9   = document.getElementById("copyButton9");
const copy10   = document.getElementById("copyButton10");
const copy11   = document.getElementById("copyButton11");
const copy12   = document.getElementById("copyButton12");
const copy13   = document.getElementById("copyButton13");
const copy14   = document.getElementById("copyButton14");
const copy15   = document.getElementById("copyButton15");
const copy16   = document.getElementById("copyButton16");
const copy17   = document.getElementById("copyButton17");
const copy18   = document.getElementById("copyButton18");
const copy19   = document.getElementById("copyButton19");
const copy20   = document.getElementById("copyButton20");

const selection = window.getSelection();
const range = document.createRange();
const textToCopy1 = document.getElementById("textToCopy1");
const textToCopy2 = document.getElementById("textToCopy2");
const textToCopy3 = document.getElementById("textToCopy3");
const textToCopy4 = document.getElementById("textToCopy4");
const textToCopy5 = document.getElementById("textToCopy5");
const textToCopy6 = document.getElementById("textToCopy6");
const textToCopy7 = document.getElementById("textToCopy7");
const textToCopy8 = document.getElementById("textToCopy8");
const textToCopy9 = document.getElementById("textToCopy9");
const textToCopy10 = document.getElementById("textToCopy10");
const textToCopy11 = document.getElementById("textToCopy11");
const textToCopy12 = document.getElementById("textToCopy12");
const textToCopy13 = document.getElementById("textToCopy13");
const textToCopy14 = document.getElementById("textToCopy14");
const textToCopy15 = document.getElementById("textToCopy15");
const textToCopy16 = document.getElementById("textToCopy16");
const textToCopy17 = document.getElementById("textToCopy17");
const textToCopy18 = document.getElementById("textToCopy18");
const textToCopy19 = document.getElementById("textToCopy19");
const textToCopy20 = document.getElementById("textToCopy20");


copy1.addEventListener('click', function(e) {
    range.selectNodeContents(textToCopy1);
    selection.removeAllRanges();
    selection.addRange(range);
    const successful = document.execCommand('copy');
    if(successful){
      answer1.innerHTML = 'C';
    } else {
      answer1.innerHTML = 'U';  
    }
    window.getSelection().removeAllRanges()
});

copy2.addEventListener('click', function(e) {
    range.selectNodeContents(textToCopy2);
    selection.removeAllRanges();
    selection.addRange(range);
    const successful = document.execCommand('copy');
    if(successful){
      answer2.innerHTML = 'C';
    } else {
      answer2.innerHTML = 'U';  
    }
    window.getSelection().removeAllRanges()
});

copy3.addEventListener('click', function(e) {
    range.selectNodeContents(textToCopy3);
    selection.removeAllRanges();
    selection.addRange(range);
    const successful = document.execCommand('copy');
    if(successful){
      answer3.innerHTML = 'C';
    } else {
      answer3.innerHTML = 'U';  
    }
    window.getSelection().removeAllRanges()
});

copy4.addEventListener('click', function(e) {
  range.selectNodeContents(textToCopy4);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if(successful){
    answer4.innerHTML = 'C';
  } else {
    answer4.innerHTML = 'U';  
  }
  window.getSelection().removeAllRanges()
});

copy5.addEventListener('click', function(e) {
  range.selectNodeContents(textToCopy5);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if(successful){
    answer5.innerHTML = 'C';
  } else {
    answer5.innerHTML = 'U';  
  }
  window.getSelection().removeAllRanges()
});

copy6.addEventListener('click', function(e) {
  range.selectNodeContents(textToCopy6);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if(successful){
    answer6.innerHTML = 'C';
  } else {
    answer6.innerHTML = 'U';  
  }
  window.getSelection().removeAllRanges()
});

copy7.addEventListener('click', function(e) {
  range.selectNodeContents(textToCopy7);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if(successful){
    answer7.innerHTML = 'C';
  } else {
    answer7.innerHTML = 'U';  
  }
  window.getSelection().removeAllRanges()
});

copy8.addEventListener('click', function(e) {
  range.selectNodeContents(textToCopy8);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if(successful){
    answer8.innerHTML = 'C';
  } else {
    answer8.innerHTML = 'U';  
  }
  window.getSelection().removeAllRanges()
});

copy9.addEventListener('click', function(e) {
  range.selectNodeContents(textToCopy9);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if(successful){
    answer9.innerHTML = 'C';
  } else {
    answer9.innerHTML = 'U';  
  }
  window.getSelection().removeAllRanges()
});

copy10.addEventListener('click', function(e) {
  range.selectNodeContents(textToCopy10);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if(successful){
    answer10.innerHTML = 'C';
  } else {
    answer10.innerHTML = 'U';  
  }
  window.getSelection().removeAllRanges()
});
copy11.addEventListener('click', function(e) {
  range.selectNodeContents(textToCopy11);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if(successful){
    answer11.innerHTML = 'C';
  } else {
    answer11.innerHTML = 'U';  
  }
  window.getSelection().removeAllRanges()
});

copy12.addEventListener('click', function(e) {
  range.selectNodeContents(textToCopy12);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if(successful){
    answer12.innerHTML = 'C';
  } else {
    answer12.innerHTML = 'U';  
  }
  window.getSelection().removeAllRanges()
});

copy13.addEventListener('click', function(e) {
  range.selectNodeContents(textToCopy13);
  selection.removeAllRanges();
  selection.addRange(range);
  const successful = document.execCommand('copy');
  if(successful){
    answer13.innerHTML = 'C';
  } else {
    answer13.innerHTML = 'U';  
  }
  window.getSelection().removeAllRanges()
});

copy14.addEventListener('click', function(e) {
range.selectNodeContents(textToCopy14);
selection.removeAllRanges();
selection.addRange(range);
const successful = document.execCommand('copy');
if(successful){
  answer14.innerHTML = 'C';
} else {
  answer14.innerHTML = 'U';  
}
window.getSelection().removeAllRanges()
});

copy15.addEventListener('click', function(e) {
range.selectNodeContents(textToCopy15);
selection.removeAllRanges();
selection.addRange(range);
const successful = document.execCommand('copy');
if(successful){
  answer15.innerHTML = 'C';
} else {
  answer15.innerHTML = 'U';  
}
window.getSelection().removeAllRanges()
});

copy16.addEventListener('click', function(e) {
range.selectNodeContents(textToCopy16);
selection.removeAllRanges();
selection.addRange(range);
const successful = document.execCommand('copy');
if(successful){
  answer16.innerHTML = 'C';
} else {
  answer16.innerHTML = 'U';  
}
window.getSelection().removeAllRanges()
});

copy17.addEventListener('click', function(e) {
range.selectNodeContents(textToCopy17);
selection.removeAllRanges();
selection.addRange(range);
const successful = document.execCommand('copy');
if(successful){
  answer17.innerHTML = 'C';
} else {
  answer17.innerHTML = 'U';  
}
window.getSelection().removeAllRanges()
});

copy18.addEventListener('click', function(e) {
range.selectNodeContents(textToCopy18);
selection.removeAllRanges();
selection.addRange(range);
const successful = document.execCommand('copy');
if(successful){
  answer18.innerHTML = 'C';
} else {
  answer18.innerHTML = 'U';  
}
window.getSelection().removeAllRanges()
});

copy19.addEventListener('click', function(e) {
range.selectNodeContents(textToCopy19);
selection.removeAllRanges();
selection.addRange(range);
const successful = document.execCommand('copy');
if(successful){
  answer19.innerHTML = 'C';
} else {
  answer19.innerHTML = 'U';  
}
window.getSelection().removeAllRanges()
});

copy20.addEventListener('click', function(e) {
range.selectNodeContents(textToCopy20);
selection.removeAllRanges();
selection.addRange(range);
const successful = document.execCommand('copy');
if(successful){
  answer20.innerHTML = 'C';
} else {
  answer20.innerHTML = 'U';  
}
window.getSelection().removeAllRanges()
});

