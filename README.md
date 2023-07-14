# SonicJs Headless CMS

# Overview
## SonicJs: Empowering Global API Performance with Cloudflare Workers

Experience the power of SonicJs, a cutting-edge Headless CMS built on the robust Cloudflare Workers platform. SonicJs revolutionizes API performance, delivering an astounding average speed improvement of 🔥🔥🔥 6 times faster 🔥🔥🔥 than a standard node application.

Read the docs here [https://sonicjs.com]

## How Fast is "Blazingly" Fast?

| Platform      | Average Response Time | Difference |
| ----------- | ----------- | ----------- |
| Strapi      | 342.1ms       | - baseline - |
| Node + Postgres   | 320.2ms        | 1.06x Faster|
| SonicJs   | 52.7ms        | 6.4x Faster|

The details of our performance benchmark here is available at
[here](/performance-benchmarks). 

# Prerequisites
1. You will need a free Cloudflare account: [https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
1. Install Wrangler CLI:
```
npm install -g wrangler
```

# Getting Started
```
git clone https://github.com/lane711/sonicjs
cd sonicjs
npm install
```

Rename `/wrangler.example.toml` to `/wrangler.toml` and update the 4 required Cloudfalre values:

```text copy
compatibility_date = "2023-05-18"
name = "sonicjs"
workers_dev = true
main = "src/server.ts"

# Enter your account id
# This can be found at https://dash.cloudflare.com/ --> Workers & Pages
# --> Overview, then in the right sidebar
account_id = "?????"

# Run the `wrangler kv:namespace create sonicjs` command and copy the id below
# Run the `wrangler kv:namespace create sonicjs --preview` command and copy the preview_id below
# Only update the preview_id and id, leave the binding name as "KVDATA"
kv_namespaces = [
  { binding = "KVDATA", preview_id="?????", id = "?????" }
]

# Run the `wrangler d1 create sonicjs` command and copy the id below
[[d1_databases]]
binding = "D1DATA"
database_name = "sonicjs"
database_id = "?????"
```
Now you're ready to fire up SonicJs!
```
npm run dev
```
Run the admin interface at:
[http://localhost:8788](http://localhost:8788)

Check out https://sonicjs.com for next steps.

# Legacy
The legacy version of SonicJs (a Node.js based web content management system) can be found here:
[https://github.com/lane711/sonicjs/tree/legacy](https://github.com/lane711/sonicjs/tree/legacy)