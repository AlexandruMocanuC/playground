const isProduction = process.env.NODE_ENV === 'production';

export const base = isProduction ? '/playground/' : '/';
