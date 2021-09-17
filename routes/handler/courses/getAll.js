const apiAdapter = require('../../apiAdapter');
const { URL_SERVICE_COURSE } = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
  try {
    const courses = await api.get('/api/courses/');
    
    return res.json(courses.data);
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