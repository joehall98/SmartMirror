/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "192.168.0.69", "192.168.0.78", "192.168.0.53"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "MMM-covid19uk-stats",
			position: "bottom_right",
				 config: {
					apiURL: "https://api.coronavirus.data.gov.uk/v1/data"
				 }
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Bristol",
				locationID: "2654675", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "90ebb92d30b573ac489517258f34cade"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Bristol",
				locationID: "2654675", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "90ebb92d30b573ac489517258f34cade"
			}
		},
		{
 			 module: "MMM-NowPlayingOnSpotify",
 			 position: "bottom_left",

 			 config: {
			         showCoverArt: true,
   				 clientID: "c890c682636d45ebacf3ccd338efc901",
   				 clientSecret: "ec7b32fe76b8483c8afb07b9765fec23",
   				 accessToken: "BQDksBtynkVO44LHNGBnzx0zwLZMeLUMDtuYq2Hz3yFuxY_kxyor3U97vTCcl66RvH9ow2DM4h1RfgEdfauFSfB6mnUWd-I7RNo-PQS8KYcu0FD0CA-0VJSOCJ9GK0a6wIqwQztn95J_PaUCcnYHtypNrskvBzwBFyBo3sOFhsugMw",
   				 refreshToken: "AQAlYFdzNb3FYqFaI9R8-QLegshfHxb9RF1SiTrZXyKOBY6Y__VDetOoGRgNpW4lGA5vo-kjrxwWEgcMo4K4qlKlU1kQF--XsxXSOXzH-0eB9UBvfj3QrKH6tQzW9mojDhc"
 			 }
		},
		{
    			module: 'MMM-soccer',
    			position: 'top_right',
    				config: {
					api_key: '6dccb94799214869bc88f00fa9d259f3',
        				show: 'ENGLAND',
					logos: true,
					colored: true,
					max_teams: 6,
					focus_on: {"ENGLAND": "Chelsea"},
   				}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "BBC Sport",
						url: "https://feeds.bbci.co.uk/sport/rss.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "calendar",
			header: "F1 Race Schedule",
			position: "top_left",
			config: {
				calendars: [
				{
    						symbol: 'flag-checkered',
    						url: 'http://localhost:8080/MMM-Formula1/schedule.ics',
				}
				]
			}
		},
		{
    			module: "MMM-Formula1",
    			position: "top_right",
    			header: "F1 Driver Standings",
    				config: {
					grayscale: false,
      					calendar: true,
					fade: true,
					fadepoint: 0.9,
    				}
  		},
		{
            		 module: 'MMM-CoinMarketCap',
           		 position: "top_right",
            		 header: "Cryptocurrencies",
            			
				config: {
                			apiKey: '0a473426-d569-44a3-861a-4934fd7b6e3a',
                			currencies: [
							{ decimalPlaces: 3, name: 'bitcoin', logoSize: 'small', logoColored: true, graphColored: true, percentChangeColored: true, fontSize: 'small' },
			    				{ decimalPlaces: 3, name: 'binance coin', logoSize: 'small', logoColored: true, graphColored: true, percentChangeColored: true, fontSize: 'small' },
			    				{ decimalPlaces: 3, name: 'litecoin', logoSize: 'small', logoColored: true, graphColored: true, percentChangeColored: true, fontSize: 'small' },
			    				{ decimalPlaces: 3, name: 'terra', logoSize: 'small', logoColored: true, graphColored: true, percentChangeColored: true, fontSize: 'small' },
			    				],
					showColumnHeaders: false,
					columns: [ 'logo', 'symbol', 'price', 'changes', 'graph' ],
					decimalPlaces: 3,
                			conversion: 'USD',
            			}
        	},
		{
    			module: "MMM-AVStock",
   		 	position: "bottom_bar",
    			
    				config: {
        				apiKey : "1WW44RU5VU1OQGZV",
        				symbols : ["TL0.F", "AAPL", "COIN", "CRSR", "SPCE", "PLTR", "NFLX"],
        				alias: ["Tesla","Apple", "Coinbase", "Corsair Gaming","NIO Inc","Virgin Galactic","Palantir","Netflix"],
        				tickerDuration: 20,
        				mode : "ticker",
        				decimals : 2,
					showChart: false,
        				showVolume: false,
   				 }
		},
		{
			module: "MMM-MoonPhase",
			position: "bottom_left",
				config: {
					updateInterval: 43200000,
					hemisphere: "N",
					resolution: "detailed",
					basicColor: "white",
					title: true,
					phase: true,
					x: 200,
					y: 200,
					alpha: 0.7
				}
		},
		{
                        module: 'MMM-nasaastropic',
                        position: 'bottom_right',
                        config: {
                                updateInterval: 6*60*60*1000,
                                animationSpeed: 0,
                                header: 'NASA Astronomy Picture',
                                maxlongedge: 300
                        }
                },
		{
       			 module: 'MMM-Remote-Control',
       			 // uncomment the following line to show the URL of the remote control on the mirror
       			 // position: 'bottom_left',
       			 // you can hide this module afterwards from the remote control itself
       			 config: {
           			 apiKey: '5e487a79e3524b6da7e2261d1ab48164'
      		 	 }
   		},
		{
  			disabled: false,
			module: "Hello-Lucy",
			position: "top_center",
			config: {
				    keyword: 'WAKE UP',              // keyword to activate listening for a command/sentence
				    timeout: 5,                        // timeout listening for a command/sentence
				    standByMethod: 'DPMS',              // 'DPMS' = anything else than RPi or 'PI'
				    microphone: "1,0",                  // run "arecord -l" card # and device # mine is "0,0"
				    sounds: ["1.mp3", "11.mp3"],        // welcome sound at startup. Add several for a random greetings
				    confirmationSound: "ding.mp3",      // name and extension of sound file
				    startHideAll: true,                 // All modules start as hidden EXCEPT PAGE ONE
				    
				    pageOneModules: ["Hello-Lucy", "clock", "alert", "updatenotification", "compliments", "weather", "MMM-Nowplayingonspotify", "MMM-covid19uk-stats"],
				   // pageTwoModules: ["Hello-Lucy", "clock", "MMM-soccer", "newsfeed"],                   // modules to show on page two
                                   // pageThreeModules: ["Hello-Lucy", "clock", "calendar", "MMM-Formula1"],             // modules to show on page three
				    //pageFourModules: ["Hello-Lucy", "clock", "MMM-CoinMarketCap", "MMM-AVStock"],
				    //pageFiveModules: ["Hello-Lucy", "clock", "weather", "MMM-nasaastropic", "MMM-Moonphase"],
  			}
		}, 
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
