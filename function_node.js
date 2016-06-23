var getCurrentTime = function () {
    var date = new Date();
    date.setHours(date.getHours() + 9);
    var d = date.getFullYear() + '-';
    d += ('0' + (date.getMonth() + 1)).slice(-2) + '-';
    d += ('0' + date.getDate()).slice(-2) + 'T';
    d += ('0' + date.getHours()).slice(-2) + ':';
    d += ('0' + date.getMinutes()).slice(-2) + ':';
    d += ('0' + date.getSeconds()).slice(-2) + 'Z';
    return d;
};

msg.payload =  {
    "timestamp": getCurrentTime(),
    "tiltLR": msg.payload.d.tiltLR,
    "tiltFB": msg.payload.d.tiltFB,
    "accelX": msg.payload.d.accelX
};

return msg;
