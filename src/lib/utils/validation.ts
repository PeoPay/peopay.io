export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateInput(value: string, minLength = 1, maxLength = 255): boolean {
  return value.length >= minLength && value.length <= maxLength;
}

export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}