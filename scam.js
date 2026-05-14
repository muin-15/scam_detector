const btn=document.getElementById('btn');
const httpsearch="http://";
const httpssearch="https://";

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

    if(Tab.includes(httpsearch)){
        alert("This website is not secure");
    }
    else if(Tab.includes(httpssearch)){
        alert("This website is secure");
    }
    else{
        alert("This website is not secure");
    }
    });
});
btn.addEventListener('click',function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var Tab = tabs[0].url;
        for(let i=0; i<susurl.length; i++){
            if(Tab.includes(susurl[i])){
                alert("This website may be a scam");
                return;
            }
        }
        alert("This website is not a scam");
    });
});
btn.addEventListener('click',function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var Tab = tabs[0].url;
        if(Tab.length>75 && tab.length<150){
            alert("This website is suspicious");
        }  
        else if(Tab.length>150){
            alert("This website is harmful");
        }
        else{
            alert("This website is safe");
        }
    });
});

