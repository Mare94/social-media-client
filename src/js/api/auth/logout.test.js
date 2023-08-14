import { logout } from './logout.js';
import { mockStorage } from '../../storage/mockStorage.js';

const accessToken = 'access';
const fakeUser = {
  name: 'User name',
  email: 'student@stud.noroff.no',
};

window.localStorage = new mockStorage();

describe('logout', () => {
  it('Returns a valid token from localstorage and removes it', () => {
    localStorage.setItem('profile', JSON.stringify(fakeUser));
    localStorage.setItem('token', JSON.stringify(accessToken));
    logout();
    expect(localStorage.getItem('profile')).toEqual(null);
    expect(localStorage.getItem('token')).toEqual(null);
  });
});
