var filterLs = require('./makeitmodular');
filterLs(process.argv[2], process.argv[3], function (err, data) {
    data.forEach(function (file) {
        console.log(file);
    }
    );
}
);