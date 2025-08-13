class Palindrome{
    constructor(num){
        this.num=num
    }
    isPalindrome(){
        let str = this.num.toString();
        let reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    }

}

let num1 = new Palindrome(121);
console.log(num1.isPalindrome());