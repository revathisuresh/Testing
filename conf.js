
/*/var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
// conf.js
exports.config = {
 // framework: 'jasmine',
 // seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['pom.js']

};
onPrepare =function() {

	browser.driver.manage().window().maximize();   // Launches browser and Maximises the window
	 jasmine.getEnv().addReporter(
		        new Jasmine2HtmlReporter({
		          savePath: 'target/screenshots'
		        })
		      );
	};*/

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');





allScriptsTimeout:50000;
getPageTimeout:50000;
exports.config = {
 //seleniumAddress: 'http://localhost:4444/wd/hub',//direct connect
 // specs: ['psc2.0.js','Meal.js','Fees.js','fund.js','Autoreplenish.js'],
  specs: ['Preorder.js','digital.js'],
  //chromeDriver:'C:/Users/revathip/Desktop/Automation/digital/Preorder and digital/node_modules/webdriver-manager/selenium/chromedriver.exe',
  chromeDriver:'C:/Users/revathip/Desktop/Automation/digital/Preorder and digital/node_modules/webdriver-manager/selenium/chromedriver_85.0.4183.87.exe',
   seleniumServerJar :'C:/Users/revathip/Desktop/Automation/digital/Preorder and digital/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
         
   
   
 //multiCapabilities: [{
	//  browserName: 'internet explorer'
	// },{
	//   browserName: 'chrome'
	// }],
  
  
 //capabilities: {
//'browserName': 'firefox',
//'moz:firefoxOptions': {
//	args: ['-P "Default"']
//}
      
// },
 
/* 
  capabilities: {
	  'browserName': 'Chrome',
	  'chromeOptions': {
		args: ["--headless", "--window-size=1920,1280"],
	 }
  */
	  //'moz:firefoxOptions': {
	//    'args': ['--safe-mode']
	//  }
	//},

 
  

  
  
  
  
  
  
  
  
 onPrepare :function()
 {
		browser.driver.manage().window().maximize();
		 jasmine.getEnv().addReporter(
			        new Jasmine2HtmlReporter({
			          savePath: 'target/screenshots'
			        })
			      );
		 
	
 },
 
	
	jasmineNodeOpts: {
	    showColors: true, // Use colors in the command line report.
	 },
	

	  jasmineNodeOpts: {
		  defaultTimeoutInterval: 2600000
		  },	  
	  
	/* jasmineNodeOpts: {
		// If true, print colors to the terminal.
		showColors: true,
		// Default time to wait in ms before a test fails.
		defaultTimeoutInterval: 30000,
		// Function called to print jasmine results.
		print: function() {},
		// If set, only execute specs whose names match the pattern, which is
		// internally compiled to a RegExp.
		grep: 'pattern',
		// Inverts 'grep' matches
		invertGrep: false
	  }  */
	  
	  
	//Options to be passed to Jasmine.
	 // jasmineNodeOpts: {
	  //  defaultTimeoutInterval: 30000
	 // }
 };