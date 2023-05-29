export default function makeAdobeCampaignLogon({adobeCampaignGateWay}) {

  return async function logon({username, password, organization}) {
    if (!username) throw new Error('Username is mandatory!')
    if (!password) throw new Error('Password is mandatory!')

    return adobeCampaignGateWay.logon({username, password, organization})
  }
}