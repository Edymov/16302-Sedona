$("document").ready(function() {

	var btnMinus = $(".minus");
	var btnPlus = $(".plus");

	btnPlus.click(function(e){

    e.preventDefault();
    // alert("Работает!!");
		var data = $(this).siblings("input").val();
		$(this).siblings("input").val(parseInt(data) +1);

  });

  btnMinus.click(function(e){

    e.preventDefault();
    // alert("Работает!!");
    var data = $(this).siblings("input").val();
    var dataMin = 0;
		$(this).siblings("input").val(parseInt(data) -1);
		if (data < 0){
			data = dataMin
		}


  });

});
