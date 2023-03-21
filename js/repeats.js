// Navbar
const navBarContainer = document.getElementById('navBarContainer');
let currentPage = window.location.pathname.split("/").pop();
const url = currentPage==='index.html' ? '' : '../index.html';

navBarContainer.innerHTML =  `    
<a href='${url}' ><p class="logo">Olha Leskiv</p><a>
<div class="nav-items">
    <a href="${url}#philosophy"><p>Philosophy</p></a>
    <a href="${url}#robopay"><p>Projects</p></a>
    <a href="#"><p>Download CV</p></a>
    <p>|</p>
    <a href="#" onclick="openContacts()" ><p>Contact me</p></a>
</div>
`

// Similar Cases
const casesInfo = {
    handprinter: {
        title: 'Handprinter',
        img: {url: '../sources/covers/handprinter@2x.png', alt: ''},
        type: 'UI/UX Desing',
        link: 'handprinter.html'
    },
    rxnumerix: {
        title: 'Rx Numerix',
        img: {url: '../sources/covers/numerix@2x.png', alt: ''},
        type: 'UI/UX Desing, Illustration',
        link: 'handprinter.html'
    },
    xteam: {
        title: 'X-Team',
        img: {url: '../sources/covers/x-team@2x.svg', alt: ''},
        type: 'Illustration',
        link: 'x-team.html'
    },
    competera: {
        title: 'Competera',
        img: {url: '../sources/covers/competera@2x.png', alt: ''},
        type: 'UI Design, Design System, Animation',
        link: 'competera.html'
    },
    kwebbl: {
        title: 'Kwebbl',
        img: {url: '../sources/covers/kwebbl@2x.svg', alt: ''},
        type: 'Illustration, animation',
        link: 'kwebbl.html'
    },
    robopay: {
        title: 'Robopay',
        img: {url: '../sources/covers/robopay@2x.png', alt: ''},
        type: 'UI/UX Desing',
        link: 'handprinter.html'
    },
    tastydays: {
        title: 'Tasty Days',
        img: {url: '../sources/covers/tasty-days@2x.png', alt: ''},
        type: 'Illustration',
        link: 'handprinter.html'
    },
    chordy: {
        title: 'Chordy',
        img: {url: '../sources/covers/chordy.png', alt: ''},
        type: 'UI/UX Desing',
        link: 'handprinter.html'
    },
}
const similarCasesContainer = document.getElementById('similarCases');
if(similarCasesContainer) {
    window.onload = distributeCases();
}

function distributeCases() {
    const pageName = similarCasesContainer.title;
    let left;
    let right;

    switch(pageName) {
        case 'handprinter': 
            left = casesInfo.kwebbl;
            right = casesInfo.competera;
            break;
        case 'competera': 
            left = casesInfo.kwebbl;
            right = casesInfo.handprinter;
            break;
        case 'x-team':
            left = casesInfo.kwebbl;
            right = casesInfo.handprinter;
            break;
        case 'kwebbl':
            left = casesInfo.xteam;
            right = casesInfo.competera;
            break;
        case 'rx-numerix':
            left = casesInfo.handprinter;
            right = casesInfo.competera;
            break;
    }

    similarCasesContainer.innerHTML = ` 
    <div class="container">
        <div class="similar-cases__inner">
            <a href="${left.link}">
                <div class="similar-case">
                    <img src="${left.img.url}" alt="${left.img.alt}">
                    <h3>${left.title}</h3>
                    <h6>${left.type}</h6>
                </div>
            </a>
            <a href="${right.link}">
                <div class="similar-case">
                    <img src="${right.img.url}" alt="${right.img.alt}">
                    <h3>${right.title}</h3>
                    <h6>${right.type}</h6>
                </div>
            </a>
        </div>
    </div>`
}

// CTA
const ctaContainer = document.getElementById('cta');
const cta =  ` 
<div class="container">
    <div class="cta__inner">
        <h3>
            Let's get in touch <br>
            <a href="mailto:hello.leskiv@gmail.com">hello.leskiv@gmail.com</a>
        </h3>
        <div class="cta-social">
            <a href="https://www.behance.net/olleskiv" target="_blank">Behance</a>•<a href="https://www.facebook.com/profile.php?id=100004758335422" target="_blank">Facebook</a>•<a href="https://www.linkedin.com/in/olha-leskiv-606022101/" target="_blank">LinkedIn</a>
        </div>
    </div>
</div>`;
if(ctaContainer) {
    ctaContainer.innerHTML = cta;
}

// Popup
let contacts = document.createElement('section');
contacts.className = 'popup cta unvisible';
contacts.innerHTML = `
    <div class="container">
        <div class="cta__inner">
            <h3>
                Let's get in touch <br>
                <a href="mailto:hello.leskiv@gmail.com">hello.leskiv@gmail.com</a>
            </h3>
            <div class="cta-social">
                <a href="https://www.behance.net/olleskiv" target="_blank">Behance</a>•<a href="https://www.facebook.com/profile.php?id=100004758335422" target="_blank">Facebook</a>•<a href="https://www.linkedin.com/in/olha-leskiv-606022101/" target="_blank">LinkedIn</a>
            </div>
        </div>
    </div>
    <svg onclick="closeContacts()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
`

document.body.prepend(contacts);


function openContacts(e) {
    document.querySelector('.popup').classList.remove('unvisible');
    document.querySelector('nav').classList.add('hidden');
    e.preventDeault();
}

function closeContacts() {
    document.querySelector('.popup').classList.add('unvisible');
    document.querySelector('nav').classList.remove('hidden');
    e.preventDeault();
}