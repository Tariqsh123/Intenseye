// Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})
// Cursor End




// MENU
document.addEventListener('DOMContentLoaded', function () {
    var toggler = document.querySelector('.navbar-toggler');
    
    toggler.addEventListener('click', function () {
        if (this.textContent.trim() === 'MENU') {
            this.textContent = 'CLOSE';
        } else {
            this.textContent = 'MENU';
        }
    });
});

// MENU END





// H1
var sentences = ["Empowering EHS leaders to modernize workplace safety with AI"];
var currentSentence = 0;
var currentSentenceChar = 0;
var intervalValue;
var textElement = document.querySelector("#text");
var myCursor = document.querySelector("#cursor");

function TypingEffect() {
    var text = sentences[currentSentence].substring(0, currentSentenceChar + 1);
    textElement.innerHTML = text;
    currentSentenceChar++;
    
    if (text === sentences[currentSentence]) {
        clearInterval(intervalValue);
        setTimeout(function () {
            intervalValue = setInterval(DeletingEffect, 60);
        }, 1300); 
    }
}

function DeletingEffect() {
    var text = sentences[currentSentence].substring(0, currentSentenceChar - 1);
    textElement.innerHTML = text;
    currentSentenceChar--;
    
    if (text === '') {
        clearInterval(intervalValue);
        if (currentSentence === sentences.length - 1) {
            currentSentence = 0;
        } else {
            currentSentence++;
        }
        
        currentSentenceChar = 0;
        
        setTimeout(function () {
            myCursor.style.display = 'inline-block';
            intervalValue = setInterval(TypingEffect, 50);
        }, 100);
    }
}

intervalValue = setInterval(TypingEffect, 100);
// H1 End




// RIGHT SIDE ANIMATION
document.querySelectorAll('.section1-right-container').forEach(container => {
    const images = container.querySelectorAll('.animated-image');
    let currentIndex = 0;
    const intervalTime = 2000; 

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('show', i === index);
        });
    }

    function cycleImages() {
        showImage(currentIndex);
        currentIndex = (currentIndex + 1) % images.length;
    }

    showImage(currentIndex);

    setInterval(cycleImages, intervalTime);
});
// RIGHT SIDE ANIMATION END



// Slider VERTICAL IMAGE
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const images = slider.querySelectorAll('img');
    const totalImages = images.length;

    const slideClone = slider.cloneNode(true);
    slider.appendChild(slideClone);

    function animateSlider() {
        const sliderHeight = slider.scrollHeight / 2;
        let offset = 0;

        setInterval(() => {
            offset = (offset + 1) % sliderHeight;
            slider.style.transform = `translateY(-${offset}px)`;
        }, 30); 
    }

    animateSlider();
});

// Slider VERTICAL IMAGE End



// EHS CARDS
document.addEventListener('DOMContentLoaded', function () {
    const ehsLeftCards = document.querySelectorAll('.ehs-left-card');
    const ehsCards = document.querySelectorAll('.ehs-card');
    const ehsDescriptions = document.querySelectorAll('.ehs-description');
    const ehsSlider = document.querySelector('.ehs-slider');
    const ehsPrevBtn = document.getElementById('ehs-prev');
    const ehsNextBtn = document.getElementById('ehs-next');
    let currentIndex = 0;

    function updateLeftCardText(index) {
        ehsLeftCards.forEach((card, i) => {
            card.classList.toggle('active', i === index);
        });
    }

    function updateCardDescription(index) {
        ehsDescriptions.forEach((desc, i) => {
            desc.style.display = i === index ? 'block' : 'none';
        });
    }

    function scrollToCard(index) {
        const cardWidth = ehsCards[0].offsetWidth;
        ehsSlider.style.transform = `translateX(-${cardWidth * index}px)`;
        updateLeftCardText(index);
        updateCardDescription(index);
    }

    function handleSliderClick(event) {
        if (event.target === ehsPrevBtn) {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : ehsCards.length - 1;
        } else if (event.target === ehsNextBtn) {
            currentIndex = (currentIndex < ehsCards.length - 1) ? currentIndex + 1 : 0;
        }
        scrollToCard(currentIndex);
    }

    ehsPrevBtn.addEventListener('click', handleSliderClick);
    ehsNextBtn.addEventListener('click', handleSliderClick);

    scrollToCard(currentIndex);
});

// EHS CARd END




