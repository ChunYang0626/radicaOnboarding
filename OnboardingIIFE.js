//(function() { console.log('test'); }());

(function(){
    console.log("Loading...(Before document ready)");
    $(document).ready(function(){
        console.log("Document is now ready.");
    })
}());

