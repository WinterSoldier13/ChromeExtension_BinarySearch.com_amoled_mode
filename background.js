console.log("BinarySearch DarkMode loaded")
goDark();

// TODO this need to be called after every DOM update
function invertImage()
{
    console.log("Inverting images");
    var onlineImages = document.getElementsByClassName('Avatar_image__32vUe');
    var userImage = document.getElementsByClassName('Avatar_image__rIlQi');
    
    var l1 = onlineImages.length;
    var l2 = onlineImages.length;

    for(i=0;i<l1;i++)
    {
        onlineImages[i].style.filter = "invert(100%)";
    }

    for(i=0;i<l2;i++)
    {
        userImage[i].style.filter = "invert(100%)";
    }
}

function goDark() {

    var css = 'html {-webkit-filter: invert(100%);' +
        '-moz-filter: invert(100%);' +
        '-o-filter: invert(100%);' +
        '-ms-filter: invert(100%); }',

        head = document.getElementsByTagName('head')[0],
        style = document.createElement('style');
    style.type = 'text/css';
    console.log("bravo six, going Dark!!");
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    }
    else {
        style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);

    // invert the images from negative to normal after 3 secs
    setTimeout(invertImage, 3000);
    console.log("awake");;
}


