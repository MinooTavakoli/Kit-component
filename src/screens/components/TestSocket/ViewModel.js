import { makeAutoObservable } from 'mobx';
import resolve from 'resolve';
import CaseInboxSerive from './CaseInboxSerive';

class CaseInboxViewModel {
    list = []
    constructor() {
        this.service = new CaseInboxSerive();
        this.getList().then((list) => this.setList(list));
    }
    getList() {
        return new Promise((resolve, reject) => {
            this.service.recivedChat().then((chatList) => {
                resolve(chatList)
            }).catch((err) => {
                reject();
                // throw new AppError('خطا', { show: true });
            })
        })
    }
    setList(chatList) {
        chatList.groups.forEach((caseItem) => {
            const newmsg = {
                title: caseItem.fname,
                text: caseItem.lastmessage.msg,
                messageCount: caseItem.msgs,

            }
            this.addtolist(newmsg)
        });
    }
    addtolist({ title, text, messageCount, id }) {
        this.list.push({
            title: title,
            text: text,
            messageCount: messageCount,
            id: id
        })
    }
}


export default CaseInboxViewModel;
