// Аккардеон
$('.type_1 .headingElem').on('click', function (){
    let thisContentBlock = $(this).parent().find('.descElem');
    if(thisContentBlock.hasClass('active')) {
        thisContentBlock.removeClass('active')
    }
    else {
        thisContentBlock.addClass('active')
    }

    let thisContent = $(this).parent().find('.headingElem');
    if(thisContent.hasClass('active')) {
        thisContent.removeClass('active')
    }
    else {
        thisContent.addClass('active')
    }
})

// Слайдер с картинками
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Счетчик
let calculate = document.getElementById("calculation");
let count = document.getElementById("buttonCountNumber");

document.getElementById("buttonCountPlus").onclick = function() {
  let countPlus = count.innerHTML;
  if(+countPlus <= 3){
    count.innerHTML++;
    let countPlus = count.innerHTML;
    calculate.innerHTML = calculations(countPlus) ;
  }
}

document.getElementById("buttonCountMinus").onclick = function() {
  let countMinus = count.innerHTML;
  if(+countMinus >= 2){
    count.innerHTML--;
    let countMinus = count.innerHTML;
    calculate.innerHTML = calculations(countMinus) ;
  }
}


// ---------------tabs
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})



