const findTheOldest = function (person) {
    return person.reduce((oldest, current) => {
        if ((current.yearOfDeath - current.yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth)) {
            return oldest;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
