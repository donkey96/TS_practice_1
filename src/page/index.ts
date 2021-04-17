class Bank { // TODO Bankクラス
  constructor(readonly name: string, private balance: number) { }

  // カードの種類に応じて表示ページを変える
  public startAtm(card: Card, bank: Bank): void {
    if (atmSpace)
          atmSpace.innerHTML = `<h4>${bank.name}へようこそ</h4>
                              <button class="drawer">引き出し</button>
                              <button class="deposit">預け入れ</button>
                              <button>残高照会</button>`
    // 引き出しボタン
    const drawerBtn = document.querySelector(".drawer");
    drawerBtn?.addEventListener("click", () => {
      this.cashingMoney(bank, card);
    });
    const drawerBtn = document.querySelector(".drawer");
    drawerBtn?.addEventListener("click", () => {
      this.cashingMoney(bank, card);
    });
    const drawerBtn = document.querySelector(".drawer");
    drawerBtn?.addEventListener("click", () => {
      this.cashingMoney(bank, card);
    });
   }
  // TODO 引き出し処理
  public cashingMoney = (bank: Bank, card: Card): void =>{
    if (atmSpace) {
      atmSpace.innerHTML = `<h4>いくら引き出しますか</h4>
                            <input type="text" id="text">
                            <input type="button" id="submit" value="出金">`
      const inputId = <HTMLInputElement>document.getElementById("text");
      const submit = document.getElementById("submit");
      // 出金ボタンを押した際の処理
      submit?.addEventListener("click", () => {
        const textValue = parseInt(inputId.value)
        if (atmSpace) {
          switch (card.id) {
            case 1:
              bank.balance = bank.balance - textValue
              break;
            case 2:
               bank.balance = bank.balance - textValue * 2
              break;
            case 3:
              bank.balance = bank.balance - textValue * 0.8
              break;
            default:
              break;
          }
          if (bank.balance < 0) {
            atmSpace.innerHTML = "出金が残高を超えています。取引を中止します。"
          } else {
          atmSpace.innerHTML = `<h4>取引成功</h4>
                                <p>口座残高は「${bank.balance}円」です。`
                                
          }
        }
      })
    }
  }  
}
class Card { // TODO Cardクラス
  constructor(private bankName: string, readonly id: number) { }
}

class User { // TODO Userクラス
  constructor(readonly name: string, private passwprd: number) { }
}

const bank_a = new Bank("三菱東京UFJ", 300000);
const bank_b = new Bank("ゆうちょ銀行", 100000);
const bank_c = new Bank("みずほ銀行", 1000000);

const card_ufj = new Card("三菱東京UFJ", 1);
const card_yucho = new Card("ゆうちょ銀行", 2);
const card_mizuho = new Card("みずほ銀行", 3);
const card_etc = new Card("ETCカード", 4)


// const num: string | null = prompt(`カードを選んでください。(数字で入力)\n  1.カードA　 2.カードB　 3.カードC`);

const atmSpace = document.getElementById("atm_space");
const card_a = document.getElementById("card_a");
const card_b = document.getElementById("card_b");
const card_c = document.getElementById("card_c");
const card_d = document.getElementById("card_d");

card_a?.addEventListener("click", () => {
  bank_a.startAtm(card_ufj, bank_a);
});
card_b?.addEventListener("click", () => {
  bank_a.startAtm(card_yucho, bank_b);
});
card_c?.addEventListener("click", () => {
  bank_a.startAtm(card_mizuho, bank_c);
});
card_d?.addEventListener("click", () => {
  bank_a.startAtm(card_etc, bank_c);
});

