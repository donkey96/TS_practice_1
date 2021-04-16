"use strict";
class Bank {
    constructor(name, card, balance) {
        this.name = name;
        this.card = card;
        this.balance = balance;
    }
}
class Atm {
    constructor(bank, card) {
        this.bank = bank;
        this.card = card;
    }
    checkCard(card) {
        if (card == this.card) {
            console.log(`${this.bank}の口座から現金を引き出します。`);
            this.cashingMoney(card);
        }
    }
    cashingMoney(card) {
        switch (card) {
            case bank_a.card:
                bank_a.balance -= 14000 * 0.08;
                console.log(`手数料として8%頂戴致します。あなたの残高は${bank_a.balance}です。`);
                break;
            case bank_b.card:
                console.log(`ただいまのお時間帯はお取引出来ません。`);
                break;
            case bank_c.card:
                bank_c.balance -= 250000;
                console.log(`ただいまのお時間帯は手数料がかかりません。あなたの残高は${bank_c.balance}です。`);
                break;
            default:
                break;
        }
    }
}
const bank_a = new Bank("三菱東京UFJ", 1, 300000);
const bank_b = new Bank("ゆうちょ銀行", 2, 100000);
const bank_c = new Bank("みずほ銀行", 3, 1000000);
const atm_a = new Atm("三菱東京UFJ", 1);
const atm_b = new Atm("ゆうちょ銀行", 2);
const atm_c = new Atm("みずほ銀行", 3);
const num = prompt(`カードを選んでください。(数字で入力)\n  1.カードA　 2.カードB　 3.カードC`);
if (num !== null) {
    atm_a.checkCard(parseInt(num));
    atm_b.checkCard(parseInt(num));
    atm_c.checkCard(parseInt(num));
}
