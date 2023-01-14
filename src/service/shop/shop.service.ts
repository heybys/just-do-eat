import httpClient from '../utils/http-client';

class ShopService {
  getMenuBoard = async (shopId: number) => {
    return await httpClient.get('/shop/menu-board', {
      params: {
        shopId,
      },
    });
  };
}

export const shopService = new ShopService();
