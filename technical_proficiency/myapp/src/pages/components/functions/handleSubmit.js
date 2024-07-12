export const handleSubmit = async (host, e, fields) => {
  e.preventDefault();
  const form = e.target;
  const formData = {};
  fields.forEach((field) => {
    formData[field] = form[field].value;
  });
  form.reset();
  try {
    const response = await fetch(host, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return alert('Form submitted successfully');
    } else {
      const data = await response.json();
      return alert(`Error submitting data: ${JSON.stringify(data)}`);
    }
  } catch (error) {
    return alert('Error:', error);
  }
};

export const getData = async (endpoint) => {
  const host=`http://127.0.0.1:8000/api/${endpoint}`;
  try {
    const response = await fetch(host, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data; // return the data from the server
    } else {
      const data = await response.json();
      return `Error submitting data: ${JSON.stringify(data)}`;
    }
  } catch (error) {
    return `Error: ${error}`;
  }
};