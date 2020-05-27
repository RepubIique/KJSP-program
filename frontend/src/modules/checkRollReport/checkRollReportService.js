import authAxios from 'modules/shared/axios/authAxios';

export default class checkRollReportService {
















  static async findAndCountAll(filter, orderBy, limit, offset) {
    const query = {
      filter,
      orderBy,
      limit,
      offset,
    };

    const response = await authAxios.get('/checkRollReport', {
      params: query,
    });

    return response.data;
  }
}
