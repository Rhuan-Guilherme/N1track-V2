const API_URL = 'http://localhost/API';
// const API_URL = 'https://roadtrack.com.br/API'

export function POST_TOKEN(body) {
  return {
    url: API_URL + '/login',
    options: {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function POST_VALIDATE_TOKEN(token) {
  return {
    url: API_URL + '/validate',
    options: {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(token),
    },
  };
}

export function GET_USER(token) {
  return {
    url: API_URL + '/validate',
    options: {
      method: 'GET',
      headers: {
        Authorization: token,
      },
    },
  };
}

export function POST_CADASTRO(body) {
  return {
    url: API_URL + '/cadastro',
    options: {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function POST_RETURN_USERS(termo) {
  return {
    url: API_URL + '/usuarios',
    options: {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(termo),
    },
  };
}
