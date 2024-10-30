
let paymentBtn=document.getElementById("pay-button")
let paymentContainer=document.getElementById('payment-container')
let phoneContainer=document.getElementById('phone-container')
let postPayment=document.getElementById('post-payment')


paymentBtn.addEventListener('click',()=>{
    let statusDiv=document.getElementById('status')

    // paymentContainer.style.display='none';
    // postPayment.style.display='block';

    // postPayment.appendChild(statusDiv);

    window.location.href='./next.html';


    statusDiv.className='processing';
    statusDiv.innerText='Processing.....';

    processPayment().then((message)=>{
        statusDiv.className='success'
        statusDiv.innerText=message
    }).catch((error)=>{
        statusDiv.className='failure'
        statusDiv.innerText=error
    })
})

function processPayment(){
    return new Promise((resolve,reject)=>{
        setInterval(()=>{
            const randomSucess=Math.random()>0.5;
            if (randomSucess){
                resolve("Payment is Successful!...")
            }else{
                reject("Could'nt complete Payment.Try Again!")
            }
        },2000)
    })
}