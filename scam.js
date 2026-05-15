const btn=document.getElementById('btn');
const httpsearch="http://";
const httpssearch="https://";
let a=0,b=0,c=0,d=0,e=0;

let susurl=["paypal-security-login.xyz",
    "amaz0n-verification.net","free-money-2026.click"];

let suswords=["free-money","claim-prize","win-now","winner","congratulations",
    "limited-offer","jackpot","spin-win","free-gift","instant-reward","lucky-draw",
    "account-suspended","verify-now","urgent-action","security-alert","payment-failed",
    "your-account-will-be-closed","act-now","immediate-action","password-expired",
    "confirm-identity","bank-login","secure-login","update-banking","verify-bank",
    "wallet-verification","credit-card-update","otp-verification","login-confirmation",
    "double-your-bitcoin","crypto-profit","instant-investment","free-crypto",
    "guaranteed-return","mining-reward","wallet-unlock","download-crack","free-hack",
    "keygen","mod-apk","unlock-premium"];



btn.addEventListener('click',function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var Tab = tabs[0].url;
        let pagetext=document.body.innerText.toLowerCase();
        console.log(pagetext);

    if(Tab.includes(httpsearch)){
        a=1;
    }
    else if(Tab.includes(httpssearch)){
        a=0;
    }
    else{
        a=1;
    }
    alert("completed p1");
    for(let i=0; i<susurl.length; i++){
        if(Tab.includes(susurl[i])){
            b=1;
            break;
        }
    }
    b=0;
    alert("completed p2");
    if(Tab.length>75 && tab.length<150){
        c=2;
    }  
    else if(Tab.length>150){
        c=1;
    }
    else{
        c=0;
    }
    alert("completed p3");
    for(let i=0; i<suswords.length; i++){
        if(pagetext.includes(suswords[i])){
            d=1;
            return;
        }
    }
    d=0;
    alert("completed p4");
    if(a==1 || b==1 || c==1 || d==1){
        alert("Website is suspicious")
    }
    });
});
