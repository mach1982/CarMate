	var info = new Array();
$( document ).ready(function() {
	
   	 
   	 chrome.storage.sync.get('car_reg', function (result) {
        	
        
         info[0]=result.car_reg;
         $("#car_reg").val(info[0]);
       
        });
        
        chrome.storage.sync.get('insure_no', function (result) {
        	
        
         info[1]=result.insure_no;
         $("#insure_no").val(info[1]);
       
        });
        
        chrome.storage.sync.get('insure_expire', function (result) {
        	
        
         info[2]=result.insure_expire;
         $("#insure_expire").val(info[2]);
       
        });
        
        chrome.storage.sync.get('tax_expire', function (result) {
        	
        
         info[3]=result.tax_expire;
         $("#tax_expire").val(info[3]);
       
        });
        
        chrome.storage.sync.get('nct_expire', function (result) {
        	
        
         info[4]=result.nct_expire;
         $("#nct_expire").val(info[4]);
       
        });
        
        
    
});
$(function () {
    $("#details").click(function () {
        var car_reg = $("#car_reg").val();
        var insure_no=$("#insure_no").val();
        var insure_expire=$("#insure_expire").val();
        var tax_expire=$("#tax_expire").val();
        var nct_expire=$("#nct_expire").val();
        
        chrome.storage.sync.set({'car_reg': car_reg});
        chrome.storage.sync.set({'insure_no': insure_no});
        chrome.storage.sync.set({'insure_expire': insure_expire});
        chrome.storage.sync.set({'tax_expire': tax_expire});
        chrome.storage.sync.set({'nct_expire':nct_expire});
   
        
        alert("Your deatils are");
          
        
        
   
       
    		
        
        
       
    });
        
                
 
        
        });

