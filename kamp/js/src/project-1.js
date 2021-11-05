
/* 1. Ödev */


//1000'den Kucuk Asal Sayilari Listeleme



function asalSayiListele() {
    for(let i = 2; i<=1000; i++){
      let number=0
      for(let j=0; j<i; j++){
        if(i%j==0){
          number++
        }
      }
      if(number==1){
        console.log(i + " asal sayıdır")
      }
    }
    
  }
  asalSayiListele()



//1000den küçük mükemmel sayılar
function mukemmelSayiListele() {
    
    for (let num = 1; num < 1001; num++) {
        let sum = 0;
        for (let multi = 1; multi < num; multi++) {
            if (num % multi == 0) {
                sum += multi
            }
        }
       
        sum == num?console.log(`${num} mükemmel sayıdır.`):console.warn(`${num} mükemmel değildir.`);
        
    }
}
//mukemmelSayiListele();

function arkadasSayi(num1,num2) {
    let sum1=0, sum2=0
    for(let i=0; i<num1; i++){
        if(num1 % i == 0){
            
            sum1 += i
        }
    }
    for(let i=0; i<num2; i++){
        if(num2 % i == 0){
            sum2 += i
        }
    }
    
    sum1==num2 && sum2 == num1?console.log('arkadaş sayıdır.'):console.warn('arkadaşl sayı değildir.');

}

//arkadasSayi(220,285);
//arkadasSayi(220,284);


//findPrime(3,5,1,2);

function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let _asalFlag = true
        for (let j = 2; j <= numbers[i]/2; j++) {
            if(numbers[i]%j==0){
                _asalFlag=false;
                break
            }
        }
        _asalFlag&&numbers[i]!=1?console.log(`asal ${numbers[i]}`):console.warn(`asal değil ${numbers[i]}`);

    }
}