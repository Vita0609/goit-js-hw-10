import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const delay = document.querySelector('input[type="number"]');

const form = document.querySelector('form');

function createPromise(value, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
form.addEventListener('submit', e => {
  e.preventDefault();
  const delayValue = parseInt(delay.value);
  const radio = document.querySelector('input[type="radio"]:checked');
  const selectedValue = radio.value;
  createPromise(selectedValue, delayValue)
    .then(delay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});
