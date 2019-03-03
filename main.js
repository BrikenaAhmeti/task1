$(document).ready(function() {
		 $(function () {
		  $('[data-toggle="tooltip"]').tooltip()
		   });
		 
		 $('.collapse').on('shown.bs.collapse', function() {
		   $('.container-home').hide();
    	   });

		 $('.collapse').on('hidden.bs.collapse', function() {
		   $('.container-home').show();
		   });
});