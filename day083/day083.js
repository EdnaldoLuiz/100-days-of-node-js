import axios from 'axios';
import fetch from 'node-fetch';

async function fetchPostsA() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      console.log('Posts obtidos com Fetch:');
      console.log(data);
    } catch (error) {
      console.error('Erro ao obter posts com Fetch:', error);
    }
  }

async function fetchPostsB() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log('Posts obtidos com Axios:');
    console.log(response.data);
  } catch (error) {
    console.error('Erro ao obter posts com Axios:', error);
  }
}

fetchPostsA();
fetchPostsB();