export function showButton (id, resources, user) {
  if (! _.isEmpty(user.roles) && user.roles.findIndex((e) => e.name === 'ROLE_ADMIN') > -1) {
    return true
  }

  if (! Array.isArray(resources) || _.isEmpty(user.roles)) {
    return false
  }

  return resources.findIndex((e) => e.url === id) > -1;
}