// SPECIAL FAQ
document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.special-faq-question');

    function toggleFAQ(event) {
        const clickedQuestion = event.currentTarget;
        const answer = clickedQuestion.nextElementSibling;

        clickedQuestion.classList.toggle('active');

        if (answer.classList.contains('expanded')) {
            answer.classList.remove('expanded');
        } else {
            document.querySelectorAll('.special-faq-answer').forEach(a => {
                if (a !== answer) {
                    a.classList.remove('expanded');
                    a.previousElementSibling.classList.remove('active');
                }
            });

            answer.classList.add('expanded');
        }
    }

    faqQuestions.forEach(question => {
        question.addEventListener('click', toggleFAQ);
    });
});
// SPECIAL FAQ PORTION END





// BSPECIAL SLIDE
const slides = document.querySelectorAll('.bslide');
const textBox = document.getElementById('bspecial-img-text-box');
const textItems = document.querySelectorAll('#bspecial-all-container-left h5, #bspecial-all-container-mid h5');
let currentIndex = 0;

function changeSlide(index) {
    const currentSlide = slides[currentIndex].querySelector('img');
    currentSlide.classList.add('blur');
    textBox.classList.add('fade-out');

    setTimeout(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = index;
        slides[currentIndex].classList.add('active');
        
        const newSlide = slides[currentIndex].querySelector('img');
        newSlide.classList.remove('blur');

        const newText = textItems[index].getAttribute('data-text');
        textBox.innerText = newText;
        textBox.classList.remove('fade-out');
    }, 500); 
}

textItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        const index = item.getAttribute('data-index');
        changeSlide(index);
    });
});


// BSPECIAL SLIDE END



// OUR PRODUCT
const productItems = document.querySelectorAll('#ourProduct-bottom-left-top-li');

const rightImg1 = document.getElementById('right-img-1');
const rightImg2 = document.getElementById('right-img-2');

function updateImages(item) {
    const images = item.getAttribute('data-images').split(',');
    const imageUrl1 = images[0].trim(); 
    const imageUrl2 = images[1].trim(); 
    
    rightImg1.style.filter = 'blur(8px)';
    rightImg2.style.filter = 'blur(8px)';
    
    setTimeout(() => {
        rightImg1.src = imageUrl1;
        rightImg2.src = imageUrl2;
        rightImg1.style.filter = 'blur(0)';
        rightImg2.style.filter = 'blur(0)';
    }, 500); 
}

if (productItems.length > 0) {
    updateImages(productItems[0]); 
}

productItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        updateImages(item); 
    });
});
// OUR PRODUCT END



// OUR PRODUCT ACCORDIANS
document.querySelectorAll('.ourProduct-accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');

        const accordionContent = button.nextElementSibling;

        if (accordionContent.style.display === "block") {
            accordionContent.style.display = "none";
        } else {
            accordionContent.style.display = "block";
        }
    });
});

// OUR PRODUCT ACCORDIANS END



// CHAT BOX Open Close
let chatboxOpen = false;

document.getElementById('sticky-message-box').addEventListener('click', function() {
    const chatbox = document.getElementById('chatbox');
    if (!chatboxOpen) {
        chatbox.classList.add('active');
        chatboxOpen = true;
    } else {
        chatbox.classList.remove('active');
        chatboxOpen = false;
    }
});

document.getElementById('send-button').addEventListener('click', function() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (message) {
        const messagesContainer = document.getElementById('messages');
        
        const userMessage = document.createElement('div');
        userMessage.className = 'message';
        userMessage.textContent = message;
        messagesContainer.appendChild(userMessage);
        
        const replyMessage = document.createElement('div');
        replyMessage.className = 'reply';
        replyMessage.textContent = 'Thanks For Contacting Us ';
        replyMessage.style.backgroundColor = 'orangered';
        replyMessage.style.color = 'white';
        replyMessage.style.padding = '10px';
        replyMessage.style.borderRadius = '5px';
        replyMessage.style.marginTop = '10px';
        messagesContainer.appendChild(replyMessage);

        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        input.value = '';
    }
});

// CHAT BOX Open Close END



// Counting Number
document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.counting-number');

    function startCounting(element, targetNumber) {
        let currentNumber = 0;
        const interval = 50; 
        const step = targetNumber / (2000 / interval); 

        const counter = setInterval(() => {
            currentNumber += step;
            if (currentNumber >= targetNumber) {
                currentNumber = targetNumber;
                clearInterval(counter);
            }
            
            if (targetNumber % 1 !== 0) {
                element.textContent = currentNumber.toFixed(1);
            } else {
                element.textContent = Math.round(currentNumber); x
            }
        }, interval);
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const targetNumber = parseFloat(element.getAttribute('data-target'));
                startCounting(element, targetNumber);
                observer.unobserve(element); 
            }
        });
    }, { threshold: 0.5 });
    counters.forEach(counter => {
        observer.observe(counter);
    });
});

