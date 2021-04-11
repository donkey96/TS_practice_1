"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bank_1 = require("../model/bank");
let bank_a = new bank_1.Bank("三菱東京UFJ");
let bank_b = new bank_1.Bank("ゆうちょ銀行");
let bank_c = new bank_1.Bank("みずほ銀行");
console.log(bank_a, bank_b, bank_c);
