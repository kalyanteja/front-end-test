var dateFormat = require('dateformat');

const getFormattedTime = (time) => {
    const appTime = new Date(time);
    const today = new Date();
    const isToday = appTime.getDate() === today.getDate() 
        && appTime.getFullYear() === today.getFullYear() 
        && appTime.getMonth() === today.getMonth();
        
    return isToday
        ? `Today, ${dateFormat(appTime, "h:MM tt")}`
        : dateFormat(appTime, "mmm dS, h:MM tt");
};

exports.FormattedTime = getFormattedTime;