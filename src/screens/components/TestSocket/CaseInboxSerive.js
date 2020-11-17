import { axiosTest } from 'module';

class CaseInboxService {
    receivedChat(phone) {
        return new Promise((resolve, reject) => {
            axiosTest({
                url: `http://......=${phone}`,
                method: 'GET',
                headers: {
                    'X-Auth-Token': `.....`,
                    'X-User-Id': `...`,

                }
            }).then(res => {
                resolve(res.data);
            }).catch((err) => {
                reject(err);
            })
        })
    }
}