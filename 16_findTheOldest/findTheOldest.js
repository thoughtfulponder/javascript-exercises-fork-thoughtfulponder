const findTheOldest = function (person) {
    person.reduce((oldest, current) => {
        oldest = current.yearOfDeath - current.yearOfBirth;
        //console.log(current);
        /*if (oldest >= person) {
            console.log(person);
        }*/
    }, 0);
};

// Do not edit below this line
module.exports = findTheOldest;
