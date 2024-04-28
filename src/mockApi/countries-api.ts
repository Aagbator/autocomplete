import allCountries from "../data/countries.json";

export const getCountries = async (searchTerm: string): Promise<string[]> => {
  try {
    const filteredCountries = allCountries.filter((country) =>
      country.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(filteredCountries);
      }, 1000);
    });
  } catch (error) {
    console.error("Error in getCountries:", error);
    throw error;
  }
};
