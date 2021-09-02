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
        if (location.href.startsWith('https://opensea.io/assets/0x')) {
          nftInfo.contract = extractHex(location.href);
          nftInfo.tokenId = location.href.split('?')[0].split(':')[1].split('/')[5];
          if (nftInfo.contract.length === 0 || nftInfo.tokenId.length === 0) {
            response.code = -1;
            response.data = chrome.i18n.getMessage('notFoundNFT');
          } else {
            response.code = 0;
            response.data = nftInfo;
          }
        } else if (
          location.href.includes('https://opensea.io/assets/matic/0x') ||
          location.href.includes('https://opensea.io/assets/klaytn/0x')
        ) {
          response.code = -1;
          response.data = chrome.i18n.getMessage('notSupportChain');
        } else {
          response.code = -1;
          response.data = chrome.i18n.getMessage('geNFTFromDetailPage');
        }
        return response;
      },
      superrare:function(){
        return "superrare";
      }
    }
  
    __dataverseNftCrawler.listen();

    return __dataverseNftCrawler;
  });
