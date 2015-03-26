$("document").ready(function () {

		var btnMinus = $(".minus");
		var btnPlus = $(".plus");
		var container = $("#clients-container");

		var template = document.querySelector("#template").innerHTML;
		Mustache.parse(template);

		btnPlus.click(function (e) {

				e.preventDefault();
				var input = $(this).siblings("input");
				var data = $(this).siblings("input").val();
				var dataMin = $(this).siblings("input").attr("data-min");
				var current = parseInt(data, 10);
				if (!isNaN(current)) {
						$(this).siblings("input").val(current + 1);
				} else {
						$(this).siblings("input").val(dataMin);
				}
				input.on('change', onChange());
		});

		btnMinus.click(function (e) {

				e.preventDefault();
				var input = $(this).siblings("input");
				var data = $(this).siblings("input").val();
				var dataMin = $(this).siblings("input").attr("data-min");
				var current = parseInt(data, 10);
				if (!isNaN(current) && current > dataMin) {
						$(this).siblings("input").val(current - 1);
				} else {
						$(this).siblings("input").val(dataMin);
				}

				input.on('change', onChange());

		});



		function onChange(e) {

				var input = e.currentTarget;

				var newVal = input.val();
				var type;
				if (input.attr("name") == "people-count") {
						type = "adult";
				} else if (input.attr("name") == "children-count") {
						type = "children";
				}

				renderTemplate(type, curVal - newVal,  newVal);

				var curVal = input.val();
		}

		function renderTemplate(type, count, number) {

				alert("sadasdas");

				if (count > 0) {
					for (var i = 1; i < count; i++) {
						if (type === "adult") {
								var string = template;
								var html = Mustache.render(string, {

										age: "Взрослого",
										num: number,
										type: type

								});

								string = html
						}
						else if (type === "children") {
							alert("Hello!");
						}
				}
					container.append(string);
				}
					else{
							var rows = container.find('.row[data-type="' + type + '"]');
							for(var i = 0; i < count*-1; i++ )
							$(rows[rows.length]).remove();
					}
		}

});
