import { helper } from '@ember/component/helper';

function getsize([h, w]){
    return h*w;
}

export default helper(getsize);
