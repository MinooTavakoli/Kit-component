import {
    makeAutoObservable
} from "mobx";


class ChatStore {
    chat = "";
    chatList = [
        {
            text: 'در مجموعه ترجمه تخصصی ایرانیان این اطمینان را به شما می دهد.',
            type: 'SAY'
        },

        {
            text: 'در مجموعه ترجمه تخصصی ایرانیان این اطمینان را به شما می دهد.',
            type: 'REPLY'
        },
        {
            text: 'در مجموعه ترجمه تخصصی ایرانیان این اطمینان را به شما می دهد.',
            type: 'SAY'
        },

        {
            text: 'در مجموعه ترجمه تخصصی ایرانیان این اطمینان را به شما می دهد.',
            type: 'REPLY'
        },
        {
            text: 'در مجموعه ترجمه تخصصی ایرانیان این اطمینان را به شما می دهد.',
            type: 'SAY'
        },

        {
            text: 'در مجموعه ترجمه تخصصی ایرانیان این اطمینان را به شما می دهد.',
            type: 'REPLY'
        },
    ]

    onSendButtonClick() {
        this.addtochatlist(this.chat,'SAY')
        this.emptyChatText()
    }

    addtochatlist(text,type) {
        this.chatList.push({
            text: text,
            type: type
        });

    }

    emptyChatText() {
        this.chat = ""
    }

    constructor() {
        makeAutoObservable(this);
    }

    updateChat = (newChat) => {
        // debugger;
        this.chat = newChat;

    }
}

export default ChatStore