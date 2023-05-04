const service = require('../service/service.js');

exports.getEnvelopeRecipients = async (req, res) => {
    try {
        const envelopeId = req.params.envelopeId;
        const recipients = await service.getEnvelopeRecipients(envelopeId);
        res.send(recipients);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}
