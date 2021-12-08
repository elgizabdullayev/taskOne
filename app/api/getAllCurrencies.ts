export const getAllCurrencies = async() => {
    const url = 'https://api.coincap.io/v2/assets/';

    try {
        const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
        });
        if(response.status == 200){
            return await response.json(); 
        }
    } catch (error) {
        console.error('getAllCurrencies', error);
    }   
}