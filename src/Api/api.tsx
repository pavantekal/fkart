export const fetchData = () => {
  return new Promise((resolve, reject) => {
    try {
      fetch("https://flipkart-page-api.now.sh").then((res) => {
        if (res.status === 200) resolve(res.json());
        else reject("Invalid Query");
      });
    } catch (error) {
      resolve(error);
    }
  });
};
