let APIURL = ''

switch (window.location.hostname) {
    case 'localhost':
    case '127.0.0.1':
        APIURL = 'http://localhost:3000'
        break
        case '<mtwvl-gr-app>.herokuapp.com':
            APIURL = 'https://mwvl-aotd3.herokuapp.com'
}
export default APIURL


