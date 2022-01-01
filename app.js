const p = document.querySelector('.text');
const btn = document.querySelector('#click');

btn.addEventListener('click', () => {
	p.innerHTML = `<h3>Hello, World!</h3>`;
});
