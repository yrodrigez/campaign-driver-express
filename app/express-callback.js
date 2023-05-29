import httpContext from "express-http-context";
const makeApiVersion = req => {
  const version = httpContext.get('version')
  const organization = httpContext.get('organization')
  return  {
    version,
    organization
  }

  /*const [_, organization, version_format] = (req.get('Accept') || '').split('.')
  if (!version_format) return {}
  const [version, format] = version_format.split('+')
  return {
    version,
    format,
    organization
  }*/
}

const makeHttpRequest = req => ({
  body: req.body,
  query: req.query,
  params: req.params,
  ip: req.ip,
  method: req.method,
  path: req.path,
  url: req.url,
  headers: {
    'Content-Type': req.get('Content-Type'),
    Referer: req.get('referer'),
    'User-Agent': req.get('User-Agent'),
  },
  ...(makeApiVersion(req))
})

export const makeExpressCallback = controller => async (req, res) => {
  const httpRequest = makeHttpRequest(req)

  try {
    const {headers, statusCode, body} = await controller(httpRequest)
    if (headers) res.set(headers)
    res.type('json')
    res.status(statusCode).send(body)
  } catch (e) {
    const {statusCode, message} = e
    res.status(statusCode || 500).send({error: true, message: message || 'An unknown error occurred.'})
  }
}