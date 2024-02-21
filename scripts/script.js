const a = document.querySelector('.header__btn');
a.addEventListener('click', () => {
    alert('You must log into your account!');
});

const buttons = document.querySelectorAll('.discover__button');
const cards = document.querySelectorAll('.discover__cards');

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        buttons.forEach(btn => {
            btn.classList.remove('active');
        });

        const cardFor = button.dataset.for;

        cards.forEach(card => {
            card.classList.remove('active');
            const tab = card.dataset.tab;
            if (tab === cardFor) {
                card.classList.add('active');
            }
        });

        button.classList.add('active');
    });
});

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        buttons.forEach(btn => {
            btn.classList.remove('active');
        });

        const cardFor = button.dataset.for;

        cards.forEach(card => {
            card.classList.remove('active');
            const tab = card.dataset.tab;
            if (tab === cardFor) {
                card.classList.add('active');
            }
        });

        button.classList.add('active');
    });
});




const chooseCourse = document.querySelector('.Link_1');
chooseCourse.addEventListener('click', function(event) {
    event.preventDefault();
    const discoverCard = document.querySelector('.discover');
    discoverCard.scrollIntoView({ behavior: 'smooth' });

});


const signInLink = document.querySelector('.header__link_2');
signInLink.addEventListener('click', function(event) {
    event.preventDefault();
    const findProgramSection = document.querySelector('.find__program');
    findProgramSection.scrollIntoView({ behavior: 'smooth' });

});


const chooseTeacher = document.querySelector('.Link_2');
chooseTeacher.addEventListener('click', function(event) {
    event.preventDefault();
    const teacherCard = document.querySelector('.teachers');
    teacherCard.scrollIntoView({ behavior: 'smooth' });

});
const chooseCourseSign = document.querySelector('.offer__button');
chooseCourseSign.addEventListener('click', function(event) {
    event.preventDefault();
    const courseButton = document.querySelector('.find__program');
    courseButton.scrollIntoView({ behavior: 'smooth' });

});











