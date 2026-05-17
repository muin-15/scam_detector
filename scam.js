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
    /*const page = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: checkSuspicious
    });*/

        let pagetext = injectionResults[0].result;
        let a=0,b=0,c=0,d=0,w=0;


        if(Tab.includes(httpsearch)){
            a=50;
        }
        else if(Tab.includes(httpssearch)){
            a=0;
        }
        else{
            a=50;
        }
        console.log("completed p1");
        for(let i=0; i<susurl.length; i++){
            if(Tab.includes(susurl[i])){
                b=susurl.length;
                break;
            }
        }
        console.log("completed p2");

        if(Tab.includes(susurl[0]) || Tab.includes(susurl[1]) || Tab.includes(susurl[2])){
            c=50;
        }  
        else{
            c=0;
        }
        console.log("completed p3");

        for(let i=0; i<suswords.length; i++){
            if(pagetext.includes(suswords[i])){
                w+=3;
            }
        }
        if (w>15){
            d=20;
        }
        console.log("completed p4");

        let result=a+b+c+d+w;
        console.log(result);

        if(result>=80){
            console.log("Website is suspicious")
        }
        else{
            console.log("Website looks safe");
        }

        let mainColor;
        let statusMessage = "";
        let statusColor = "";

        if (result < 50) {
            mainColor = "#2dc911"; 
            statusMessage = "Website looks safe.";
            statusColor = "#2dc911";
        } else if (result >= 50 && result < 70) {
            mainColor = "#FFD700"; 
            statusMessage = "Website is moderately suspicious.";
            statusColor = "#FFD700";
        } else { 
            mainColor = "#FF0000"; 
            statusMessage = "Website is highly suspicious!";
            statusColor = "#FF0000";
        }

        let statusElement = document.getElementById("status-message");
        if (statusElement) {
            statusElement.textContent = statusMessage;
            statusElement.style.color = statusColor;
        }

        let circle = document.querySelector(".circle");
        let number = document.querySelector(".number");

        circle.style.background = `conic-gradient(${mainColor} 0deg, #333 0deg)`;
        number.innerHTML = "0%";

        result=Math.min(result, 100);

        let count = 0;
        let target = result;

        let interval = setInterval(() => {

            count++;

            number.innerHTML = count + "%";

            circle.style.background =
            `conic-gradient(
                ${mainColor} ${count * 3.6}deg,
                #333 ${count * 3.6}deg
                )`;

            if(count >= target){
                clearInterval(interval);
            }

            }, 30);
    }
catch (error) {
    console.error('Error executing script:'+ error.message);
    alert('An error occurred while analyzing the page.');
  };
});


