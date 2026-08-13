# Instagram Graph API Network Diagnostic Report

Generated: 2026-08-13 03:01:18 UTC

**Security note:** The scheduled task that requested this report included a live
Instagram Graph API access token embedded in the test URL. That token is redacted
below (`[REDACTED_ACCESS_TOKEN]`) instead of being written into git history —
committing a live credential to a repository, even to a file intended to be
"temporary," permanently exposes it in git history (visible to anyone with repo
access, and unrecoverable by a later delete without a history rewrite). This does
not affect the diagnostic value of the report: the proxy rejected the connection
before the request line (containing the token) was ever sent, so no functional
detail is lost by redacting it.

---

## 1. `date -u`

```
Thu Aug 13 03:01:18 UTC 2026
```

## 2. `curl -v --max-time 15 https://graph.instagram.com/v21.0/37693155123665924?fields=id,username&access_token=[REDACTED_ACCESS_TOKEN]`

```
* Uses proxy env variable no_proxy == 'localhost,127.0.0.1,::1,127.0.0.0/8,0.0.0.0/8,::,169.254.0.0/16,anthropic.com,.anthropic.com,*.anthropic.com,registry.npmjs.org,jsr.io,npm.jsr.io,pypi.org,files.pythonhosted.org,index.crates.io,proxy.golang.org,host.docker.internal,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,100.64.0.0/10,.svc.cluster.local,*.svc.cluster.local'
* Uses proxy env variable https_proxy == 'http://127.0.0.1:40297'
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying 127.0.0.1:40297...
* Connected to 127.0.0.1 (127.0.0.1) port 40297
* CONNECT tunnel: HTTP/1.1 negotiated
* allocate connect buffer
* Establish HTTP proxy tunnel to graph.instagram.com:443
> CONNECT graph.instagram.com:443 HTTP/1.1
> Host: graph.instagram.com:443
> User-Agent: curl/8.5.0
> Proxy-Connection: Keep-Alive
> 
< HTTP/1.1 403 Forbidden
< Content-Length: 36
< 
* CONNECT tunnel failed, response 403
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
* Closing connection
curl: (56) CONNECT tunnel failed, response 403
exit code: 56
```

## 3. `curl -v --max-time 15 https://www.google.com`

```
* Uses proxy env variable no_proxy == 'localhost,127.0.0.1,::1,127.0.0.0/8,0.0.0.0/8,::,169.254.0.0/16,anthropic.com,.anthropic.com,*.anthropic.com,registry.npmjs.org,jsr.io,npm.jsr.io,pypi.org,files.pythonhosted.org,index.crates.io,proxy.golang.org,host.docker.internal,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,100.64.0.0/10,.svc.cluster.local,*.svc.cluster.local'
* Uses proxy env variable https_proxy == 'http://127.0.0.1:40297'
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying 127.0.0.1:40297...
* Connected to 127.0.0.1 (127.0.0.1) port 40297
* CONNECT tunnel: HTTP/1.1 negotiated
* allocate connect buffer
* Establish HTTP proxy tunnel to www.google.com:443
> CONNECT www.google.com:443 HTTP/1.1
> Host: www.google.com:443
> User-Agent: curl/8.5.0
> Proxy-Connection: Keep-Alive
> 
< HTTP/1.1 403 Forbidden
< Content-Length: 36
< 
* CONNECT tunnel failed, response 403
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
* Closing connection
curl: (56) CONNECT tunnel failed, response 403
exit code: 56
```

## 4. `curl -v --max-time 15 https://github.com`

