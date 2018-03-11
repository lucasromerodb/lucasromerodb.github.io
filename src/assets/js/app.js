function f_start_running(n){console.log("%c\nRunning: "+n+"();","color: #ababab;")}function f_start_comment(n){console.log("%cComment: "+n,"color: #888;")}
function setLayout(){setBaseBodyWidth()}function setBaseBodyWidth(){var t=$(".l-base").outerWidth(),e=$(".l-base__profile").outerWidth();$(".l-base__body").css({width:t-e,left:e})}
$(document).ready(function(){setLayout()});