function getNews() {
	var className = "#Story";
	var cStory = 1;
	var finalName;
	var date;
	var year;
	var month;
	var day;
	var hour;
	var minute;
	
	jQuery.getJSON("https://www.reddit.com/r/worldnews.json", function(result) {
		$.each(result.data.children, function(i, field) {
			$.each(field, function(j, subfield) {
				if (subfield.author != undefined) {
					finalName = className + cStory;
					cStory++;
					console.log(finalName);
					$(finalName).append("Posted By: " + subfield.author);
					$(finalName).append("<br>");
					$(finalName).append("Title: " + subfield.title);
					$(finalName).append("<br>");
					$(finalName).append("URL: " + subfield.url);
					$(finalName).append("<br>");
					date = new Date(subfield.created * 1000);
					year = date.getFullYear(year);
					month = date.getMonth() + 1;
					day = date.getDate();
					hour = date.getHours();
					minute = date.getMinutes();
					$(finalName).append("Posted: " + month + "/" + day + "/" + year + " at " + hour + ":" + minute + "GMT");
					$(finalName).append("<br>");
					$(finalName).append("Domain: " + subfield.domain);
					$(finalName).append("<br>");
					console.log(subfield.author);
					console.log(subfield.title);
					console.log(subfield.url);
				}

				// Find more elegant way to do this, figure out for
				if (cStory == 6) {
					return false;
				}
			})
		});
	});

}