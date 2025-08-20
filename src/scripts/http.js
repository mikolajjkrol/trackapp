export async function updateData(data) {
    const response = await fetch(`https://68a48e40c123272fb9b325d0.mockapi.io/sessions`, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)    
    })

    if (!response.ok){
        const error = new Error('Couldnt send!');
        throw error;
    }
}