let backendHost;

const hostname = window && window.location && window.location.hostname;
console.log('hostname', hostname);
if (hostname === 'production url') {
  backendHost = 'production host';
} else if (hostname === 'launcherrocket-c3000.firebaseapp.com') {
  backendHost = 'http://api-dev.launchrocketapp.com/api';
} else {
  backendHost = 'http://api-dev.launchrocketapp.com/api';
}

export const apiUrl = backendHost;
