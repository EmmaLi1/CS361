function ResizeImage(image, maxwidth, maxheight) {
    var w = image.width;
    var h = image.height;

    if (w == 0 || h == 0) {
        image.width = maxwidth;
        image.height = maxheight;
    } else if (w > h) {
        if (w > maxwidth) image.width = maxwidth;
    } else {
        if (h > maxheight) image.height = maxheight;
    }
}