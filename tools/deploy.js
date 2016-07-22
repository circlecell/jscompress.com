import { scp } from 'scp2';
const { ENV_DEPLOY_USER, ENV_DEPLOY_PASSWORD } = process.env;

scp('dist/', {
	port: 22,
	host: '192.241.157.86',
	username: ENV_DEPLOY_USER,
	password: ENV_DEPLOY_PASSWORD,
	path: '/var/web/jscompress.com/'
}, err => {
	if (err) {
		throw err;
	}
});
