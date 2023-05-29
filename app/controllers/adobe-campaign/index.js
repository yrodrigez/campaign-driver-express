import {Router} from "express";
import {makeExpressCallback} from "../../express-callback.js";
import makeAdobeCampaignLogon from "./logon.js";
import makeAdobeCampaignLogonUseCase from '../../use_cases/adobe-campaign/logon.js'
import {makeAdobeCampaignGateway} from "../../gateways/index.js";
import buildMakeHostService from "../../services/host_service.js";

const makeHostService = buildMakeHostService()
const hostService = makeHostService()
const adobeCampaignGateWay = makeAdobeCampaignGateway({hostService})
const logon = makeAdobeCampaignLogonUseCase({adobeCampaignGateWay})
const logonController = makeAdobeCampaignLogon({logon})

const router = Router()
router.post('/logon', makeExpressCallback(logonController))

export default router