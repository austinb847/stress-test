$(document).ready(function() {
  $("form#stress_test").submit(function(event) {
    event.preventDefault();
    
   
    var warningSigns = $("input:checkbox[name=warning-signs]:checked").map(function() {
      return $(this).val();
    });

    var healthSigns = $("input:checkbox[name=health-signs]:checked").map(function() {
      return $(this).val();
    });

    var stressManagements = $("input:checkbox[name=stress-management]:checked").map(function() {
      return $(this).val();
    });

   


  });


});