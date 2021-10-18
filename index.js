const button = document.querySelector("#app .btn");
const input1 = document.querySelector("#app .pswInput");
const input2 = document.querySelector("#app .srvcInput");
const app = document.querySelector("#app");
///////
function securePassword(input1, input2){
    input1 = input1.value.trim().split(' ').join('');
    input2 = input2.value.trim().split(' ').join('');
    let a = input2.slice(-1);
    let countVowels = 0;
    let input2cv = input2.toLowerCase();
    for(let i = 0; i<input2.length; i++){
    if( input2cv[i]==="a" || 
        input2cv[i]==="e" || 
        input2cv[i]==="i" || 
        input2cv[i]==="o" || 
        input2cv[i]==="u"){
        countVowels += 1;
        }
    }
    let c = input2.charAt(0);
    if (countVowels>0){
        c = (input2.charAt(countVowels-1));}
    let d = input2.length - countVowels;
    let e = (input2.charAt(0));
    let psw = a+c+input1+d+e;
    return psw;
}
///////
function securePassword2(input1, input2){
    input1 = input1.value.trim().split(' ').join('');;
    input2 = input2.value.trim().split(' ').join(''); ;
        let a = input2.slice(-1);
        let countVowels = input2.match(/[aeiou]/gi) == null ? 0 : input2.match(/[aeiou]/gi).length;
        let c = input2.charAt(0);
        if (countVowels>0){
            c = (input2.charAt(countVowels-1));}
        let d = input2.length - countVowels;
        let e = (input2.charAt(0));
        let psw = a+c+input1+d+e;
        return psw;
}
////////
button.addEventListener("click", () => {
    const outputContainer = app.querySelector("ol") || document.createElement("ol");
    outputContainer.classList = ("output")
    app.append(outputContainer);
    if (input1.value.length && input2.value.length){
    outputContainer.appendChild(document.createElement("li"))
    .innerHTML= securePassword(input1, input2);
    }
});