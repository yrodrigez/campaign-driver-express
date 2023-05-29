export default function buildMakeHostService() {
  return function makeHostService() {
    return Object.freeze({getHost})

    function getHost({organization}) {
      if(!organization) throw new Error('The organization is mandatory')
      if(organization) return 'http://localhost:8082'
    }
  }
}