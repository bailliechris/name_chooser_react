import axios from 'axios';

// URL for easier bulk changes!
const db_url = 'http://localhost:5000';

// Thunk compatible login
export function login(details) {
/*    let data = {
        email: user,
        pw: password
    }
    */
    console.log('Invoking login');

    return new Promise((resolve) => {
        resolve(axios.post(db_url + '/users/login', details))
    });
}

// Register a new user
export function register(details) {
    console.log('Creating new user');

    return new Promise((resolve) => {
        resolve(axios.post(db_url + 'users/register', details))
    });
}

export async function loginGoogle() {
    const res = await axios.get(db_url + '/auth/google');

    return res.data;
}

// Logout route
export function logoutUser() {

    console.log('Creating logout promise');
    return new Promise((resolve) => {
        resolve(axios.get(db_url + '/users/logout'));
    });
}

// A mock function to mimic making an async request for data
/*export function fetchCount(amount = 1) {
    return new Promise((resolve) =>
      setTimeout(() => resolve({ data: amount }), 500)
    );
  }
  
*/