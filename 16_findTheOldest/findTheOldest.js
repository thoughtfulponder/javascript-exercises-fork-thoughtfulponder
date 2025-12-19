const findTheOldest = function (person) {
    let newDate = new Date();
    newDate = newDate.getFullYear();
    person.map(indiviual => {
        if (indiviual.yearOfDeath === undefined) {
           return indiviual["yearOfDeath"] = newDate;
        }
    });

    return person.reduce((oldest, current) => {
        if ((current.yearOfDeath - current.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth)) {
            return current;
        } else {
            return oldest;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
