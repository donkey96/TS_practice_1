class Bank { // TODO Bankクラス
  constructor(readonly name: string, private balance: number) { }

  // カードの種類に応じて表示ページを変える
  public startAtm(card: Card, bank: Bank, user: User): void {
    if (atmSpace) {
    if (card.id == 1 || card.id == 2) {
        atmSpace.innerHTML = `<h3>${bank.name}</h3>
                              <h4>ようこそ、${user.name} 様</h4>
                              <button class="drawer">引き出し</button>
                              <button class="deposit">預け入れ</button>
                              <button class="balanceCheck">残高照会</button>`
    } else if (card.id == 3){
      atmSpace.innerHTML = `<h3>${bank.name}</h3>
                            <p>パスワードを入力して下さい</p>
                            <input type="text" id="passBox">
                            <input type="button" id="check" value="チェック"> `
      const passText = <HTMLInputElement>document.getElementById("passBox");
      const checkBtn = document.getElementById("check");
      checkBtn?.addEventListener("click", () => {
        if (parseInt(passText.value) == user.password) {
          atmSpace.innerHTML = `<h3>${bank.name}</h3>
                                <h4>ようこそ、${user.name} 様</h4>
                                <button class="drawer">引き出し</button>
                                <button class="deposit">預け入れ</button>
                                <button class="balanceCheck">残高照会</button>`
        const drawerBtn = document.querySelector(".drawer");
        drawerBtn?.addEventListener("click", () => {
          this.cashingMoney(bank, card);
        });
        const depositBtn = document.querySelector(".deposit");
        depositBtn?.addEventListener("click", () => {
          this.depositMoney(bank, card);
        });
        const balanceCheckBtn = document.querySelector(".balanceCheck");
        balanceCheckBtn?.addEventListener("click", () => {
          this.cashingMoney(bank, card);
        });
        } else {
          atmSpace.innerHTML = "<h4>パスワードが違います。取引を中止します。</h4>"
        }
      });
    } else {
        atmSpace.innerHTML = `<h4>${card.bankName}はご利用頂けません。</h4>`
    }
  }
    // 引き出しボタン
    const drawerBtn = document.querySelector(".drawer");
    drawerBtn?.addEventListener("click", () => {
      this.cashingMoney(bank, card);
    });
    const depositBtn = document.querySelector(".deposit");
    depositBtn?.addEventListener("click", () => {
      this.depositMoney(bank, card);
    });
    const balanceCheckBtn = document.querySelector(".balanceCheck");
    balanceCheckBtn?.addEventListener("click", () => {
      this.cashingMoney(bank, card);
    });
  }
  // TODO 引き出し処理
   private cashingMoney = (bank: Bank, card: Card): void =>{
    let newBalance = 0;
    if (atmSpace) {
      atmSpace.innerHTML = `<h4>いくら引き出しますか</h4>
                            <input type="text" id="text">
                            <input type="button" id="cashing" value="出金">`
      const inputId = <HTMLInputElement>document.getElementById("text");
      const cashingBtn = document.getElementById("cashing");
      // 出金ボタンを押した際の処理
      cashingBtn?.addEventListener("click", () => {
        const textValue = parseInt(inputId.value)
        if (atmSpace) {
          switch (card.id) {
            case 1:
              newBalance = bank.balance - textValue
              break;
            case 2:
              newBalance = bank.balance - textValue * 1.05
              break;
            case 3:
              newBalance = bank.balance - textValue * 0.8
              break;
            default:
              break;
          }
          if (newBalance < 0) {
            atmSpace.innerHTML = "<h4>出金が残高を超えています。取引を中止します。</h4>"
          } else {
          bank.balance = Math.floor(newBalance)
          atmSpace.innerHTML = `<h4>取引成功</h4>
                                <p>口座残高は「${bank.balance}円」です。</p>`
                                
          }
        }
      })
    }
  }
  private depositMoney = (bank: Bank, card: Card): void =>{
    if (atmSpace) {
      atmSpace.innerHTML = `<h4>いくら預けますか</h4>
                            <input type="text" id="text">
                            <input type="button" id="deposit" value="入金">`
      const inputId = <HTMLInputElement>document.getElementById("text");
      const depositBtn = document.getElementById("deposit");
      // 出金ボタンを押した際の処理
      depositBtn?.addEventListener("click", () => {
        const textValue = parseInt(inputId.value)
        if (atmSpace) {
          switch (card.id) {
            case 1:
              bank.balance = Math.floor(bank.balance + textValue)
              atmSpace.innerHTML = `<h4>取引成功</h4>
                                    <p>口座残高は「${bank.balance}円」です。</p>`
              break;
            case 2:
              atmSpace.innerHTML = `<h4>取引失敗</h4>
                                    <p>只今の時間帯はお取引が出来ません。</p>`
              break;
            case 3:
              bank.balance = Math.floor(bank.balance + textValue * 1.2)
              atmSpace.innerHTML = `<h4>取引成功</h4>
                                    <p>口座残高は「${bank.balance}円」です。</p>`
              break;
            default:
              break;
          }
        }
      })
    }
  }  

}
class Card { // TODO Cardクラス
  constructor(readonly bankName: string, readonly id: number) { }
}

class User { // TODO Userクラス
  constructor(readonly name: string, readonly password: number) { }
}

const bank_ufj = new Bank("三菱東京UFJ", 300000);
const bank_yucho = new Bank("ゆうちょ銀行", 100000);
const bank_mizuho = new Bank("みずほ銀行", 1000000);

const card_ufj = new Card("三菱東京UFJ", 1);
const card_yucho = new Card("ゆうちょ銀行", 2);
const card_mizuho = new Card("みずほ銀行", 3);
const card_etc = new Card("ETCカード", 4)

const tanaka = new User("田中", 12345678);
const suzuki = new User("鈴木", 11111111);
const matsui = new User("松井", 77777777);
const takeda = new User("武田", 99999999);


// const num: string | null = prompt(`カードを選んでください。(数字で入力)\n  1.カードA　 2.カードB　 3.カードC`);

const atmSpace = document.getElementById("atm_space");
const card_a = document.getElementById("card_a");
const card_b = document.getElementById("card_b");
const card_c = document.getElementById("card_c");
const card_d = document.getElementById("card_d");

card_a?.addEventListener("click", () => {
  bank_ufj.startAtm(card_ufj, bank_ufj, suzuki);
});
card_b?.addEventListener("click", () => {
  bank_ufj.startAtm(card_yucho, bank_yucho, matsui);
});
card_c?.addEventListener("click", () => {
  bank_ufj.startAtm(card_mizuho, bank_mizuho, tanaka);
});
card_d?.addEventListener("click", () => {
  bank_ufj.startAtm(card_etc, bank_mizuho, takeda);
});

