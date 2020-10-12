import {
    makeAutoObservable
} from 'mobx'


class ChatListStore {

    chatlist = [{
            title: 'Saved Messages',
            text: '@Mofidsecurities @Mofidsecurities',
            messageCount: '108',
            time: '12:01'
        },
        {
            title: 'Dr. AliRezaee',
            text: 'سلام درخواست مشاوره برای امور پزشکی دارم',
            messageCount: '2',
            time: '12:02'
        },
        {
            title: 'MTProto Proxies',
            text: 'فوری انجام امور ارزی',
            messageCount: '3',
            time: '12:03'
        },
        {
            title: 'melobit',
            text: 'مجموعه‌ای از موزیک‌های لایت',
            messageCount: '4',
            time: '12:04'
        },
        {
            title: 'ربات دانشجو',
            text: 'اخبار کلاس‌ها: اصلاحیه: کد سمالایو دانشجویان تغییر یافت',
            messageCount: '5',
            time: '12:05'
        },
        {
            title: 'Telegram',
            text: 'Search Filters, Anonymous Admins,',
            messageCount: '6',
            time: '12:06'
        },
        {
            title: 'Mina',
            text: 'ارسال ایمیل از طریق لینک زیر امکان پذیر است',
            messageCount: '7',
            time: '12:07'
        },
        {
            title: 'بورس ایران',
            text: 'شاخص بورس امروز 12 مرداد',
            messageCount: '8',
            time: '12:08'
        },
        {
            title: 'کاربر شماره 9',
            text: 'سلام9 درخواست مشاوره دارم',
            messageCount: '9',
            time: '12:09'
        },

    ]

    constructor() {
        makeAutoObservable(this);
    }

    addtoChatList(title, text, messageCount, time) {
        this.chatList.push({
            title: title,
            text: text,
            messageCount: messageCount,
            time: time
        })
    }
}

export default ChatListStore