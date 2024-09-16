document.getElementById('dateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const birthDateInput = document.getElementById('birthDate').value;

    if (birthDateInput) {

        const birthDate = new Date(birthDateInput);
        const today = new Date();
        const timeDifference = today - birthDate;
        const Age = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30 * 12));
        const hoursLived = Math.floor(timeDifference / (1000 * 60 * 60));
        const daysLived = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); 
        document.getElementById('resultAge').textContent = `You are ${Age} years old.`;
        document.getElementById('resultDays').textContent = `You have lived for: ${daysLived} Days.`;
        document.getElementById('resultHours').textContent = `And ${hoursLived} Hours.`;
    } else {
        document.getElementById('resultAge').textContent = 'Please enter a valid date.';
        document.getElementById('resultDays').textContent = ``;
        document.getElementById('resultHours').textContent = ``;
    }
});