// Counting Number End





// PRE LOADER

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
        document.body.style.overflow = 'auto'; 
    }, 3000); // 3 seconds
});


// PRE LOADER END





// NAVBAR COLOR
document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');
    var navbarCollapse = document.querySelector('.navbar-collapse');
    var navLinks = document.querySelectorAll('.nav-link');
    var navbarToggler = document.querySelector('.navbar-toggler');
    var logo = document.getElementById('logo');

    var aboutContainer = document.getElementById('about-container');
    var harnessContainer = document.getElementById('harness-container');
    var supportingContainer = document.getElementById('supporting-container');
    var platformMainContainer = document.getElementById('platform-main-container');
    var mapMainContainer = document.getElementById('map-main-container');
    var ehsMainContainer = document.getElementById('ehs-main-container'); 
    var ourProductMainContainer = document.getElementById('ourProduct-main-container'); 
    var footerMainContainer = document.getElementById('footer-main-container'); 

    function updateNavbarStyle() {
        var navbarRect = navbar.getBoundingClientRect();
        var aboutContainerRect = aboutContainer.getBoundingClientRect();
        var harnessContainerRect = harnessContainer.getBoundingClientRect();
        var supportingContainerRect = supportingContainer.getBoundingClientRect();
        var platformMainContainerRect = platformMainContainer.getBoundingClientRect();
        var mapMainContainerRect = mapMainContainer.getBoundingClientRect();
        var ehsMainContainerRect = ehsMainContainer.getBoundingClientRect(); 
        var ourProductMainContainerRect = ourProductMainContainer.getBoundingClientRect(); 
        var footerMainContainerRect = footerMainContainer.getBoundingClientRect(); 

        var isTouchingAbout = navbarRect.bottom > aboutContainerRect.top && navbarRect.top < aboutContainerRect.bottom;
        var isTouchingHarness = navbarRect.bottom > harnessContainerRect.top && navbarRect.top < harnessContainerRect.bottom;
        var isTouchingSupporting = navbarRect.bottom > supportingContainerRect.top && navbarRect.top < supportingContainerRect.bottom;
        var isTouchingPlatform = navbarRect.bottom > platformMainContainerRect.top && navbarRect.top < platformMainContainerRect.bottom;
        var isTouchingMap = navbarRect.bottom > mapMainContainerRect.top && navbarRect.top < mapMainContainerRect.bottom;
        var isTouchingEHS = navbarRect.bottom > ehsMainContainerRect.top && navbarRect.top < ehsMainContainerRect.bottom; 
        var isTouchingOurProduct = navbarRect.bottom > ourProductMainContainerRect.top && navbarRect.top < ourProductMainContainerRect.bottom; 
        var isTouchingFooter = navbarRect.bottom > footerMainContainerRect.top && navbarRect.top < footerMainContainerRect.bottom; 

        if (isTouchingAbout || isTouchingHarness || isTouchingSupporting || isTouchingPlatform || isTouchingMap || isTouchingEHS || isTouchingOurProduct || isTouchingFooter) {
            navbar.style.backgroundColor = 'black';
            navbar.style.setProperty('background-color', 'black', 'important');
            if (navbarCollapse) {
                navbarCollapse.style.backgroundColor = 'black';
                navbarCollapse.style.setProperty('background-color', 'black', 'important');
            }
            if (navbarToggler) {
                navbarToggler.style.color = 'white'; 
                navbarToggler.style.setProperty('color', 'white', 'important');
            }
            navLinks.forEach(function(link) {
                link.style.color = 'white';
            });
            if (logo) {
                logo.src = 'logo white.svg'; // Change to your dark-themed logo image
            }
        } else {
            navbar.style.backgroundColor = '';
            navbar.style.setProperty('background-color', '', 'important');
            if (navbarCollapse) {
                navbarCollapse.style.backgroundColor = '';
                navbarCollapse.style.setProperty('background-color', '', 'important');
            }
            if (navbarToggler) {
                navbarToggler.style.color = ''; 
                navbarToggler.style.setProperty('color', '', 'important');
            }
            navLinks.forEach(function(link) {
                link.style.color = '';
            });
            if (logo) {
                logo.src = 'logo.svg'; // Revert to your original logo image
            }
        }
    }

    updateNavbarStyle();

    window.addEventListener('scroll', updateNavbarStyle);

    window.addEventListener('resize', updateNavbarStyle);
});
