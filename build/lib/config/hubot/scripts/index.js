module.exports = function (robot) {
    robot.hear(/helloworld/i, function (res) {
        res.send('world');
    });
};
