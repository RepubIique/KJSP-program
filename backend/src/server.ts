/**
 * Starts the application on the port specified.
 */
require('dotenv').config();

import api from './api';

const PORT = process.env.PORT || 8081;

api.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
