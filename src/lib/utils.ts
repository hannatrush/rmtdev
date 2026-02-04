import toast from 'react-hot-toast';

export function handleError(error: unknown) {
  let message;

  if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'An unexpected error occurred';
  }

  if (message !== 'Not found') {
    toast.error(message);
  }
}
