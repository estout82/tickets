
import { postRequest } from '../store';

export default function() {
    const request = (orderData) => {
        return postRequest({
            endpoint: 'http://localhost:9000/api/order',
            data: {
                orderData
            }
        });
    }

    return {
        request
    }
}