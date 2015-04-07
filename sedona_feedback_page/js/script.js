$("document").ready(function () {

		var btnMinus = $(".minus");
		var btnPlus = $(".plus");
		var container = $("#clients-container");

		var input = $(".people-count, .children-count");
		var curVal = $(input).val();

		var template = document.querySelector("#template").innerHTML;
		Mustache.parse(template);

		btnPlus.click(function (e) {

				e.preventDefault();
				var curInput = $(this).siblings("input");
				var data = $(this).siblings("input").val();
				var dataMin = $(this).siblings("input").attr("data-min");
				var current = parseInt(data, 10);
				if (!isNaN(current)) {
						$(this).siblings("input").val(current + 1);
				} else {
						$(this).siblings("input").val(dataMin);
				}
				curInput.trigger("input");

		});

		btnMinus.click(function (e) {

				e.preventDefault();
				var curInput = $(this).siblings("input");
				var data = $(this).siblings("input").val();
				var dataMin = $(this).siblings("input").attr("data-min");
				var current = parseInt(data, 10);

				if(!current){
					 $(this).attr('disabled');
				}

				if (!isNaN(current) && current > dataMin) {
						$(this).siblings("input").val(current - 1);
				} else {
						$(this).siblings("input").val(dataMin);
				}

				curInput.trigger("input");
		});

		input.on('input', onChange);

		function onChange(e) {

				var input = e.currentTarget;

				var newVal = $(input).val();
				var type;
				if ($(input).attr("name") == "people-count") {
						type = "adult";
				} else if ($(input).attr("name") == "children-count") {
						type = "children";
				}

				renderTemplate(type, newVal - curVal);
				curVal = newVal;

		}

		function renderTemplate(type, count) {

				if (count > 0) {
					for (var i = 0; i < count; i++) {
						var number = container.find(container.find('.row[data-type="' +type + '"]')).length +1;
						if (type === "adult") {

								var string = template;
								var html = Mustache.render(string, {

										age: "взрослого",
										num: number,
										type: type

								});
						}
						else if (type === "children") {
							var string = template;
							var html = Mustache.render(string, {

								age: "ребёнка",
								num: number,
								type: type

							});

						}
						container.append(html);
					}

				}
					else{
							var rows = container.find('.row[data-type="' + type + '"]');
							for(var i = 0; i < count*-1; i++ ){
								$(rows[rows.length -i - 1]).remove();
							}

					}
		}

});
