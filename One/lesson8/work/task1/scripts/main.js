function Database() {
    console.log('DB object was created')
}

Database.prototype.connect = function(name) {
    if (name != 'pirozhochki') {
        throw new ReferenceError(name + ' database is not found');
    }
};

Database.prototype.close = function() {
    console.log('connection was closed');
};

const database = new Database();

try {
    database.connect('bulochki');
} catch(e) {
    console.log(e);
} finally {
    database.close();
}

database.close();

console.log('FINISH');