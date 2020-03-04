export const SAVE_STRAIN = "SAVE_STRAIN";

export const saveStrain = strain => {
  return {
    type: "SAVE_STRAIN",
    payload: strain
  };
};
