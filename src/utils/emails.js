export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
}

export const validPathwaysEmail = (email) => {
  if (!validateEmail(email)) {
    return false
  }

  const separatorIndex = email.indexOf('@')

  // gets the end of the domain, eg: gmail.com, yahoo.in
  const domain = email.substr(separatorIndex + 1, email.length - separatorIndex)

  return domain === 'pathways.in'
}

export const nameFromEmail = (email) => {
  const separatorIndex = email.indexOf('@')
  const name = email
    .substr(0, separatorIndex)
    .replace(/[0-9]/g, '')
    .split('.')
    .map((x) => `${x.charAt(0).toUpperCase()}${x.substr(1)}`)
    .join(' ')

  return name
}
