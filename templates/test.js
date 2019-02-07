console.log('Test from templates');

let friends = ['Vlad', 'Sasha', 'Vova', 'Misha'];

friends.forEach(function(friend){
    console.log(friend + 'Friend');
});

let newFriends = friends.map(function(friend){
    return friend + ' map';
})

let filterFriends = friends.filter(function(friend){
    return friend + 'filter';
})

console.log(newFriends);

console.log(filterFriends);