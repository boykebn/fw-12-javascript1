const text = "aan";

const replaceKons = (text) => {
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (typeof text === "string") {
      if (text[i] === "a") {
        result += "o";
      } else {
        result += text[i];
      }
    } else {
      result += "Tipe data harus String!";
    }
  }
  return result;
};

console.log(replaceKons(text));