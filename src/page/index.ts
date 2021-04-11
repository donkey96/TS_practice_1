import { Bank } from "../model/bank";

let bank_a = new Bank("三菱東京UFJ", "UFJカード", 300000);
let bank_b = new Bank("ゆうちょ銀行", "ゆうちょカード", 100000);
let bank_c = new Bank("みずほ銀行", "みずほカード", 1000000);

console.log(bank_a, bank_b, bank_c);