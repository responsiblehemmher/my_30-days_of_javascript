async function submitFormData(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        document.getElementById('response').innerText = `Response: ${JSON.stringify(data)}`;
    } catch (error) {
        document.getElementById('response').innerText = `Error submitting form data: ${error.message}`;
        console.error('Error submitting form data:', error);
    }
}
