let $currency1 = document.querySelector('#currency-one');
let $currency2 = document.querySelector('#currency-two');
let $amount1 = document.querySelector('#amount-one');
let $amount2 = document.querySelector('#amount-two');
let $rate = document.querySelector('#rate');
let $swap = document.querySelector('#swap');
let $convert_btn = document.querySelector('.convert__btn');

function calculate(){
   let currency_one = $currency1.value;
   let currency_two = $currency2.value;
   
   fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=80641c9c441b25bf01194064310c8adf`)
      .then((response)=>response.json())
      .then((data)=>{
         data.base = currency_one;
         let rate = data.rates[currency_two];
         let rate2 = data.rates[currency_one];
         $amount2.value = (rate / rate2 * $amount1.value).toFixed(2);
         $rate.innerHTML = `${$amount1.value} ${currency_one} = ${$amount2.value} ${currency_two}`;
      })
}

$swap.addEventListener('click',()=>{
   let temp = $currency1.value;
   $currency1.value = $currency2.value;
   $currency2.value = temp;
   calculate();
})
$convert_btn.addEventListener('click', calculate);

calculate();
