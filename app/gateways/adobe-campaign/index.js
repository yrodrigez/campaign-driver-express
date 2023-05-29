import sdk from '@adobe/acc-js-sdk'
export default function makeAdobeCampaignGateway({hostService}) {
  return Object.freeze({
    logon
  })

  async function logon({username, password, organization}) {
    const host = hostService.getHost({organization})
    const connectionParameters = sdk.ConnectionParameters.ofUserAndPassword(
      host,
      username,
      password
    )

    const client = await sdk.init(connectionParameters)
    await client.logon()

    return ({
      sessionToken: client._sessionToken,
      securityToken: client._securityToken
    })
  }
}