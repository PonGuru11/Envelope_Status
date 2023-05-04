const axios = require('axios');
const DAO = require('../DAO/DAO.js');

exports.getEnvelopeRecipients = async (envelopeId) => {
    const statusResponse = await axios.get(
        DAO.getEnvelopeApiUrl(envelopeId),
        { headers: DAO.getStatusApiHeaders() }
    );
    return statusResponse.data;
}
