import {
    makeAutoObservable
} from 'mobx'

class ChatListStore {

    chatlist = [{
            title: 'Saved Messages',
            text: '@Mofidsecurities @Mofidsecurities',
            messageCount: '10',
            time: '12:01',
            id: 1
        },
        {
            title: 'Dr. AliRezaee',
            text: 'سلام درخواست مشاوره برای امور پزشکی دارم',
            messageCount: '3',
            time: '12:02',
            id: 2
        },
        {
            title: 'MTProto Proxies',
            text: 'فوری انجام امور ارزی',
            messageCount: '17',
            time: '12:03',
            id: 3
        },
        {
            title: 'melobit',
            text: 'مجموعه‌ای از موزیک‌های لایت',
            messageCount: '41',
            time: '12:04',
            id: 4
        },
        {
            title: 'ربات دانشجو',
            text: 'اخبار کلاس‌ها: اصلاحیه: کد سمالایو دانشجویان تغییر یافت',
            messageCount: '55',
            time: '12:05',
            id: 5
        },
        {
            title: 'Telegram',
            text: 'Search Filters, Anonymous Admins,',
            messageCount: '16',
            time: '12:06',
            id: 6
        },
        {
            title: 'Mina',
            text: 'ارسال ایمیل از طریق لینک زیر امکان پذیر است',
            messageCount: '7',
            time: '12:07',
            id: 7
        },
        {
            title: 'بورس ایران',
            text: 'شاخص بورس امروز 12 مرداد',
            messageCount: '8',
            time: '12:08',
            id: 8
        },
        {
            title: 'کاربر شماره 9',
            text: 'سلام9 درخواست مشاوره دارم',
            messageCount: '19',
            time: '12:09',
            id: 9
        },
    ]

    constructor() {
        makeAutoObservable(this);
    }

    addtoChatList(title, text, messageCount, time, type, id) {
        this.chatList.push({
            title: title,
            text: text,
            messageCount: messageCount,
            time: time,
            type: type,
            id: id
        })
    }
}

export default ChatListStore