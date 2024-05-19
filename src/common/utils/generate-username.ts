export const generateUsernameFromEmail = (email: string) => {
  // Eliminar caracteres no alfanuméricos del correo electrónico
  const username = email.replace(/[^a-zA-Z0-9]/g, '');
  const maxLength = 10;
  const truncatedUsername = username.substring(0, maxLength);
  return truncatedUsername;
};
