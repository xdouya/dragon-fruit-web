import Cookies from 'js-cookie'

const TokenKey = 'X-Access-Token'
const UserName = 'username'
const PassWord = 'password'
const RememberMe = 'rememberMe'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUserName() {
  return Cookies.get(UserName)
}

export function setUserName(username) {
  return Cookies.set(UserName, username)
}

export function removeUserName() {
  return Cookies.remove(UserName)
}

export function getPassword() {
  return Cookies.get(PassWord)
}

export function setPassword(password) {
  return Cookies.set(PassWord, password)
}

export function removePassword() {
  return Cookies.remove(PassWord)
}

export function getRememberMe() {
  return Cookies.get(RememberMe)
}

export function setRememberMe(rememberMe) {
  return Cookies.set(RememberMe, rememberMe)
}

export function removeRememberMe() {
  return Cookies.remove(RememberMe)
}

