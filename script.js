console.log(document.getElementsByClassName("top")[0].style)
let human = {
    name: "Victor Crest",
    age: 26,
    location: "London",
    profileImg: "images/image-victor.jpg",
    bannerImg: "url('images/bg-pattern-card.svg')",
    backgroundColor:"hsl(185, 75%, 39%)",
    stats:{
        Followers: "80K",
        Likes: "803K",
        Photos: "1.4K"
    }
}

let dog = {
    name: "Steve",
    age: 1,
    location: "Japan",
    profileImg: "https://images.unsplash.com/photo-1613410180211-106788bd2d94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80",
    bannerImg: "url('https://thumbs.dreamstime.com/b/green-polka-dot-background-25383307.jpg')",
    backgroundColor: "#00FFFF",
    stats: {
        followers: "1.2M",
        likes: "8M",
        posts: "2K"
    }
}

let cat = {
    name: "Mochi",
    age:1,
    location: "Phillipines",
    profileImg: "https://images.unsplash.com/photo-1621780030440-71c9ace78fa3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG9yYW5nZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb=1.2.1&auto=format&fit=crop&w=600&q=60",
    bannerImg: "url('https://www.teahub.io/photos/full/159-1595602_chevron-desktop-wallpapers-hd-blue-striped-wallpaper-hd.jpg')",
    backgroundColor: "#FFD580",
    stats: {
        followers: "4.5M",
        likes: "12M",
        posts: "8K"
    },
    speak(){
        return "meow meow"
    }
}

function changeUser(user){
    document.getElementById("full-name").innerText = user.name;
    document.getElementById("age").innerText = user.age;
    document.getElementById("location").innerText = user.location;
    document.getElementsByTagName("img")[0].src = user.profileImg;
    console.log(document.getElementsByClassName("top")[0].style)
    document.getElementsByClassName("top")[0].style.backgroundImage = user.bannerImg;
    document.body.style.backgroundColor = user.backgroundColor;
    
    let numbers = document.getElementsByClassName("nums")
    let status = Object.keys(user.stats)
    let metrics = document.getElementsByClassName("metric")

    for(let i=0; i<numbers.length; i++){  
        numbers[i].innerText = user.stats[status[i]]
        metrics[i].innerText = status[i]
    }
    curr_user = user
    return curr_user
}
// If you click the button should change user
let curr_user = human
document.getElementsByTagName("button")[0].addEventListener("click", function(){
    curr_user == human?changeUser(cat):changeUser(human)
})

// If you click the name, the text color change to green
document.getElementById("full-name").addEventListener("click", function(){
    // Write code to change the green text back to blue
    document.getElementById("full-name").style.color == "green"?document.getElementById("full-name").style.color = "black":document.getElementById("full-name").style.color = "green";
    
});

// document.getElementById("full-name").innerText = dog.name
// // document.getElementById("full-name").style.color = "green"

// document.getElementById("age").innerText = dog.age
// document.getElementById("location").innerText = dog.location
// document.getElementsByTagName("img")[0].src = dog.profileImg;

// // console.log(document.getElementsByClassName("top")[0].style.backgroundImage = dog.bannerImg)
// document.body.style.backgroundColor = dog.backgroundColor
// let numbers = document.getElementsByClassName("nums")
// let status = Object.keys(dog.stats)

// for(let i=0; i<numbers.length; i++){  
//     numbers[i].innerText = dog.stats[status[i]]
// }