"use strict";
module.exports = (robot) => {
    robot.hear(/helloworld/i, (res) => {
        res.send('world');
    });
};
//# sourceMappingURL=index.js.map