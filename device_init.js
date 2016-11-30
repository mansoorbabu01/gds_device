 $(document).ready(function()
    {
      
         
         $("#send_button").click(function(){
            var code            = $("#phone-mask-input").val();            
        var new_str         = code.replace(/-/g, "");        
        var length          = new_str.length;
        
        
        if(length < 16)
        { 
          $("#result").html("Wrong Key...."); 
          $("#phone-mask-input").val('');
          return false;
        }
        
        
        
        var f = JSON.stringify(
                                   {code:new_str}
                              ); 
         
        //var json_version    = 	"data:[{'code': '"+newStr+"'}]";
        //$.post("api.php",{json_version:json_version},
        
        
        alert(f);
        return false;
        
        
        $.post("api.php",{new_str:f,section:"check"},
        function(data)
        {    
             var value              = $.parseJSON(data);
             var message            = value["message"];
             var auth               = value["auth"];
             var record_id          = value["record_id"];
             
             
             if(auth !="")
             {
                 
                var lat                = '25.416212';
                var lng                = '55.443210';           
                var auth_json          = JSON.stringify({auth:auth,record_id:record_id,lng:lng,lat:lat}); 
              
              \sync\Dropbox\gds
              
                $.post("http://192.168.1.113/sync/Dropbox/gds/api.php",{section:"give_permission",auth_json:auth_json},
                function(data)
                {
                    
                    alert(data);
                    //$("#result").html(data);
                    var value           = $.parseJSON(data);
                    var result          = value['result'];
                    //alert(result);
                    $("#result").html(data);
                    
                });
             }
             else
             {  $("#result").html(data);  }
        });
         });
        
    });
    
   
