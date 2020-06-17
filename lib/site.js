
require([
    'dojo/dom',
    'dojox/widget/AutoRotator',
	'dojox/widget/rotator/Fade',
    'dojo/domReady!'
	], function (dom, ar, f) {
		doTimer();
		doQuoter();
		doQuotePos();
	});	
		  
	function txtSwap(idTxt)
	{
		dojo.query(".comDiv").style({ "display": "none" });		
		var obj = {"display": "inline-block"};
		dojo.setAttr(idTxt, "style", obj);
	}

//added to rotate backgound image

	var imgList = [
			'"Air Canada",/images/bg/aircanada_800_v3b.png,#369',
			'"Apache Moon",/images/bg/apachemoon_800_v1b.png,#000',
			'"Back Drop",/images/bg/backDrop_800_v1b.png,#333',
			'"Belgian Fire",/images/bg/belgianFire_600_v2b.png,#996',
			'"Break In",/images/bg/breakIn_600_v1b.png,#000',
			'"Challenger2",/images/bg/challenger2_800_v1b.png,#CCF',
			'"Colder",/images/bg/colder_600_v3b.png,#ccc',
			'"Corvette",/images/bg/corvette_800_v2b.png,#cff',
			'"Dark Knight",/images/bg/darkKnight_800_v1b.png,#000',
			'"DoorMan",/images/bg/doorMan_600_v1b.png,#9cf',
			'"Dust Off",/images/bg/dustoff_800_v1b.png,#FFC',
			'"Eagle Flight",/images/bg/eagleflight_800_v1b.png,#666',
			'"Floater",/images/bg/floater_800_v1b.png,#69C',
			'"Hang Time",/images/bg/hangtime_800_v1b.png,#669',
			'"High Drop",/images/bg/highdrop_800_v2b.png,#69f',
			'"Hornets Nest",/images/bg/hornetsNest_800_v1.png,#fc6',
			'"How-r-yah",/images/bg/howareyah_800_v2b.png,#9CF',
  			'"Iron Sharks",/images/bg/ironSharks_800_v1b.png,#cff',
			'"Leap Frog",/images/bg/insert_800_v2b.png,#CCC',
 			'"Low and Fast",/images/bg/lowandfast_800_v2b.png,#69C',
			'"Naval",/images/bg/naval_800_v4b.png,#f66',
			'"Night Orders",/images/bg/nightOrders_800_v1.png,#000',
			'"Night Rope",/images/bg/nightrope_600_v1b.png,#390',
			'"Oscar Mike",/images/bg/oscarMike_800_v4b.png,#ccc',
			'"Pirates",/images/bg/pirates_800_v2b.png,#9CC',
			'"Rail Rider",/images/bg/railRider_800_v1b.png,#cff',
			'"Sneaky",/images/bg/sneaky_800_v1b.png,#ccc',
			'"Spotters",/images/bg/spotters_800_v1b.png,#ccc',
			'"Stern Craft",/images/bg/sternCraft_800_v1.png,#000',
			'"Sun Deck",/images/bg/sunDeck_800_v1b.png,#fc6',
			'"Tall Dark",/images/bg/tallDark_800_v1b.png,#666',
			'"Traffic",/images/bg/traffic_800_v3b.png,#FC9',
  			'"Tread Lightly",/images/bg/treadLightly_800_v1.png,#fff',
			'"Vanguard",/images/bg/vanguard_800_v2b.png,#ccc',
			'"War Dog",/images/bg/warDog_800_v2b.png,#ccf',
			'"Wire",/images/bg/wire_800_v2b.png,#000'
			];

	var count = Math.floor(Math.random() * imgList.length, + 1);
	var newcount = 0;
	var t;
	var timer_is_on=0;
	var past5img = [];
	
	function iSwaper(setNum)
	{
		var newImg = imgList[setNum].split(',');
		if(past5img.length == 0){
			dojo.setAttr("bgImage", "src", newImg[1]);
			document.body.style.backgroundColor = newImg[2];
		}
		
		var img=new Image();
  		img.onload = function(){
			dojo.setAttr("bgImage", "src", newImg[1]);
			document.body.style.backgroundColor = newImg[2];
			window.onresize = function() { doQuotePos() };
		}
		img.src=newImg[1];
		//dojo.byId("footer1").innerHTML = "item [" + setNum + "] of [" + past5img + "][" + past5img.length + "] past images";
	}

	function timedCount(){
		doQuotePos();		
		do{ count = Math.floor(Math.random() * imgList.length, + 1);}
		while(-1 != dojo.indexOf(past5img,count))
		iSwaper(count);
		past5img.push(count);
		if(past5img.length > 8) newcount = past5img.shift();
		t = setTimeout("timedCount()",25000);
	}
	
	function imageBK(){
		doQuotePos();
		if(past5img.length > 1)pos = past5img.shift();
		else pos = count;
		iSwaper(pos);
	}
	
	function imageFWD(){
		doQuotePos();
		count = Math.floor(Math.random() * imgList.length, + 1);
		iSwaper(count);
	}
		
	function doTimer(){
		if (!timer_is_on){
		  timer_is_on=1;
		  timedCount();
		}
	}

	function doQuotePos()
	{
			var posObj = dojo.position("headerTitle");
	
			var newX = posObj.x - 5;
			var newY = posObj.y + posObj.h;
			var newW = posObj.w + 10;
			var newH = posObj.h;

			quoteDiv = dojo.byId("headerQuote");
			dojo.style(quoteDiv, {
				left: newX + "px", top: newY + "px",
				width: newW + "px", height: "auto",
				display: "block"
			});
				quoteDiv = dojo.query(".pane");
			dojo.style(quoteDiv, {
				left: newX + "px", top: newY + "px",
				width: newW + "px", height: "auto",
				display: "block"
			});
		return true;
	}
	
	function doQuoter(){
	new dojox.widget.AutoRotator(
        {
            transition: "dojox.widget.rotator.fade",
            transitionParams: "quick:true,continuous:true",
			suspendOnHover: true,
			random: false,
            duration: 10000,
            panes: [
				{ className: "pane pane0", style: 'position: absolute', innerHTML: '<blockquote><p>Providing fused intelligence to NATO Commanders worldwide</p></blockquote>'},
				{ className: "pane pane1", style: 'position: absolute', innerHTML: ''},
				{ className: "pane pane2", style: 'position: absolute', innerHTML: '<blockquote><p>"Without a doubt, the IFC is the NATO Center of Gravity for multinational intelligence collaboration in producing high-impact intelligence for NATO operations."<br /><br />United States Under Secretary of Defense for Intelligence</p></blockquote>'},
				{ className: "pane pane3", style: 'position: absolute', innerHTML: ''},
				{ className: "pane pane4", style: 'position: absolute', innerHTML: '<blockquote><p>"I am in no doubt that the IFC is of such importance that one wonders how we ever managed without it."<br /><br />Deputy Supreme Allied Commander Europe</p></blockquote>'},
				{ className: "pane pane5", style: 'position: absolute', innerHTML: ''},
				{ className: "pane pane6", style: 'position: absolute', innerHTML: '<blockquote><p>"I was particularly pleased to see how well the IFC had come together since its creation, underpinning my belief in its position as a jewel within the NATO intel system."<br /><br />Commander, Allied Maritime Component</p></blockquote>'},
				{ className: "pane pane7", style: 'position: absolute', innerHTML: ''},
				{ className: "pane pane8", style: 'position: absolute', innerHTML: '<blockquote><p>Providing fused intelligence to NATO Commanders worldwide</p></blockquote>'},
				{ className: "pane pane9", style: 'position: absolute', innerHTML: ''},
				{ className: "pane pane10", style: 'position: absolute', innerHTML: '<blockquote><p>"I congratulate you on the huge progress you continue to make in making the IFC both relevant and effective."<br /><br />UK MOD Director General Intelligence Collection</p></blockquote>'},
				{ className: "pane pane11", style: 'position: absolute', innerHTML: ''},
				{ className: "pane pane12", style: 'position: absolute', innerHTML: '<blockquote><p>"In a time of evolving and challenging threats, the IFC is a unique organization which combines expertise, knowledge and the willing to provide intelligence in support of NATO current and future operations."<br /><br />Italian Defence General Staff</p></blockquote>'},
				{ className: "pane pane13", style: 'position: absolute', innerHTML: ''}
            ]
        }, dojo.byId("headerQuote"));
	}
	

	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();
	  a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];
	  a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })
	  (window,document,'script','//www.google-analytics.com/analytics.js','ga');
	
	  ga('create', 'UA-43416643-1', 'bices.org');
	  ga('send', 'pageview');
	