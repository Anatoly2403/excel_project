import './module';
import '@/styles/main.scss';

console.log('working');

async function start() {
  return await Promise.resolve('asdasd');
}

start().then(console.log);
