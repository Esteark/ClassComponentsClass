export const saveLocal = (data) => {
  let arrayImc = JSON.parse(localStorage.getItem("imc")) || [];
  arrayImc.unshift(data);
  localStorage.setItem("imc", JSON.stringify(arrayImc));
};

export const getInfoLocal = () => {
  let arrayImc = JSON.parse(localStorage.getItem("imc")) || [];
  return arrayImc;
};

export const UpdateLocal = (data) => {
  localStorage.setItem("imc", JSON.stringify(data));
};
