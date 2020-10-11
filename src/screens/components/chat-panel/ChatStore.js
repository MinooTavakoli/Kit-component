import {
    makeAutoObservable
} from 'mobx'

class ChatStore {
    chat = "";
    chatList = [{
            text: 'سلام میخواستم راجع به طلاق مشاوره بگیرم',
            type: 'SAY',
            date: '12 خرداد 1399'
        },
        {
            text: 'اسکن سند ازدواج',
            type: 'REPLY',
            date: '12 خرداد 1399'
        },
    ]

    constructor() {
        makeAutoObservable(this);
    }

    onSendButtonClick() {
        this.addToChatList(this.chat, 'SAY', '12 خرداد 1399')
        this.emptyChatText()
    }

    onReplyButtonClick() {
        this.addToChatList(this.chat, 'REPLY', '12 خرداد 1399')
        this.emptyChatText()
    }

    emptyChatText() {
        this.chat = ""
    }

    addToChatList(text, type, date) {
        this.chatList.push({
            text: text,
            type: type,
            date: date
        })
    }

    updateChat = (newchat) => {
        this.chat = newchat
    }
}

export default ChatStore