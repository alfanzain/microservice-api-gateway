const apiAdapter = require('../../../apiAdapter');
const { URL_SERVICE_COURSE } = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
  try {
    const courseImage = await api.post('/api/courses/images/', req.body);
    
    return res.json(courseImage.data);
  } catch (err) {
    if (err.code === 'ECONNREFUSED') {
      return res.status(500).json({ 
        status: 'error',
        message: 'Service unavailable'
      })
    }

    const { status, data } = err.response;

    return res.status(status).json(data);
  }
};