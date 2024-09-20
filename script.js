const form = document.getElementById('voucherForm');
const voucherResult = document.getElementById('voucherResult');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const cardNumber = document.getElementById('cardNumber').value;
    generateVoucher(cardNumber);
});

function generateVoucher(cardNumber) {
    const apiUrl = 'https://api.teeg.cloud/vouchers/campaigns/RIXI59A/cards/';
    const tz = 'MIDS8SMNMD';
    const url = `${apiUrl}${cardNumber}?tz=${tz}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzE5NjgyMTUwLCJuYmYiOjE3MTk2ODEyNTAsImlwQWRkcmVzcyI6IjEwNC4yOC4yMTUuMTM1Iiwib2lkIjoiNWY1MmFjOTMtYjQ5Zi00MmEzLTkxMGEtNjVmMTYyNjE4YmE2Iiwic3ViIjoiNWY1MmFjOTMtYjQ5Zi00MmEzLTkxMGEtNjVmMTYyNjE4YmE2IiwicGhvbmUiOiIrNjI4MjE0NzI2ODU3MCIsInRpZCI6ImFmMjFlMDU2LTBhMjEtNGQ4My1iNWRkLTQ0YzQzOWZhOGYzMCIsIm5vbmNlIjoiNDY0Nzg5OTctOGMyOS00ZDZlLWJiYzEtMWNmMWM0ODU0ZTFiIiwic2NwIjoiYWxsLWFwaXMiLCJhenAiOiJjYTBlNDg2OC0xNzdiLTQ5ZDItOGM2My1mMTA0NGUzZWRjNjMiLCJ2ZXIiOiIxLjAiLCJpYXQiOjE3MTk2ODEyNTB9.Z9MsPctKxyq0q0H1FIlIsVn-qTBx_lEQB0cZRqiflzvfUOwM9KAqWCaF6Vy36qLrlb2XOC9AFJvZMZoXc-wJaaiTGJ_f8A3y83mW5W1exrXw-XFb4w-E-zAkpI1Q4bqeOqcGdqZ0eGTXT5o0jWHPY1JrAGo3M8LLB00q2LLmkDZbteM6xO4rT0-To2yo4XDM_cFhA1KsP7MVN_LtUDuCRFrTTlL-0Kl_gvplhqVpA9Owu_Za9G9RByLUGH7khOavLzwM_EpHHMkH_m3yubeugzsujcym4X7T7ZDlSHyjY01pNu32zCX0jTCWINqNA88gudn7el77o7OfOIQTDYgLWA'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        voucherResult.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        voucherResult.innerHTML = '<p>Error fetching data. Please try again later.</p>';
    });
}
