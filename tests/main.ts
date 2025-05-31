import bookmarklet from './hello-world.ts?bookmarklet';

const a = document.createElement('a');
a.href = bookmarklet;
a.textContent = 'Click';
document.body.appendChild(a);
