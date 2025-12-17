const findTheOldest = function(person) {
    person.reduce((oldest, current) => {
        oldest = current.yearOfDeath - current.yearOfBirth;
        if (oldest >= person) {
            return person;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
