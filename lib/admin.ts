export const adminUserIds = [
  "user_3Cc24rrgLFC5P7f9OESgmEW1v3B", "user_3ChbzGaqwnV64BrIWMg5sNaw8c8",// replace with your Clerk user id
];

export function isAdmin(userId?: string | null) {
  return !!userId && adminUserIds.includes(userId);
}