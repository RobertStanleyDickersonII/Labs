function ages(aNum) {
    if (aNum >= 0 && aNum <= 2) {
    console.log('baby');
    }  else if (aNum >= 3 && aNum <= 13) {
    console.log('child');
    }  else if (aNum >= 14 && aNum <= 19) {
    console.log("teenager");
    }  else if (aNum >=20 && aNum <= 65) {
    console.log('adult');
    }  else {
    console.log('elder');
    }
}

ages(20); //adult
ages();
ages();
ages();