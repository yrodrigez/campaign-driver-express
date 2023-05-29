export default function buildMakeCredentials() {
  return function makeCredentials({sessionToken, securityToken}) {
    if (!sessionToken) throw new Error('Session token must be defined!')
    if (!securityToken) throw new Error('Security token must be defined!')

    return Object.freeze({
      getSessionToken: () => sessionToken,
      getSecurityToken: () => securityToken
    })
  }
}