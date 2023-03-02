export function wait<T>(ms: number, value: T) {
  return new Promise<T>(resolve => setTimeout(resolve, ms, value));
}

export const validateNickName = (name: string) => {
  if (name.match(/(twitter|admin)/i)) {
    return 'No account names can contain Twitter or Admin';
  }
  const re = /^([a-z0-9_]){4,15}$/i;
  if (!name.match(re)) {
    return 'Username cannot be longer than 15 characters or shorter than 4 characters';
  }
};
