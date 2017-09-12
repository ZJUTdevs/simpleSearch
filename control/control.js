/**
 * Created by 123456 on 2017/9/12.
 */
$(function () {
    $('#search-input').focus(function () {
        $('#search-a').css("background","#ea6f5a")
            .children().attr("src","../asset/search-w.png");
        $('#search-input').animate({width:"440px"},50);
    }).blur(function () {
        $('#search-a').css("background","#eee")
            .children().attr("src","../asset/search.png");
        $('#search-input').animate({width:"400px"},50);
    });
    var c=document.getElementById('logo');
    var ctx=c.getContext('2d');
    ctx.font="30px Arial";
    var grd=ctx.createLinearGradient(0,0,50,50);
    grd.addColorStop(0,"#000");
    grd.addColorStop(1,"#ea6f5a");
    ctx.fillStyle=grd;
    ctx.fillText("Search",10,40);
});