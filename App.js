const express = require('express');

var bodyParser = require('body-parser')

var url = require("url");

var mysql = require('mysql');

var conn=mysql.createConnection({

host : "localhost",

user : "root",

password : "",

database : "mydb"

}

);

const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {

res.sendFile(__dirname + '/index.html');

});

app.post('/', urlencodedParser, (req, res) => {

var rollno=req.body.roll_no;

var name=req.body.student_name;

var sub1=parseInt(req.body.sub1_mark);

var sub2=parseInt(req.body.sub2_mark);
var sub3=parseInt(req.body.sub3_mark);

var op=req.body.operation;

var per= (sub1+sub2+sub3)/3;

res.writeHead(200, {"Content-Type": "text/html"});

if(op=="add")

{

var queryString="insert into student values('"+rollno+"','"+name+"','"+sub1+"','"+sub2+"','"+sub3+"','"+per+"')";

conn.query(queryString, function(error,data)

{

if(error)

{

throw error;

}

else{

console.log("add success");

res.write("insertion sucess")

}

}//end of con.query

)}// end of if

else if(op=="update")

{

var queryString="update student SET name='"+name+"',sub1="+sub1+",sub2="+sub2+",sub3="+sub3+",per="+per+" where rollno="+rollno;

conn.query(queryString, function(error,data)

{

if(error)

{

throw error;

}

else{

console.log("update success");

res.write("update sucess");

}

}

)

}

else if(op=="delete")

{

var queryString="delete from student where rollno="+rollno;

conn.query(queryString, function(error,data)

{

if(error)

{

throw error;

}

else{
    console.log("delete success");

    res.write("delete sucess");
    
    }
    
    }
    
    )
    
    }
    
    else if(op=="show")
    
    {
    
    var reo ='<html><head><title>Display Data</title></head><body><h1>Display Data</h1>{${table}}</body></html>';
    
    function setResHtml(sql, cb){
    
    conn.query(sql, (err, res, cols)=>{
    
    if(err) throw err;
    
    var table =''; //to store html table
    
    //create html table with data from res.
    
    for(var i=0; i<res.length; i++){
    
    table +='<tr><td>'+ (i+1) +'</td><td>'+ res[i].rollno +'</td><td>'+ res[i].name +'</td><td>'+ res[i].sub1 +'</td><td>'+ res[i].sub2 +'</td><td>'+ res[i].sub3 +'</td><td>'+ res[i].per +'</td></tr>';
    
    }
    
    table ='<table border="1"><tr><th>Sr.</th><th>rollno</th><th>Name</th><th>sub1</th><th>sub2</th><th>sub3</th><th>percentage</th></tr>'+ table +'</table>';
    
    return cb(table);
    
    });
    
    }
    
    let sql ='SELECT * FROM student';
    
    setResHtml(sql, resql=>{
    
    reo = reo.replace('{${table}}', resql);
    
    res.write(reo, 'utf-8');
    
    });
    
    }
    
    conn.end();
    
    });
    
    app.listen(3000);