$(document).ready(function() {
  $("form#stress_test").submit(function(event) {
    event.preventDefault();
    $("form#stress_test").hide();
   
    var warningSigns = $("input:checkbox[name=warning-signs]:checked").map(function() {
      return $(this).val();
    });

    var healthSigns = $("input:checkbox[name=health-signs]:checked").map(function() {
      return $(this).val();
    });

    var stressManagements = $("input:checkbox[name=stress-management]:checked").map(function() {
      return $(this).val();
    });

   if (healthSigns.length === 4 && warningSigns.length === 6) {
     $(".output").html("<p>" + "Check out these books to help you!" + "</p>" +
                      "<ul>" +
                        "<li>" + "Declutter your mind" + "</li>" +
                        "<li>" + "Stress Free Living" + "</li>");
                                                     
   } else if (warningSigns.length === 4 && stressManagements.length === 5) {
     $(".output").html("<p>" + "You're doing a great job at taking action to help your stress!" + "</p>");
   
    } else if(healthSigns.length > 4) {
      $(".output").html("<p>" + "Please see a doctor!" + "</p>");

    } else {
      $(".output").html("<p>" + "Stress sucks! You're not alone.");
    }
   


  });


});