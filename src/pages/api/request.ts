import type { APIContext } from 'astro'

export function GET(context: APIContext): Response {
  return Response.json([
    Object.fromEntries(context.request.headers),
    context.locals.runtime.cf,
  ])
}

export const prerender = false
