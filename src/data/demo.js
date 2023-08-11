export const {user}=JSON.parse(localStorage.getItem("eco-token")) || {}
export const UserId = user?._id;
