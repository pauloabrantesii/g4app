export function maskPhone(value: string) {
  value = value.replace(/\D/g, '').slice(0, 11);
  if (value.length <= 10) {
    return value
      .replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1)$2-$3')
      .replace(/-$/, '');
  } else {
    return value
      .replace(/^(\d{2})(\d{5})(\d{0,4})$/, '($1)$2-$3')
      .replace(/-$/, '');
  }
}
