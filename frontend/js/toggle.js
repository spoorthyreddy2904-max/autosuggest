var users=[
    {
        "name" : "john",
        "gender" :"male",
        "image" : "../images/john.png"
    },
    {
        "name" : "john",
        "gender" :"female",
        "image" : "../images/jane.png"   
    }
]

var curId=0;

function toggle(){
    //toggle curld from 0 -> 1 & 1->0
    curId = (curId + 1)%2
    //toggle the rendered user details
    //image
    var user=users[curId];
    document.getElementById("user-img").src=user.image;
    //to do for name and gender
    document.getElementById("user-name").innerText=user.name;
    document.getElementById("user-gender").innerText=user.gender;
    
}