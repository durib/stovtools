var content

function assetCheck() {
	if (content) {
		$('#contenttab tbody tr').remove();
	};
	
	$.getJSON('/AssetCheck' , function(data) {
		var tbl_body = "";
		var odd_even = false;
		$.each(data, function() {
			var tbl_row = "";
			$.each(this, function(k , v) {
				tbl_row += "<td>"+v+"</td>";
			})
			tbl_body += "<tr class=\""+( odd_even ? "odd" : "even")+"\">"+tbl_row+"</tr>";
			odd_even = !odd_even;               
		})
		$("#contenttab tbody").html(tbl_body);
	});
}
