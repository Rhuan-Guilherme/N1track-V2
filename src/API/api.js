// const API_URL = 'http://localhost/API';
const API_URL = 'https://n1track.com.br/API';

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

export function POST_ADD_USERS(body) {
  return {
    url: API_URL + '/usuarios',
    options: {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function GET_VIPS() {
  return {
    url: API_URL + '/vips',
    options: {
      method: 'GET',
    },
  };
}

export function ADD_VIPS(login) {
  return {
    url: API_URL + '/vips',
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(login),
    },
  };
}

export function DELETE_VIPS(id) {
  return {
    url: API_URL + '/vips',
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id),
    },
  };
}

export function POST_TIKCET(body) {
  return {
    url: API_URL + '/tickets',
    options: {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function GET_TIKECTS(id, limit, status) {
  return {
    url: API_URL + `/tickets?id=${id}&limit=${limit}&status=${status}`,
    options: {
      method: 'GET',
    },
  };
}

export function PUT_FECHA_TICKETS(id) {
  return {
    url: API_URL + `/options?id=${id}`,
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ remove: false }),
    },
  };
}

export function PUT_REABRE_TICKETS(id) {
  return {
    url: API_URL + `/options?id=${id}`,
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ remove: true }),
    },
  };
}

export function DELETE_TICKETS(id) {
  return {
    url: API_URL + `/tickets?id=${id}`,
    options: {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}

export function PUT_TICKETS(body) {
  return {
    url: API_URL + '/tickets',
    options: {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function GET_BINDS() {
  return {
    url: API_URL + '/binds',
    options: {
      method: 'GET',
    },
  };
}

export function POST_BINDS(body) {
  return {
    url: API_URL + '/binds',
    options: {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function DELETE_BIND(id) {
  return {
    url: API_URL + `/binds?id=${id}`,
    options: {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}

export function GET_DATA_GRAPICHS() {
  return {
    url: API_URL + '/options',
    options: {
      method: 'GET',
    },
  };
}
