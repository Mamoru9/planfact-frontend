var table;
$(document).ready(function(){
    
    var last_id;
    var out ='<thead> <tr> <th>Order ID</th> <th>Customer</th> <th>Date</th> <th>Status</th> <th>Email</th> <th>Actions</th> </tr> </thead>';
    $("#but_new_elem").hide();
    $("#popup").hide();
    $("#popupnew").hide();
    $("#myTable").hide();
    $("#text1").hide();
    $("#text2").hide();
    $("#text3").hide();
    $("#text4").hide();
    $("#text5").hide();
    $("#text6").hide();
    $("#text7").hide();
    $("#text8").hide();
    $("#text9").hide();
    $("#text10").hide();
    $.getJSON('https://raw.githubusercontent.com/planfact/frontend/master/MOCK_DATA.json', function(data){
        
        $.each(data, function(key, val){
            out += '<tr>';
            out += '<td>'+ val.id + '</td>'+ '<td>'+ val.first_name + ' ' + val.last_name + '</td>' + '<td>'+ val.data + '</td>' + '<td>'+ val.status + '</td>' + '<td>'+ val.email + '</td>' +'<td><img src="img/dot.png"/> <a href="javascript:PopUpShow()"><img src="img/pen.png"/></a></td>';
            out += '</tr>';
            last_id=val.id;
        });
        $('#myTable').html(out);
        newTable();
    });
    
    $("#first_name").focus(function(){
        $("#text1").show(200);
    });
    $("#first_name").blur(function(){
        $("#text1").hide(200);
    });
    $("#last_name").focus(function(){
        $("#text2").show(200);
    });
    $("#last_name").blur(function(){
        $("#text2").hide(200);
    });
    $("#email").focus(function(){
        $("#text3").show(200);
    });
    $("#email").blur(function(){
        $("#text3").hide(200);
    });
    $("#phone").focus(function(){
        $("#text4").show(200);
    });
    $("#phone").blur(function(){
        $("#text4").hide(200);
    });
    $("#country").focus(function(){
        $("#text5").show(200);
    });
    $("#country").blur(function(){
        $("#text5").hide(200);
    });
    $("#city").focus(function(){
        $("#text6").show(200);
    });
    $("#city").blur(function(){
        $("#text6").hide(200);
    });
    $("#new_first_name").focus(function(){
        $("#text7").show(200);
    });
    $("#new_first_name").blur(function(){
        $("#text7").hide(200);
    });
    $("#new_last_name").focus(function(){
        $("#text8").show(200);
    });
    $("#new_last_name").blur(function(){
        $("#text8").hide(200);
    });
    $("#new_email").focus(function(){
        $("#text9").show(200);
    });
    $("#new_email").blur(function(){
        $("#text9").hide(200);
    });
    $("#status").focus(function(){
        $("#text10").show(200);
    });
    $("#status").blur(function(){
        $("#text10").hide(200);
    });
    $("#save_new_elem").on("click", function(){
        $("#myTable").hide();
        $("#but_new_elem").hide();
        table.destroy();
        last_id++;
        out+='<tr><td>'+last_id+'</td><td>'+document.getElementById("new_first_name").value +' '+document.getElementById("new_last_name").value+'</td><td>'+document.getElementById("Date").value+'</td><td>'+document.getElementById("status").value+'</td><td>'+document.getElementById("new_email").value+'</td><td><img src="img/dot.png"/> <a href="javascript:PopUpShow()"><img src="img/pen.png"/></a></td></tr>';
        $("#myTable").html(out);
        $("#loader-wrapper").show();
        newTable();
        $("#popupnew").hide();
    });
});

function PopUpShow(){
    $("#popup").show();
}

function PopUpNew(){
    $("#popupnew").show();
}


function newTable(){
    setTimeout(function(){
        table=$('#myTable').DataTable( {
            columnDefs: [
                {
                    targets: [ 0, 1, 2 ],
                    className: 'mdl-data-table__cell--non-numeric'
                }
            ]
        } );
        $("#loader-wrapper").hide();
        $("#myTable").show();
        $("#but_new_elem").show();
    }, 1500);
}