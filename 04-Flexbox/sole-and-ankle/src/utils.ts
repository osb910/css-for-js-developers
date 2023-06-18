/**
 * Several little utilities for this project.
 *
 * NOTE: These are NOT generic, and should not be copied
 * to other projects. They're quick imperfect implementations
 * for the known, fixed data we work with here.
 */
import differenceInDays from 'date-fns/differenceInDays';

export const formatPrice = (price: number) => `$${price / 100}`;

export const pluralize = (string: string, num: number) =>
  num === 1 ? `1 ${string}` : `${num} ${string}s`;

export const isNewShoe = (releaseDate: Date) =>
  differenceInDays(new Date(), releaseDate) < 30;
