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

export const getTimeDiff = (n: number): string => {
  const hoursAgoInMs: number = n * 3600000;
  const timeDiff: number = Date.now() - hoursAgoInMs;
  const date = new Date(timeDiff);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };

  // Use the browser's locale to format the date
  return date.toLocaleString('en-US', options);
};