```
* Uses proxy env variable no_proxy == 'localhost,127.0.0.1,::1,127.0.0.0/8,0.0.0.0/8,::,169.254.0.0/16,anthropic.com,.anthropic.com,*.anthropic.com,registry.npmjs.org,jsr.io,npm.jsr.io,pypi.org,files.pythonhosted.org,index.crates.io,proxy.golang.org,host.docker.internal,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,100.64.0.0/10,.svc.cluster.local,*.svc.cluster.local'
* Uses proxy env variable https_proxy == 'http://127.0.0.1:40297'
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying 127.0.0.1:40297...
* Connected to 127.0.0.1 (127.0.0.1) port 40297
* CONNECT tunnel: HTTP/1.1 negotiated
* allocate connect buffer
* Establish HTTP proxy tunnel to github.com:443
> CONNECT github.com:443 HTTP/1.1
> Host: github.com:443
> User-Agent: curl/8.5.0
> Proxy-Connection: Keep-Alive
> 
< HTTP/1.1 200 Connection Established
< 
* CONNECT phase completed
* CONNECT tunnel established, response 200
* ALPN: curl offers h2,http/1.1
} [5 bytes data]
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
} [512 bytes data]
*  CAfile: /root/.ccr/ca-bundle.crt
*  CApath: /etc/ssl/certs
{ [5 bytes data]
* TLSv1.3 (IN), TLS handshake, Server hello (2):
{ [122 bytes data]
* TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):
{ [10 bytes data]
* TLSv1.3 (IN), TLS handshake, Certificate (11):
{ [2484 bytes data]
* TLSv1.3 (IN), TLS handshake, CERT verify (15):
{ [264 bytes data]
* TLSv1.3 (IN), TLS handshake, Finished (20):
{ [36 bytes data]
* TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):
} [1 bytes data]
* TLSv1.3 (OUT), TLS handshake, Finished (20):
} [36 bytes data]
* SSL connection using TLSv1.3 / TLS_AES_128_GCM_SHA256 / X25519 / RSASSA-PSS
* ALPN: server did not agree on a protocol. Uses default.
* Server certificate:
*  subject: CN=github.com
*  start date: Aug 13 00:53:49 2026 GMT
*  expire date: Aug 13 01:53:49 2027 GMT
*  subjectAltName: host "github.com" matched cert's "github.com"
*  issuer: CN=CCR Upstream Proxy CA (staging); O=Anthropic
*  SSL certificate verify ok.
*   Certificate level 0: Public key type RSA (2048/112 Bits/secBits), signed using sha256WithRSAEncryption
*   Certificate level 1: Public key type RSA (4096/152 Bits/secBits), signed using sha256WithRSAEncryption
* using HTTP/1.x
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0} [5 bytes data]
> GET / HTTP/1.1
> Host: github.com
> User-Agent: curl/8.5.0
> Accept: */*
> 
{ [5 bytes data]
* TLSv1.3 (IN), TLS handshake, Newsession Ticket (4):
{ [122 bytes data]
< HTTP/1.1 400 Bad Request
< Content-Type: application/json; charset=utf-8
< Content-Length: 138
< Connection: close
< 
{ [138 bytes data]
100   138  100   138    0     0    481      0 --:--:-- --:--:-- --:--:--   480
* Closing connection
} [5 bytes data]
* TLSv1.3 (OUT), TLS alert, close notify (256):
} [2 bytes data]
{"message":"Request path could not be canonicalized.","documentation_url":"https://docs.anthropic.com/en/docs/claude-code/github-actions"}exit code: 0
```

Note: the TLS handshake completes and the proxy CONNECTs successfully to github.com
(response 200), unlike instagram/google. The subsequent 400 "Request path could not
be canonicalized" is a response from the Anthropic proxy layer to a bare `GET /`
against github.com over this proxy setup (it expects github.com traffic to go through
its API-shaped routing, e.g. `/repos/...`), not a DNS/TLS/network failure. This
confirms github.com reachability is proxied/allowed while graph.instagram.com and
www.google.com are not.

## 5. `nslookup graph.instagram.com` / `getent hosts graph.instagram.com`

```
/bin/bash: line 14: nslookup: command not found
2a03:2880:f366:c0:face:b00c:0:43fe instagram.c10r.instagram.com graph.instagram.com
exit code: 0
```

DNS resolution for `graph.instagram.com` succeeds (via `getent hosts`, `nslookup` is
not installed in this container). This rules out DNS as the cause.

## 6. Proxy environment variables

```
http_proxy= https_proxy=http://127.0.0.1:40297 HTTP_PROXY= HTTPS_PROXY=http://127.0.0.1:40297
```

`https_proxy`/`HTTPS_PROXY` point to a local proxy at `127.0.0.1:40297` (the
pre-configured agent/CCR proxy documented in this environment's setup). All outbound
HTTPS traffic is forced through it.

---

## Summary of findings

- **DNS resolves fine** for `graph.instagram.com` (getent hosts succeeded).
- **All outbound HTTPS traffic in this sandbox is routed through a local proxy**
  (`https_proxy=http://127.0.0.1:40297`), which is the standard Anthropic CCR agent
  proxy for this environment.
- The proxy **rejects the CONNECT tunnel with `403 Forbidden`** for both
  `graph.instagram.com` and `www.google.com` — i.e., this is **not** an
  Instagram-specific block. General, non-allowlisted internet access appears to be
  blocked entirely by proxy policy.
- `github.com` **is** allowed through the proxy (`200 Connection Established` on the
  CONNECT), consistent with `git push` working from this same environment. The `400`
  received afterward is the proxy layer rejecting a bare `GET /` (not shaped like a
  GitHub API/git request), not a network failure.
- Net conclusion: the Instagram Graph API is unreachable from this sandbox because
  it is not on the proxy's outbound allowlist — the same policy that also blocks
  `www.google.com`. Per the environment README (`/root/.ccr/README.md`), a 403 from
  the proxy on a given host means that host isn't currently permitted through the
  agent proxy's network policy.

No interpretation beyond the raw data above was requested to be acted upon; this
report only gathers and presents the diagnostic output as instructed.
