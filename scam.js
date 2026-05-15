const btn=document.getElementById('btn');
const httpsearch="http://";
const httpssearch="https://";

let susurl=["paypal-security-login.xyz","amaz0n-verification.net","free-money-2026.click"];

let suswords=["free-money","claim-prize","win-now","winner","congratulations",
    "limited-offer","jackpot","spin-win","free-gift","instant-reward","lucky-draw",
    "account-suspended","verify-now","urgent-action","security-alert","payment-failed",
    "your-account-will-be-closed","act-now","immediate-action","password-expired",
    "confirm-identity","bank-login","secure-login","update-banking","verify-bank",
    "wallet-verification","credit-card-update","otp-verification","login-confirmation",
    "double-your-bitcoin","crypto-profit","instant-investment","free-crypto",
    "guaranteed-return","mining-reward","wallet-unlock","download-crack","free-hack",
    "keygen","mod-apk","unlock-premium"];

function checkSuspicious(){
    return document.body.innerText.toLowerCase();
}

btn.addEventListener('click', async () => {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab || !tab.url) {
      alert('Cannot detect the active page.');
      return;
    }
    const Tab=tab.url.toLowerCase();
    if(Tab.startsWith('chrome://') || Tab.startsWith('edge://') || Tab.startsWith('about:')){
        alert('Cannot analyze internal browser pages.');
        return;
    }
    const injectionResults = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: checkSuspicious
    });
    const page = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: checkSuspicious
    });

        let pagetext = injectionResults[0].result;
        let a=0,b=0,c=0,d=0,w=0;


        if(Tab.includes(httpsearch)){
            a=1;
        }
        else if(Tab.includes(httpssearch)){
            a=0;
        }
        else{
            a=1;
        }
        console.log("completed p1");
        for(let i=0; i<susurl.length; i++){
            if(Tab.includes(susurl[i])){
                b=1;
                break;
            }
        }
        console.log("completed p2");

        if(Tab.length>75 && Tab.length<150){
            c=2;
        }  
        else if(Tab.length>150){
            c=1;
        }
        else{
            c=0;
        }
        console.log("completed p3");

        for(let i=0; i<suswords.length; i++){
            if(pagetext.includes(suswords[i])){
                w++;
            }
        }
        if (w>5){
            d=1;
        }
        console.log("completed p4");

        if(a==1 || b==1 || c>=1 || d==1){
            alert("Website is suspicious")
        }
        else{
            alert("Website looks safe");
        }
    }
catch (error) {
    console.error('Error executing script:'+ error.message);
    alert('An error occurred while analyzing the page.');
  };
});
