$(function() {
	$("#tracks").delegate("li", "click", function() {

		var trackName = $(this).find(".trackName").html();
		var artist = $(this).find(".artist").html();
		var cur = $(this).find("#current");
		var mp3 = trackName + ".mp3";
		var ogg	= trackName + ".ogg";
		
		$("#current").removeAttr("id");
		$(this).attr("id", "current");
    $("#cTrackName").replaceWith( "<h2 id='cTrackName'>"+ trackName +"</h2>" );
		$("#cArtist").replaceWith( "<h3 id='cArtist'>"+ artist +"</h3>" );
		$("#mp3src").attr("src", mp3);
		$("#oggsrc").attr	("src", ogg);
		$("audio").load();
		$("audio").attr("autoplay", "autoplay");

    return false;
  });
	var audio = $("audio").get(0);
	audio.addEventListener("ended", function(){
		var cur = $("#tracks").find("#current");
		var next = cur.next();
		var trackName = next.find(".trackName").html();
		var artist = next.find(".artist").html();
		var mp3 = trackName + ".mp3";
		var ogg	= trackName + ".ogg";


		cur.removeAttr("id");
		next.attr("id", "current");
		$("#cTrackName").replaceWith( "<h2 id='cTrackName'>"+ trackName +"</h2>" );
		$("#cArtist").replaceWith( "<h3 id='cArtist'>"+ artist +"</h3>" );
		$("#mp3src").attr("src", mp3);
		$("#oggsrc").attr	("src", ogg);
		$("audio").load();
		$("audio").attr("autoplay", "autoplay");

	}, false);
});

$(function() {
	
});
