var myApp = angular.module('myApp', []);
myApp.value('clientId', 'something');


myApp.controller('DemoController' ,['clientId', function DemoController(clientId){
	this.clientId = clientId;
}])



myApp.factory('clientId', function clientIdFactory(){
	return 'something';
});



myApp.factory('apiToken', ['clientId', function apiTokenFactory(clientId){
	var encrypt = function(data1, data2){
		return (data1 + ':' + data2).toUpperCase();
	}

	var secret = window.localStorage.getItem('myApp.secret');
	var apiToken = encrypt(clientId, secret);

	return apiToken;

}]);


function UnicornLauncher(apiToken, useTinFoilShielding) {
	this.launchCount = 0;
	this.useTinFoilShielding = useTinFoilShielding || false;

	this.launch = function(){

		this.launchCount++;
	}
}
/** Replacing this with service 
myApp.factory('unicornLauncher', ['apiToken', function unicornLauncherFactory(apiToken){
	return new UnicornLauncher(apiToken);
}]);



myApp.service('unicornLauncher', ['apiToken', UnicornLauncher]);
*/

/** Now Making a provider */


myApp.provider('unicornLauncher', function unicornLauncherProvider(){
	var useTinFoilShielding = false;
	this.useTinFoilShielding = function(value){
		useTinFoilShielding = !!value;
	}

	this.$get = ['apiToken', function unicornLauncherFactory(apiToken) {
		return new UnicornLauncher(apiToken, useTinFoilShielding);
	}]

}); 


myApp.config(['unicornLauncherProvider', function (unicornLauncherProvider) {
	unicornLauncherProvider.useTinFoilShielding(true);
}]);







