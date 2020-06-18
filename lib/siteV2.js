var images = [
	'"Air Canada",images/bg/aircanada_800_v3b.png,#369',
	'"Apache Moon",images/bg/apachemoon_800_v1b.png,#000',
	'"Back Drop",images/bg/backDrop_800_v1b.png,#333',
	'"Belgian Fire",images/bg/belgianFire_600_v2b.png,#996',
	'"Break In",images/bg/breakIn_600_v1b.png,#000',
	'"Challenger2",images/bg/challenger2_800_v1b.png,#CCF',
	'"Colder",images/bg/colder_600_v3b.png,#ccc',
	'"Corvette",images/bg/corvette_800_v2b.png,#cff',
	'"Dark Knight",images/bg/darkKnight_800_v1b.png,#000',
	'"DoorMan",images/bg/doorMan_600_v1b.png,#9cf',
	'"Dust Off",images/bg/dustoff_800_v1b.png,#FFC',
	'"Eagle Flight",images/bg/eagleflight_800_v1b.png,#666',
	'"Floater",images/bg/floater_800_v1b.png,#69C',
	'"Hang Time",images/bg/hangtime_800_v1b.png,#669',
	'"High Drop",images/bg/highdrop_800_v2b.png,#69f',
	'"Hornets Nest",images/bg/hornetsNest_800_v1.png,#fc6',
	'"How-r-yah",images/bg/howareyah_800_v2b.png,#9CF',
	'"Iron Sharks",images/bg/ironSharks_800_v1b.png,#cff',
	'"Leap Frog",images/bg/insert_800_v2b.png,#CCC',
	'"Low and Fast",images/bg/lowandfast_800_v2b.png,#69C',
	'"Naval",images/bg/naval_800_v4b.png,#f66',
	'"Night Orders",images/bg/nightOrders_800_v1.png,#000',
	'"Night Rope",images/bg/nightrope_600_v1b.png,#390',
	'"Oscar Mike",images/bg/oscarMike_800_v4b.png,#ccc',
	'"Pirates",images/bg/pirates_800_v2b.png,#9CC',
	'"Rail Rider",images/bg/railRider_800_v1b.png,#cff',
	'"Sneaky",images/bg/sneaky_800_v1b.png,#ccc',
	'"Spotters",images/bg/spotters_800_v1b.png,#ccc',
	'"Stern Craft",images/bg/sternCraft_800_v1.png,#000',
	'"Sun Deck",images/bg/sunDeck_800_v1b.png,#fc6',
	'"Tall Dark",images/bg/tallDark_800_v1b.png,#666',
	'"Traffic",images/bg/traffic_800_v3b.png,#FC9',
	'"Tread Lightly",images/bg/treadLightly_800_v1.png,#fff',
	'"Vanguard",images/bg/vanguard_800_v2b.png,#ccc',
	'"War Dog",images/bg/warDog_800_v2b.png,#ccf',
	'"Wire",images/bg/wire_800_v2b.png,#000'
];

var quotes = [
	'<p></p>',
	'<p></p>',
	'<p>Providing fused intelligence to NATO Commanders worldwide</p>',
	'<p>"Without a doubt, the IFC is the NATO Center of Gravity for multinational intelligence collaboration in producing high-impact intelligence for NATO operations."<br /><br />United States Under Secretary of Defense for Intelligence</p>',
	'<p>"I am in no doubt that the IFC is of such importance that one wonders how we ever managed without it."<br /><br />Deputy Supreme Allied Commander Europe</p>',
	'<p>"I was particularly pleased to see how well the IFC had come together since its creation, underpinning my belief in its position as a jewel within the NATO intel system."<br /><br />Commander, Allied Maritime Component</p>',
	'<p>Providing fused intelligence to NATO Commanders worldwide</p>',
	'<p>"I congratulate you on the huge progress you continue to make in making the IFC both relevant and effective."<br /><br />UK MOD Director General Intelligence Collection</p>',
	'<p>"In a time of evolving and challenging threats, the IFC is a unique organization which combines expertise, knowledge and the willing to provide intelligence in support of NATO current and future operations."<br /><br />Italian Defence General Staff</p>',
];

function randomIntRange(min, max) 
{
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomIntRangeNew(min, max, old) 
{
	var i = randomIntRange(min, max - 1);
	if (i >= old)
	{
		return i + 1;
	}
	return i;
}

$(window).on('load',function() 
{
	var image = $('#bgImage');

	var maxImage = images.length - 1;
	var iImage = randomIntRange(0, maxImage); 
	var imageParts = images[iImage].split(',');
	document.getElementById("bgImage").src = imageParts[1];
	document.body.style.backgroundColor = imageParts[2];

	var maxQuote = quotes.length - 1;
	var iQuote = randomIntRange(0, maxQuote);
	document.getElementById("headerQuote2").innerHTML = quotes[iQuote];

	setInterval(function()
	{
		image.fadeOut(0, function () 
		{
			iImage = randomIntRangeNew(0, maxImage, iImage);
			imageParts = images[iImage].split(',');
			document.getElementById("bgImage").src = imageParts[1];
			document.body.style.backgroundColor = imageParts[2];
			image.fadeIn(0);

			if (randomIntRange(0,5) < 3)
			{
				iQuote = randomIntRangeNew(0, maxQuote, iQuote);
				document.getElementById("headerQuote2").innerHTML = quotes[iQuote];
			}
		});
	}, 2000);
});


