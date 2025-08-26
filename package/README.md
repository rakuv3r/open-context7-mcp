# open-context7-mcp

Context7 MCP server with configurable API endpoint.

## Usage

```bash
CONTEXT7_API_BASE_URL=https://your-api.com/api npx @rakuv3r/open-context7-mcp
```

### MCP Client Configuration

#### Local Server
```json
{
  "mcpServers": {
    "open-context7": {
      "command": "npx",
      "args": ["-y", "@rakuv3r/open-context7-mcp"],
      "env": {
        "CONTEXT7_API_BASE_URL": "https://your-api.com/api"
      }
    }
  }
}
```

#### Remote Server
First, deploy and start the server:
```bash
CONTEXT7_API_BASE_URL=https://your-api.com/api npx @rakuv3r/open-context7-mcp --transport http
```

Then configure the client:
```json
{
  "mcpServers": {
    "open-context7": {
      "url": "https://your-server.com/mcp"
    }
  }
}
```

## License

[MIT](LICENSE)