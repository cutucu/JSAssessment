/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Create a variable to hold your NFTs
const NFTs = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name,_DOB, _height, _city) {
    const NFT = {
        name: _name,
        DOB: _DOB,
        height: _height,
        city: _city
    };
    NFTs.push(NFT);
    console.log("Minted: " + _name);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nID: \t\t" + (i + 1));
        console.log("Name: \t\t" + NFTs[i].name);
        console.log("DOB: \t\t" + NFTs[i].DOB);
        console.log("height: \t" + NFTs[i].height);
        console.log("city: \t\t" + NFTs[i].city);
    }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal Supply: " + NFTs.length);
}

// Call your functions below this line
mintNFT("roxy", "2002", "165", "tokyo");
mintNFT("Sue", "2004", "180", "seol");
mintNFT("sakshi", "2005", "140", "Delhi");
mintNFT("kim jong un", "1970", "100", "N.korea");
mintNFT("Luffy", "1997", "190", "East Blue");
mintNFT("roronoa zoro", "1990", "200", "ORange town");
mintNFT("Tony Tony Chopper ", "2006", "40", "island");

listNFTs();
getTotalSupply();
