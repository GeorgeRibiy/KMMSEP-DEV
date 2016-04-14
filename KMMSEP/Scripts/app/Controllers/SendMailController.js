app.controller('SendMailController', ['$scope', function ($scope) {
    // Sends an eMail to an given Address. 
    // Be aware, this function could be a usefull spam task.
    // 
    // Usage:
    // sendMail(var, var, var, var, var);
    // 1: String - SMTP-Server
    // 2: String - The Address from which the mail shoud be send
    // 3: String - The Address to which the mail should be send.
    // For more Recipient's, please provide a list seperated by ','
    // 4: String - Subject of the Mail
    // 5: String - The Message Text of the mail.
    //
    // 2006-11-15
    //
    var xSMTP = "Your SMTP Server";
    var xSender = "Sender eMail";
    var xRecipients = "Recipient1,Recipient2,...";
    var xSubject = "Hello World!";
    var xMessage = "This is the message";
    sendMail(xSMTP, xSender, xRecipients, xSubject, xMessage);


    var init = function () {

    }

    init();
}])