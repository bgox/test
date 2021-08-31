(function (global, factory) {
  if (typeof module !== "undefined" && module.exports) {
    // CMD
    module.exports.__dataverseNftCrawler = factory();
  } else {
    global.__dataverseNftCrawler = factory();
    global.addEventListener("RecivedDataverseMsg",function(e){
      console.log("RecivedDataverseMsg",e);
      console.log(global.__dataverseNftCrawler.opensea());
      console.log(global.__dataverseNftCrawler.superrare());
    });
    global.postMessage("SendMsgToDataverse","*");
  }
})(window, function () {
  var __dataverseNftCrawler = {
    opensea:function(){
      console.log("opensea");
    },
    superrare:function(){
      console.log("superrare");
    }
  }

  return __dataverseNftCrawler;
});
