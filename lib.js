const url = require('url');
const qs = require('querystring');

const queryLines = function (parsedQuery) {
    return parsedQuery ? Object.keys(parsedQuery).sort().map(k => `${k}=${parsedQuery[k]}`).join('\n') : '';
};

const clean = function (obj) {
    return Object.keys(obj)
        .reduce((res, key) => (res[key] = obj[key] || '', res), {});
};

const isEmpty = obj => Object.keys(obj).length === 0;

const fqs = function (input) {
    const u = clean(url.parse(input, true));
    const hash = qs.parse(u.hash.replace('#', ''));
    if (!u.protocol) {
    	return '';
    } else {
	    return [`${u.protocol}//${u.auth}${u.host}${u.pathname}${!isEmpty(u.query) ? '?' : ''}`,
	    	u.query ? queryLines(u.query) : '',
	    	!isEmpty(hash) ? '#' + queryLines(hash) : ''
	    ].filter(line => line.length > 0).join('\n');
    }
};

module.exports = fqs;
