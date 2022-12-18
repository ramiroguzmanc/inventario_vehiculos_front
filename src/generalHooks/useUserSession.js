// Este hook chequea si hay una sesión y retorna el Token correspondiente en caso de existir
export const useUserSession = () => {
  let userToken = ''
  const userCredentials = window.localStorage.getItem('userCredentials')
  if (userCredentials) {
    const { token } = JSON.parse(userCredentials)
    userToken = token
  }

  return ({ userToken })
}
