window.onerror = function (msg,url,line,column,error){
  alert("Uh oh! \n"+msg+"\n"+url+":"+line);
  window.open("http://stackoverflow.com/search?q=[js] "+msg);
}
