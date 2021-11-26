function sendMessage(msg, encoder){
    // Valmistelua
    // Erilaisia toimenpiteitä
    msg = encoder(msg)
    console.log(msg);

}

const myEnc = function(message){
    message += "1234xcv"
    return message;
}

sendMessage("Hello!", myEnc)
