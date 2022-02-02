export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const validPathwaysEmail = (email) => {
  if (!validateEmail(email)) {
    return false;
  }

  const separatorIndex = email.indexOf('@')

  // gets the end of the domain, eg: gmail.com, yahoo.in
  const domain = email.substr(separatorIndex+1, email.length - separatorIndex)

  return domain === 'pathways.in';
}
