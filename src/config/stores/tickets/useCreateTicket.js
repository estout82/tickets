
import { request } from '../store';

export default function useCreateTicket() {
    const doRequest = ({ title, description, parameters, category }) => {
        // FIXME: use auth user context to determine the creator and organization
        let data = {
            title,
            description,
            parameters,
            category,
            user: '5ef6936f71a9e87d80122bba',        // determined with auth user context
            organization: '5f484ccc436b294af60a9b9e' // determined with auth user context
        }

        return new Promise((resolve, reject) => {
            const endpoint = 'http://localhost:9000/api/ticket/create';

            request(endpoint, {
                method: 'POST',
                data: data
            })
            .then(status => {
                resolve(status);
            })
            .catch(status => {
                reject(status);
            });
        });
    }

    return {
        do: doRequest
    }
}