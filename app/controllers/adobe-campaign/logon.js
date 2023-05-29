export default function makeAdobeCampaignLogon({logon}) {
  return async function ({body, organization}) {
    const headers = {
      'Content-Type': 'application/json'
    }

    try {
      const {username, password} = body
      const credentials = await logon({username, password, organization})
      return {
        headers,
        statusCode: 200,
        body: {credentials}
      }
    } catch (e) {
      return {
        headers,
        statusCode: 500,
        body: {error: true, message: e.message}
      }
    }
  }
}