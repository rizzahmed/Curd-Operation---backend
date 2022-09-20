const conn2 = require("./database");

class users {
    
// CURD Operatios fuctions

// Create User in a table
// Add user and return the result object
add_user = (obj)=>{
    return new Promise((resolve, reject) => {
                conn2.query("CALL addUser(?,?,?,?,?)",[obj.fname,obj.mname,obj.lname,obj.email,obj.password],function (err, result, fields) {
        if (err) {
            reject(err);
        } 
        else {
            resolve(result);
        }
        });
    }); 
}

// Update User in a table
update_user = (obj) => {
    return new Promise((resolve, reject) => {
        conn2.query("CALL updateUser(?,?,?,?,?,?)",[obj.fname,obj.mname,obj.lname,obj.email,obj.password,obj.id], function (err, result,fields){
            if (err){
                reject(err);
            }
            else{
                resolve(result)
            }
        });
    });
}


// Read (display single user)
get_user = (id)=>{
    return new Promise((resolve, reject) => {
        conn2.query("CALL getUser(?)",[id], function (err, result, fields) {
        if (err) {
            reject(err);
        } 
        else {
            resolve(result);
        }
        });
    });
}



// Display all users in the table
display_all_users = ()=>{
    return new Promise((resolve, reject) => {
        //Select all customers and return the result object:
        conn2.query("CALL allUsers()", function (err, result, fields) {
        if (err) {
            reject(err);
        } 
        else {
            resolve(result);
        }
        });
    });
}


// Delete User in a table
del_user = (id)=>{
    return new Promise((resolve, reject) => {
        conn2.query("CALL delUser(?)",[id],function (err, result, fields) {
        if (err) {
            reject(err);
        } 
        else {
            resolve(result);
        }
        });
    }); 
}

}

module.exports= new users()
