/* ESTA NO FUNCIONA
function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $ ${saveCoins}`);

}

moneyBox(5); // MoneyBox: $ 5
moneyBox(5); // MoneyBox: $ 5
 */

/////////////////////////////////////////////////////

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $ ${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5); // MoneyBox: $ 5
myMoneyBox(5); // MoneyBox: $ 10
myMoneyBox(15); // MoneyBox: $ 25


const moneyBoxAna = moneyBox();
moneyBoxAna(10); // MoneyBox: $ 10
moneyBoxAna(20); // MoneyBox: $ 30
moneyBoxAna(5); // MoneyBox: $ 35