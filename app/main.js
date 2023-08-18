// select form 
const form = document.querySelector('#qr_form');
const msg = document.querySelector('.msg');
const qrImgWrap = document.querySelector('.qr_img_wrap');

// form submit 
form.onsubmit  = (e) => {
    e.preventDefault(); // prevent form submit default action
    
    // get form input data
    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data.entries());

    // form validation
    if(!data.qr_text.trim()){
        msg.innerHTML = createAlert('Type something in the box.', 'warning');
    }else{
        msg.innerHTML = '';

        showQRCode(data.qr_text.trim());
    } 
}

// show QR Code 
function showQRCode(text){
    // show qr code 
    qrImgWrap.style.display = 'block';
    // generate qr code 
    qrImgWrap.querySelector('img').src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
}

// show QR Code on input 
form.querySelector('[name="qr_text"]').onkeyup = (e) => {
    if(!e.target.value.trim()){
        qrImgWrap.style.display = 'none';
    }else{
        showQRCode(e.target.value.trim());
    }
}