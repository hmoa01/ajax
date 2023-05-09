class Api {
  async getData(url) {
    let data = await new Promise((resolve, reject) => {
      let xml = new XMLHttpRequest();
      xml.open("get", url);
      xml.onreadystatechange = function () {
        if (xml.readyState === 4 && xml.status === 200) {
          resolve(JSON.parse(xml.responseText));
        }
      };
      xml.send();
    });
    return data;
  }
}

const api = new Api();
