const isProduction = process.env.NODE_ENV === 'production';

import { base as projectBase } from '~/constants';

export const base = isProduction ? `${projectBase}contacts/` : '/contacts/';

export const PUBLIC_URL = isProduction
	? `${projectBase}/static/contacts`
	: '/contacts';
