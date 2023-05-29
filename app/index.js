import express from 'express'
import ACRouter from "./controllers/adobe-campaign/index.js";
import httpContext from 'express-http-context';

const app = express();

app.use(httpContext.middleware);

const PORT = 5000
app.use(express.json())
app.use('/:version/:clientId/adobeCampaign/', (req, res, next) => {
  httpContext.set('version', req.params.version)
  httpContext.set('organization', req.params.clientId)
  next()
})
app.use('/:version/:clientId/adobeCampaign/', ACRouter)
app.get('/test', req => req.send('hello'))
app.listen(PORT, () => {
  console.log(`CampaignDriver Running on PORT ${PORT}`);
})
