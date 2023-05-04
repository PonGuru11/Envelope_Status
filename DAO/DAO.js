const baseUrl = 'https://demo.docusign.net/restapi';
const apiVersion = 'v2.1';
const accountId = 'f7d73706-d8bf-4e68-994b-780cb218aa66'//process.env.accountId;

const axios = require('axios');
let accessToken = null;

const fetchAccessToken = async () => {
    try {
        const response = await axios.post('https://elon-jwt.onrender.com/oauth/token');
        accessToken = response.data.access_token;
    } catch (error) {
        console.error(error);
    }
};

fetchAccessToken();

exports.getEnvelopeApiUrl = (envelopeId) => `${baseUrl}/${apiVersion}/accounts/${accountId}/envelopes/${envelopeId}/recipients`;

exports.getStatusApiHeaders = () => ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
});
