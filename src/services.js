export const turnLightOff = async(id) => {

  const url = `http://127.0.0.1:8000/off/${id}`;
  try {
    const response = await fetch(url);
    console.log(response)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }

}

export const turnLightOn = async(id) => {

  const url = `http://127.0.0.1:8000/on/${id}`;
  try {
    const response = await fetch(url);
    console.log(response)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }

}
