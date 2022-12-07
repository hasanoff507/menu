export default class ApiService {
  public static getCountry = async (): Promise<[]> => {
    let url = "https://telebackend.somee.com/api/listings";

    const data = await fetch(url);
    const json = await data.json();

    return new Promise((resolve, reject) => {
      resolve(json as []);
    });
  };


}
