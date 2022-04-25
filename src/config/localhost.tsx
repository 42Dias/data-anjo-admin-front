// const backendUrl = `http://localhost:8143/api`;
const backendUrl = `https://projetos.42dias.com.br:8143/api`;

// SwaggerUI Documentation URL
// Leave black if documentation should be hidden
const apiDocumentationUrl = `https://projetos.42dias.com.br:8143/documentation`;

/**
 * Frontend Url.
 */
// https://data-anjo-admin.netlify.app
const frontendUrl = {
  host: 'data-anjo-admin.netlify.app',
  protocol: 'https',
};

/**
 * Tenant Mode
 * multi: Allow new users to create new tenants.
 * multi-with-subdomain: Same as multi, but enable access to the tenant via subdomain.
 * single: One tenant, the first user to register will be the admin.
 */
const tenantMode = 'multi';

/**
 * Plan payments configuration.
 */
const isPlanEnabled = true;
const stripePublishableKey = '';

export default {
  frontendUrl,
  backendUrl,
  apiDocumentationUrl,
  tenantMode,
  isPlanEnabled,
  stripePublishableKey
};
