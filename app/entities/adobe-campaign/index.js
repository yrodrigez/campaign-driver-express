import buildMakeCredentials from "./credentials.js";

const makeCredentials = buildMakeCredentials()
const adobeCampaignEntities = Object.freeze({makeCredentials})
export default adobeCampaignEntities
export {makeCredentials}