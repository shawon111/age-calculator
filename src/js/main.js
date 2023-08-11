const ageCalculator = () => {
    const birthDateInput = document.getElementById('datePicker');
    const currentDate = new Date();
    const ageWrapper = document.getElementById('ageWrapper');
    const calculateBtn = document.getElementById('calculate');

    const calculateAgeAndShow = () => {
        if(birthDateInput.value){
            const birthDate = new Date(birthDateInput.value);
            const ageIndays = Math.floor((currentDate - birthDate) / (1000 * 60 * 60 * 24));
            const years = Math.floor(ageIndays / 365);
            const remainingDays = ageIndays % 365;
            const months = Math.floor(remainingDays / 30);
            const days = remainingDays % 30;
            const ageElement = `<h6>You are ${years} years, ${months} months and ${days} days old!</h6>`;
            ageWrapper.innerHTML = ageElement;
        }else {
            const toastLiveExample = document.getElementById('liveToast');
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
            toastBootstrap.show()
        }
        
    }

    calculateBtn.addEventListener('click', ()=>{
        calculateAgeAndShow()
    })
}

ageCalculator();