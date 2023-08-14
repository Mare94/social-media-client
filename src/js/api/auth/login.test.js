import { mockStorage } from '../../storage/mockStorage.js';
import { login } from './login.js';

const validEmail = 'student@stud.noroff.no';
const validPassword = '123easypass';
const fakeApi = {
  name: 'User Name',
  email: validEmail,
  accessToken: '123token456',
  password: '123easypass',
};

window.localStorage = new mockStorage();

function successFetch() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'Login was Successful',
    json: () => Promise.resolve(fakeApi),
  });
}

describe('login', () => {
  it('Returns a valid access token in local storage and valid response object', async () => {
    window.fetch = jest.fn(() => successFetch());
    const expectedToken = fakeApi.accessToken;
    const response = await login(validEmail, validPassword);
    expect(JSON.parse(localStorage.getItem('token'))).toEqual(expectedToken);
    expect(response).toEqual(fakeApi);
  });
});
