let salary = 5000;
let friends = ['Bob', 'Ken', 'Kevin'];
let sober = true;

exports.mod = class Husband {
    getSalary() {
        return `This is your salary ${salary} \n`;
    }
    listFriends() {
        return `Who is your friends? ${friends} \n`;
    }
    ifSober() {
        return `Are you sober? ${sober} \n`;
    }
}
