/*
let query = ""
let req = {}
let netID = "ach29255"
let pw = "An456gie"
let results = []
customersDelete.onclick=function(){
    query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        console.log(`The results are \n ${results}`)
        if (results.length == 0)
            lblCustomers2.value = "There are no customers in the database."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                message = message + results[i][1] + "\n"
            lblCustomers2.value = message
        } // end else
    } else // the transit didn't work - bad wifi? server turned off?
        lblCustomers2.value = "Error code: " + req.status
  
}
btnDeleteCustomer.onclick=function(){
    query = `DELETE * FROM customer WHERE name = ${inptCustomerName.value}`
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) { //transit trip worked. 
        
        lblDelete.value = `Customer ${inptCustomerName.value} has been deleted`
    } else // the transit didn't work - bad wifi? server turned off?
        lblDelete.value = "Error code: " + req.status
}
*/