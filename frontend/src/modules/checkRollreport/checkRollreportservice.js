import authAxios from 'modules/shared/axios/authAxios';

export default class checkRollreportService {
















  static async findAndCountAll(filter, orderBy, limit, offset) {
    const query = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await authAxios.get('/checkRollreport', {
      params: query,
    });

    return response.data;
  }
}
