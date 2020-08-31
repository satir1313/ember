import { helper } from '@ember/component/helper';


function calculatesize(image){
    var myimage = new Image();
    myimage.src = image;
    var he = myimage.height;
    var wid = myimage.width;
    return he.toString() + " height and " + wid.toString() + " width";
}
export default helper(calculatesize); 