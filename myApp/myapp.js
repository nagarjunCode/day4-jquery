$(document).ready(function() {
   var id = 0;
   var i = 0;
   // var flag=0;
   var datas = []

$("#save").click(function(e) {
    e.preventDefault();
     if(!editMode){   // Add alone
       
       // var temp = {}
       // temp["tempName"] = $('input[name=name-box]').val();
       // temp["tempEmail"] = $('input[name=email-box]').val();
       // temp["tempAge"] = $('input[name=age-box]').val();
       // temp["tempPhone"] = $('input[name=phone-box]').val();
       pullValues(datas.length - 1)
       drawTable();
      
       
}
else{        ///////////////////   edit + Add
       --editMode;
       // datas[id]["tempName"] = $('input[name=name-box]').val();
       // datas[id]["tempEmail"] = $('input[name=email-box]').val();
       // datas[id]["tempAge"] = $('input[name=age-box]').val();
       // datas[id]["tempPhone"] = $('input[name=phone-box]').val();
       pullValues(editMode)
       drawTable();
       editMode=0;


}

function pullValues (id){
  datas[id]["tempName"] = $('input[name=name-box]').val();
  datas[id]["tempEmail"] = $('input[name=email-box]').val();
  datas[id]["tempAge"] = $('input[name=age-box]').val();
  datas[id]["tempPhone"] = $('input[name=phone-box]').val();
}

$('input[type=text]').each(function() {
           $(this).val('');
       });
 });

function drawTable() {
   $('.child').remove()
      for (var i = 0; i < datas.length; i++) {
          $('#myTable tr:last').after('<tr class="child"><td>' + (i + 1) + '<\/td> <td>' + datas[i]["tempName"] + '<\/td> <td>' + datas[i]["tempEmail"] + '<\/td> <td>' + datas[i]["tempAge"] + '<\/td> <td>' + datas[i]["tempPhone"] + '<\/td><td> <span class="edit"> edit </span> <\/td><td><span class="remove"> X </span><\/td></tr>');
       }
   }

  
$("#myTable").on('click', '.remove', function() {
      
       var tid = $(this).parent().parent().find('td:first').text();
       datas.splice(parseInt(tid) - 1, 1)
       drawTable();
       

   });



   

    $("#myTable").on('click', '.edit', function() {

       var tid =0;
       // flag=1;
       tid= $(this).parent().parent().find('td:first').text();
       
       var tt = parseInt(tid);
       tt++;

       editMode=tt-1;
       
       var tname = $("#myTable tr:eq(" + tt + ") td:eq(1)").text();
       var temail = $("#myTable tr:eq(" + tt + ") td:eq(2)").text();
       var tage = $("#myTable tr:eq(" + tt + ") td:eq(3)").text();
       var tph = $("#myTable tr:eq(" + tt + ") td:eq(4)").text();



       $('#tb1').val(tname);
       $('#tb2').val(temail);
       $('#tb3').val(tage);
       $('#tb4').val(tph);

   });




});
