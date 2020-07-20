/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "10.10.10.223", "10.10.10.233", "10.10.10.104"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

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
			position: "top_left",
			config: {
				tableClass: "large",
				clockBold: true,
				showDate: false,
				timeFormat: "h:ma",
				displaySeconds: false,
				//showPeriodUpper: true
			}
		},
		{
			module: "MMM-Smartthings",
			position: "top_right",
			header: "",
			config: {
				updateInterval: 30000, //API rate limit: A maximum of 250 executions per minute is allowed for each installed SmartApp or Device Handler.
				personalAccessToken: "677e13fb-bbcd-4530-b93b-9dc52ddbe7a0", //setup personal access token at https://account.smartthings.com/tokens,
				capabilities: [
					"contactSensor",
					"temperatureMeasurement"
				],
				title: "",
				excludedDeviceNames: [
					"Fidure",
					"Motion"
				],
				tempLowValue: "65",
				tempHighValue: "80"
			}
		},
		{
			module: "currentweather",
			position: "top_center",
			config: {
				location: "Placentia",
				locationID: "5383527",
				appid: "e03c369a05b90f825c9b331d11e93c71"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "",
			config: {
				maxNumberOfDays: 5,
				colored: true,
				tableClass: "small",
				location: "Placentia",
				locationID: "5383527",
				appid: "e03c369a05b90f825c9b331d11e93c71"
			}
		},
		// {
		// 	module: "MMM-RAIN-RADAR",
		// 	position: "top_right",
		// 	config: {
		// 		useHeader: false, // true if you want a header
		// 		lat: "33.87224", // Latitude
		// 		lon: "-117.87034", // Longitude
		// 		area: "CA", // US State
		// 		zoomLevel: 7,
		// 		mapType: 3, //0-Road Map 1-Satellite 2-Dark Map 3-OpenStreetMaps 4-Light Map
		// 		color: 3, //0-Original 1-Universal Blue 2-TITAN 3-The Weather Channel 5-NEXRAD Level-III 6-RAINBOW @ SELEX-SI
		// 		snow: 0,
		// 		smoothing: 1,
		// 		opacity: 88,
		// 		fastAnimation: 0,
		// 		coverage: 0,
		// 		darkTheme: 1,
		// 		UTCtime: 0,
		// 		legend: 1,
		// 		legendMin: 1, //set legend to 1 if you want legendMin to show
		// 		animate: 1,
		// 		updateOnWarning: 1, // 1: after updateInterval, weather warnings for your US states will be used to determine if module should be hidden. 0 module is perpertually displayed
		// 		updateInterval: 5 * 60 * 1000,
		// 		height: "200px",
		// 		width: "300px"
		// 	}
		// },
		// {
		// 	module: "calendar",
		// 	header: "US Holidays",
		// 	position: "top_left",
		// 	config: {
		// 		calendars: [
		// 			{
		// 				symbol: "calendar-check",
		// 				url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
		// 			}
		// 		]
		// 	}
		// },
		{
			module: "MMM-GooglePhotos",
			position: "fullscreen_above",
			disabled: false,
			config: {
				  albums: ["Dax Backgound"],
				  updateInterval: 1000 * 30,
				  sort: "random",
				  uploadAlbum: null,
				  condition: {
					  fromDate: null,
					  toDate: null,
					  minWidth: null,
					  maxWidth: null,
					  minHeight: null,
					  maxHeight: null,
					  minWHRatio: null,
					  maxWHRatio: null,
				  },
				  showWidth: 960,
				  showHeight: 600,
				  timeFormat: "YYYY/MM/DD HH:mm"
			}
		},
		{
			module: "MMM-CalendarExt2",
			position: "middle_center",
			disabled: false,
			config: {
				defaultSet:{
					view: {
						timeFormat:"h:ma",
						scanInterval: 1000*60*5,
						updateInterval: 1000*60*5,
					}
				},
				calendars : [
					{
						name: "FamilyEvents",
					  	url: "https://calendar.google.com/calendar/ical/0pq4mq16oalfp7vn1rvcd5itec%40group.calendar.google.com/private-473479e4324de83ec2ee0e9d6a868e6d/basic.ics",
					},
					{
						name: "USHolidays",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				],
				views: [
					{
						mode: "week",
						position: "fullscreen_below",
						slotCount: 4,
						slotMaxHeight: "150px",
						name: "Family Events",
						calendars: [ "FamilyEvents", "USHolidays" ],
						timeFormat: "h:ma"
					},
				],
				scenes: [
					{
						name: "DEFAULT",
					},
				]
			}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
