import { API_URL } from "../constants";

export async function getMenu() {
  try {
    const response = await fetch(`http://localhost:8000/guidelines/menus`);

    return await response.json();
  } catch(error) {
    console.error('fetch error', error);
  }
}

export async function getTest() {
  try { 
    const response = await fetch(`http://localhost:8000`)

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  } catch(error) {
    console.error('Fetch error:', error);
  }
  
}