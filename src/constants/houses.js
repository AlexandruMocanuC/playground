const isProduction = process.env.NODE_ENV === 'production';

import { base as projectBase } from '~/constants';

export const base = isProduction ? `${projectBase}houses/` : '/houses/';

export const PUBLIC_URL = isProduction
	? `${projectBase}/static/houses`
	: '/houses';
