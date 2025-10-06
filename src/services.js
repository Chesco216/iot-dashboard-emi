export const turnLightOff = async(place) => {

  const url = `http://127.0.0.1:8000/mqtt/off/${place}`;
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

export const turnLightOn = async(place) => {

  const url = `http://127.0.0.1:8000/mqtt/on/${place}`;
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

export const turnAllOff = async() => {
  const url = `http://127.0.0.1:8000/mqtt/off/all`;

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

export const turnAllOn = async() => {
  const url = `http://127.0.0.1:8000/mqtt/on/all`;

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
