
export const fetchUsers = async () => {

  const response = await fetch("https://randomuser.me/api/?results=50&nat=gb")
  const result = await response.json();
  return result.results.map(contact => transformUsers(contact))
}

const transformUsers = contact => ({
  name: `${contact.name.first} ${contact.name.last}`,
  phone: contact.phone,
})
