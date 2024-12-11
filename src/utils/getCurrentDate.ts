export const getCurrentDate = (): string => {
  const date: string = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric'
  });

  if (date.includes('December')) {
    return 'bg-christmas-bg';
  } else {
    return 'bg-main-bg';
  }
};
