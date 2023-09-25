let webLink=[]
let savingData=document.getElementById("input-text")
let savePara=document.getElementById("saving-data");
document.getElementById("save-btn").addEventListener("click",saveoutput)
document.getElementById("delete-all").addEventListener("click",deleteall)
let webLinkfromuser=JSON.parse(localStorage.getItem("webLink"))
document.getElementById("save-tab").addEventListener("click", savetab)
console.log("hello is  "+webLinkfromuser)
// const tabs=[{url:"www.google.com"}]
if(webLinkfromuser){
    webLink=webLinkfromuser
    renderLinks()
}
function saveoutput(){
    if(savingData.value!="")
    {
    webLink.push(savingData.value)
    savingData.value=""
    localStorage.setItem("webLink",JSON.stringify(webLink))

    renderLinks()
    // console.log(webLink)
    }
}

function renderLinks(){
    var x="";
for(let i=0;i<webLink.length;i++){
//  x+="<li><a>"+webLink[i]+"</a></li>"
x+=`<li> <a target='_blank' href='${webLink}'>${webLink[i]}</a> </li>`
    }
    savePara.innerHTML=x
}
function deleteall(){
    savePara.innerText=" ";
    webLink=[];
    localStorage.clear()
}
function savetab(){
    // webLink.push(tabs[0].url)
    // localStorage.setItem("webLinks",JSON.stringify(webLink))
    // // console.log(webLink)
    // renderLinks()
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        webLink.push(tabs[0].url)
        localStorage.setItem("webLink", JSON.stringify(webLink) )
        renderLinks()
    })
}



