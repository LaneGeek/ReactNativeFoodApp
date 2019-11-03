import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 76tGNWhdh40kac51O9jtcmCkmUDBbgaBmMipSCMMPRxEiGScATUNYLFatzowz5Pc566aWj3nXuDriLYuQ6g_9W4NdnIyoJ0YvvJ8rUucCHz16ac1ewCr1pdxoMezXXYx'
    }
});
