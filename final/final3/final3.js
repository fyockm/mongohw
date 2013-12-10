//Please add the email address "mrpotatohead@mongodb.com" to the list of addresses in the "headers.To" array for the document with "headers.Message-ID" of "<8147308.1075851042335.JavaMail.evans@thyme>" 

use enron;
db.messages.update({ "headers.Message-ID": "<8147308.1075851042335.JavaMail.evans@thyme>" }, { $push: { "headers.To": "mrpotatohead@mongodb.com" }});
