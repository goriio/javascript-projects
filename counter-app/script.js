let count = 0;
let color = 'black';

const value = document.querySelector('#value');
const btnElements = document.querySelectorAll('.btn');

btnElements.forEach((btnElement) => {
    btnElement.addEventListener('click', (e) => {
        const btn = e.currentTarget.classList;

        if (btn.contains('decrease')) {
            count--;
        }
        else if (btn.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }

        if (count > 0) {
            color = 'green';
        }
        else if (count < 0) {
            color = 'red';
        }
        else {
            color = 'black';
        }

        value.textContent = count;
        value.style.color = color;
    });
});