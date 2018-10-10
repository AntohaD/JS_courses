let salary = 5000;
let friends = ['Bob', 'Ken', 'Kevin'];
let sober = true;

exports.mod = class Husband {
    getSalary() {
        return console.log(`This is your salary ${salary}`);
    }
    listFriends() {
        return console.log(`Who is your friends? ${friends}`);
    }
    ifSober() {
        return console.log(`Are you sober? ${sober}`);
    }
}



