const test1 = "17"
const test2 = "1231"
const test3 = "001"





//소수 구하기 
//현재값의 곱을 이용하여 구함 
function isPrime(num){
    for(let i=2; i*i<=num; i++){
        if(num % i == 0) return false;
    }
    return true;
}



const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return
  
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((combination) => [fixed, ...combination]); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); // 배열 spread syntax 로 모두다 push
    });
  
    return results; // 결과 담긴 results return
  }



function solution(numbers) {
    var answer = 0;
    let hash = new Map();
    let arr = [...numbers];
    

    //해쉬로 누적한다 
    for(let i=1; i<= numbers.length;i++){
        let conbinationArr = getCombinations(arr,i);
        for (let index = 0; index < conbinationArr.length; index++) {
            hash.set(Number(conbinationArr[index].reduce((a,b)=>a+b)),true);
        }
    } 
    console.log(hash)
    for (const [key,value] of hash) {
        if(key > 1 && isPrime(key)){
            //console.log('소수는 ?'+ key);
            answer++;
         }
        
    }

    return answer;
}

