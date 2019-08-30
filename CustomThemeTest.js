// ==UserScript==
// @name Canvas Test
// @namespace https://btech.instructure.com
// @match https://btech.instructure.com/*
// @version 1.1
// @description Test for implementing in canvas custom JS.
// ==/UserScript==

//Work on adding a side bar that you can click to drag so they're not grabbing the whole row. That way people can still copy text
/*------sortable menu------*/
function waitForEl(selector, callback){
    var interval = setInterval(function(){
        var $jObject = jQuery(selector);
        if($jObject.length < 1) {
            return;
        }
        clearInterval(interval);
        callback($jObject)
    },100);
}
if (window.location.pathname.includes('rubric') || window.location.pathname.includes('assignments')) {
	let element = $();
    if (window.location.pathname.includes('rubric')) {
        element = $('#right-side');
    }
    if (window.location.pathname.includes('assignments')) {
        element = $('div.rubric_title');
    }
	element.on('mousedown', 'a.edit_rubric_link', function () {
		waitForEl('.rubric_table tbody #add_learning_outcome_link', function() {
			var $my_list = $('.rubric_table tbody');
			let isSortable = $my_list.hasClass('ui-sortable');
			if (isSortable === false) {
				$my_list.sortable();
			}
		});
	});
	$('div.ic-Action-header__Primary').on('mousedown', 'button', function () {
		var $my_list = $('.rubric_table tbody');
		let isSortable = $my_list.hasClass('ui-sortable');
		if (isSortable === true) {
			$my_list.sortable('destroy');
		}
	});

}

/*------css stuff------*/
/*
$('#left-side').css({
    "position": "fixed",
    "top": "108px",
    "left": "84px"
});

$('#right-side-wrapper').css({
    "position": "-webkit-sticky",
    "position": "sticky",
    "top": "0"
});
*/
