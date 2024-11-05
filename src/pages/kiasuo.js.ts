export async function GET() {
  return fetch(
    'https://raw.githubusercontent.com/oddyamill/kiasuo/refs/heads/master/scripts/registration.js',
  )
}

export const prerender = true
