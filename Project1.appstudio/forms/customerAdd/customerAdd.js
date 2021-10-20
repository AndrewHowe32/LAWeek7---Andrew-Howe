/*
let query = ""
let query1 = ""
let query2 = ""
let req = {}
let request = {}
let netID = "ach29255"
let pw = "An456gie"
let results = []
let results1 = []

btnCustomersAdd.onclick=function(){
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(`The results are \n ${results}`)
        if (results.length == 0)
            lblCustomers3.value = "There are no customers in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i][1] + "\n"
            lblCustomers3.value = message
        } // end else
    } else // the transit didn't work - bad wifi? server turned off?
        lblCustomers3.value = "Error code: " + req.status
}

btnAddCustomer.onclick=function(){
    query1 = "INSERT INTO `customer`(name,street,city,state,zipcode) VALUES ('Jesse Antiques', '1113 F St', 'Omaha', 'NE', '68178')"
    query2 = "SELECT * FROM customer"
    request = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query2)
    if (request.status == 200) { //transit trip worked. 
        results1 = JSON.parse(request.responseText)
        console.log(`The results are \n ${results1}`)
        if (results1.length == 0)
            lblAdd.value = "There are no customers in the database."
        else {
            let message1 = ""
            for (i = 0; i < results1.length; i++)
                message1 = message1 + results1[i][1] + "\n"
            lblAdd.value = message1
        } // end else
    } else // the transit didn't work - bad wifi? server turned off?
        lblAdd.value = "Error code: " + request.status
}
*/