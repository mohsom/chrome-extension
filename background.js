/**
 * Created by mohsom on 19.04.2015.
 */
$("document").ready(function () {
    var date = new Date();
    var start_time = {
        hours: date.getHours(),
        minutes:date.getMinutes()
    };
    $("body").append(start_time.hours+":"+start_time.minutes);
});