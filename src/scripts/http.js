export async function updateData(data) {
    const response = await fetch('https://mikolajjkrol.pythonanywhere.com/sessions', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)    
    })

    if (!response.ok){
        const error = new Error('Couldnt send!');
        throw error;
    }
}