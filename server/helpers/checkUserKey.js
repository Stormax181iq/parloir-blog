export default function checkUserKey(userKey) {
  const userIdNumber = Number(userKey);

  if (Number.isInteger(userIdNumber)) {
    return "id";
  } else {
    // Assumes it is a username
    return "username";
  }
}
