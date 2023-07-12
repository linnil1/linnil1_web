# linnil1's profile website

## Environment

- Node 20.3.1

## Development

Develop on local

```
yarn
yarn dev
```

## Deploy

```
export CLOUDFLARE_API_TOKEN=xxx

yarn add global wrangler
wrangler kv:namespace create linnil1_profile
NITRO_PRESET=cloudflare yarn build
wrangler deploy
```

## Update the status/repos/experiences

The data can be manually written in `data_to_json.js`,

```
node data_to_json.js
wrangler kv:key put --binding linnil1_profile repos       --path db/repos       --preview false
wrangler kv:key put --binding linnil1_profile experiences --path db/experiences --preview false
```

## License

MIT
