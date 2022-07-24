class authAPI {
  constructor(baseURL, headers) {
    this._baseURL = baseURL;
  }

  _handleResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  }

  registerNewUser = (data) => {
    const { email, password } = data;
    return fetch(`${this._baseURL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this._handleResponse);
  };

  login = (data) => {
    const { email, password } = data;
    return fetch(`${this._baseURL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this._handleResponse);
  };

  checkToken = (token) => {
    return fetch(`${this._baseURL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._handleResponse);
  };
}

const authApi = new authAPI("https://auth.nomoreparties.co");

export default authApi;
