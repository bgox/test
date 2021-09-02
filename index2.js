(function (global, factory) {
    if (typeof module !== "undefined" && module.exports) {
      // CMD
      module.exports.__dataverseNftCrawler = factory();
    } else {
      global.__dataverseNftCrawler = factory();
    }
  })(window, function () {
    var __dataverseNftCrawler = {
      listen:function(){
        window.addEventListener("message",function(e) {
          if(e.data.msgType && e.data.msgType === "fetchNftPriceRequest"){
              console.log("recived message",e.data.msgType);
              const nft = __dataverseNftCrawler.opensea();
              const message = { msgType:"fetchNftPriceResponse", data:nft};
              window.postMessage(message,"*");
          }
        },false);
      },
      opensea:function(){
        var nftInfo = {
          "contract":"0xd6a30176bb3bc72385d517ea9d44970a06214fdf",
          "tokenId":"301078382356528963674261205096628993547"
        };
        var response = {
          "code":0,
          "data":nftInfo
        };
        return response;
      },
      superrare:function(){
          return "superrare";
        }
      }
  
    __dataverseNftCrawler.listen();

    return __dataverseNftCrawler;
  });