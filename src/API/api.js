const API_URL = 'http://localhost/API';
// const API_URL = 'https://roadtrack.com.br/API'

export function GET_TOKEN(body) {
  return {
    url: API_URL + '/login',
    options: {
      method: 'POST',
      header: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
