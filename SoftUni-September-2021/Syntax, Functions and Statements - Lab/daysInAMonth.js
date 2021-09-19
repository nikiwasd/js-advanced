    function daysInAMonth(month, year) {
        let date = new Date(year, month, 0);
        let result = date.getDate()
        console.log(result)
    }

daysInAMonth(1, 2012);