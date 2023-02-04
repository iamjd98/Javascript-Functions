
//FORM SUBMIT

function form_submit() {
    var name = document.getElementById('name').value
    var age = document.getElementById('age').value
    var email = document.getElementById('email').value
    var gender = document.getElementById('gender').value
    var nickname = document.getElementById('nickname').value

    localStorage.setItem('user_name', name)
    localStorage.setItem('user_age', age)
    localStorage.setItem('user_email', email)
    localStorage.setItem('user_gender', gender)
    localStorage.setItem('user_nickname', nickname)

    document.getElementById('username').innerHTML = localStorage.getItem('user_name')
    document.getElementById('userage').innerHTML = localStorage.getItem('user_age')
    document.getElementById('useremail').innerHTML = localStorage.getItem('user_email')
    document.getElementById('usergender').innerHTML = localStorage.getItem('user_gender')
    document.getElementById('usernickname').innerHTML = localStorage.getItem('user_nickname') 

    
}
 



//Simple Mini Calculator


function cal_solve() {
    const firstnum = parseInt(document.getElementById('cal_first_num').value)
    const secnum = parseInt(document.getElementById('cal_sec_num').value)
    const operation = document.getElementById('cal_operation').value
    const product = firstnum * secnum;
    const sum = firstnum + secnum;
    const qoutient = firstnum / secnum;
    const difference = firstnum - secnum;
    
   
    if (operation == 'multiply') {
        document.getElementById('cal_answer').innerHTML = product;
    } else if (operation == 'divide') {
        document.getElementById('cal_answer').innerHTML = qoutient;
    } else if (operation == 'add') {
        document.getElementById('cal_answer').innerHTML = sum;
    } else if (operation == 'subtract') {
        document.getElementById('cal_answer').innerHTML = difference;
    }
}

function cal_clear() {
    document.getElementById('cal_first_num').value = "";
    document.getElementById('cal_sec_num').value = "";
    document.getElementById('cal_answer').innerHTML = "";

}


// TO DO LIST

function add_todo() {
    const todo_input = document.getElementById('todo_input').value;
    const todo_list = document.getElementById('todo_list');
    const new_todo = document.createElement('li');
    let todo_name = document.createTextNode(todo_input);

    new_todo.appendChild(todo_name)
    todo_list.appendChild(new_todo)

    document.getElementById('todo_input').value = "";
    new_todo.className ='fw-bold '
    
    
}





//FLEX BUS

function changeclass() {
    var bus = document.getElementById('bus')
    const code = document.getElementById('code-input').value
    
    if (code === "d-flex justify-content-end align-items-center" ) {
        
        alert('Horraay! You got it right!')
        bus.className = "busphotocon";
    } else if (code === "d-flex justify-content-end" ) {
        
        alert('Horraay! You got it right!')
        bus.className = "busphotocon";
    }
     else {
        bus.className = "busphotocon1";
        alert('Try Again! I know you can do it!')
    }

}



// Set Timeout



function timeout() {

    document.getElementById('goodnews').innerHTML = 'Gagraduate ka this March! hehe 🎉'
    document.getElementById('appear').innerHTML = ""

}

//Module


//Upper Lower Case

function uppercase() {
    
    const text = document.getElementById('upperlowertext').innerHTML
    document.getElementById('upperlowertext').innerHTML = text.toUpperCase()

}

function lowercase() {
    
    const text = document.getElementById('upperlowertext').innerHTML
    document.getElementById('upperlowertext').innerHTML = text.toLowerCase()

}


// History API

function showhistory() {
    let historycount = window.history.length;
    document.getElementById('history').innerHTML = historycount;
}

// Location API



function getlocation() {
    const currentloc = document.getElementById("currentloc")
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(Position);
      } else { 
        currentloc.innerHTML = "Geolocation is not supported by this browser.";
      }
      Position(position)


      
}

function Position(position) {
    currentloc.innerHTML="Your Current location is:" + "<br>Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}








    
 