// from https://andrewlock.net/simple-obfuscation-of-email-addresses-using-javascript/

// Find all the elements on the page that use class="link-obscured"
var allElements = document.getElementsByClassName("link-obscured");

// Loop through all the elements, and update them
for (var i = 0; i < allElements.length; i++) {
    updateAnchor(allElements[i])
}

function updateAnchor(el) {
    // fetch the hex-encoded string
    var encoded = el.innerHTML;

    // decode the email, using the decodeEmail() function from before
    var decoded = decodeText(encoded);

    // Replace the text (displayed) content
    el.textContent = decoded;
    
    var mode = el.getAttribute('href');
    
    if (mode === "#+") {
      // Set the link to be a "tel:" link
      el.href = 'tel:' + decoded.replace(/\s+/g, '');
    } else {
      // Set the link to be a "mailto:" link
      el.href = 'mailto:' + decoded;
    }
}

function decodeText(encodedString) {
    // Holds the final output
    var email = "";

    // Extract the first 2 letters
    var keyInHex = encodedString.substr(0, 2);

    // Convert the hex-encoded key into decimal
    var key = parseInt(keyInHex, 16);

    email += String.fromCharCode(key);
    
    // Loop through the remaining encoded characters in steps of 2
    for (var n = 2; n < encodedString.length; n += 2) {

        // Get the next pair of characters
        var charInHex = encodedString.substr(n, 2)

        // Convert hex to decimal
        var char = parseInt(charInHex, 16);

        // XOR the character with the key to get the original character
        var output = char ^ key;

        // Append the decoded character to the output
        email += String.fromCharCode(output);
    }
    return email;
}
