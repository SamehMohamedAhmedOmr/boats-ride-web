function set_count(e,t){if(!e.data("expire"))return!1;var n=new Date(e.data("expire")).getTime();if(isNaN(n))return!1;t=setInterval(function(){var a=(new Date).getTime(),i=n-a,o=Math.floor(i/864e5),r=Math.floor(i%864e5/36e5),f=Math.floor(i%36e5/6e4),u=Math.floor(i%6e4/1e3);o=o<10?"0"+o:o,r=r<10?"0"+r:r,f=f<10?"0"+f:f,u=u<10?"0"+u:u,e.find(".day").text(o),e.find(".hour").text(r),e.find(".minute").text(f),e.find(".second").text(u),i<=0&&(clearInterval(t),e.text("EXPIRED"))},1e3)}$(document).ready(function(){$(".mini-countdown").each(function(e){set_count($(this),[][e])})});