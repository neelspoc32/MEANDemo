/*The first js file to be loaded.
 *Takes care of setting up all of 
 *the required paths
*/
require.config({
baseUrl : "assets/js",
paths:{
	//the libraries we are going to use
	jquery:['//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js','lib/jquery-2.1.3.min']
	}
});