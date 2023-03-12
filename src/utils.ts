export enum USER_ROLE {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER'
}

export const getFirstCharacterFromName = (name: string) => {
  return name?.[0];
}

export const toTitleCase = (str: string) => {
  return str.replace(
    /\w\S*/g,
    function (txt: string) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}
