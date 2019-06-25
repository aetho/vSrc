document.addEventListener('DOMContentLoaded', function(){
    let btnBulk = document.getElementById('btnBulk');
    let txtBulk = document.getElementById('txtBulk');
    txtBulk.style.visibility = 'hidden';
    txtBulk.style.resize = 'none';
    btnBulk.addEventListener('click', function(){
        let bulkMode = false;
        chrome.storage.local.get(['bulkMode'], function(result){
            bulkMode = result.bulkMode;
            
            if(bulkMode){
                chrome.storage.local.set({'bulkMode': false}, ()=>{
                    txtBulk.style.visibility = 'hidden';
                });
            }else{
                chrome.storage.local.set({'bulkMode': true}, ()=>{
                    txtBulk.style.visibility = 'visible';
                });
            }
        });
    });
});