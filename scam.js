const btn=document.getElementById('btn');
const httpsearch="http://";
const httpssearch="https://";

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
