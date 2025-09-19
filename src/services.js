export const turnLightOff = async() => {

  const url = `http://127.0.0.1:8000/mqtt/off`;
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

export const turnLightOn = async() => {

  const url = `http://127.0.0.1:8000/mqtt/on`;
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

export const readMQTTMessage = async() => {
  const url = `http://127.0.0.1:8000`;
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
  c
}

export const setIntensityMQTT = async(value) => {
  const url = `http://127.0.0.1:8000/mqtt/intensity/${value}`;

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
