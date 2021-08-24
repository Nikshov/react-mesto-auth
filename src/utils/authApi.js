export default function authApi() {
  const _baseUrl = "https://auth.nomoreparties.co";
  const _contentType = "application/json";


  function _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  function signIn({ password, email, }) {
    return fetch(`${_baseUrl}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": _contentType,
      },
      body: JSON.stringify({
        "password": password,
        "email": email
      })
    })
    .then(_checkResponse(res))
  }

  function signUp({ password, email, }) {
    return fetch(`${_baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": _contentType,
      },
      body: JSON.stringify({
        "password": password,
        "email": email
      })
    })
    .then(_checkResponse(res))
  }

  function checkJWT(JWT) {
    return fetch(`${_baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": _contentType,
        "Authorization" : `Bearer ${JWT}`
      },
    })
    .then(_checkResponse(res))
  }
}


