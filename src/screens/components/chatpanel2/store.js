import {
    makeAutoObservable
} from 'mobx'


class Store {
    chat = "";
    list = [
        {
            text: 'سلام میخواستم راجع به طلاق مشاوره بگیرم',
            type: 'SAY',
            date: '12 خرداد 1399'
        },
        // {
        //     text: 'اسکن سند ازدواج',
        //     type: 'REPLY'
        // },
    ]

    constructor() {
        makeAutoObservable(this);
    }

    onbtnclick() {
        this.addlist(this.chat, 'SAY', '12 خرداد 1399' )
        this.empty()
    }

    empty() {
        this.chat = ""
    }

    addlist(text, type, date) {
        this.list.push({
            text: text,
            type: type,
            date: date
        })
    }

    update = (newchat) => {
        this.chat = newchat
    }
}

export default Store