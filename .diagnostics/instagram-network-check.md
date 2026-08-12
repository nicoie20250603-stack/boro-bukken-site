# Instagram Graph API Network Diagnostic Report

Generated: 2026-08-12 (UTC timestamp captured in check #1 below)

This is a one-time diagnostic report. It does not modify any blog article and
was not used to post to Instagram. It gathers raw network diagnostic output
only.

**Note on the access token:** command #2 below was run exactly as specified,
but the proxy rejected the CONNECT tunnel to `graph.instagram.com` with a
403 before curl ever transmitted the actual HTTP request line (the point at
which the `access_token` query parameter would have appeared in the verbose
output). As a result, the access token does not appear anywhere in the
captured output pasted below — nothing was redacted, there was simply
nothing to redact.

## 1. `date -u`

```
Wed Aug 12 22:34:18 UTC 2026
```

## 2. `curl -v --max-time 15 https://graph.instagram.com/v21.0/...&access_token=...`

```
* Uses proxy env variable no_proxy == 'localhost,127.0.0.1,::1,127.0.0.0/8,0.0.0.0/8,::,169.254.0.0/16,anthropic.com,.anthropic.com,*.anthropic.com,registry.npmjs.org,jsr.io,npm.jsr.io,pypi.org,files.pythonhosted.org,index.crates.io,proxy.golang.org,host.docker.internal,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,100.64.0.0/10,.svc.cluster.local,*.svc.cluster.local'
* Uses proxy env variable https_proxy == 'http://127.0.0.1:46573'
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying 127.0.0.1:46573...
* Connected to 127.0.0.1 (127.0.0.1) port 46573
* CONNECT tunnel: HTTP/1.1 negotiated
* allocate connect buffer
* Establish HTTP proxy tunnel to graph.instagram.com:443
> CONNECT graph.instagram.com:443 HTTP/1.1
> Host: graph.instagram.com:443
> User-Agent: curl/8.5.0
> Proxy-Connection: Keep-Alive
> 
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0< HTTP/1.1 403 Forbidden
< Content-Length: 36
< 
* CONNECT tunnel failed, response 403
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
* Closing connection
curl: (56) CONNECT tunnel failed, response 403
```

Exit code: 56 (`CONNECT tunnel failed, response 403`)

## 3. `curl -v --max-time 15 https://www.google.com`

```
* Uses proxy env variable no_proxy == 'localhost,127.0.0.1,::1,127.0.0.0/8,0.0.0.0/8,::,169.254.0.0/16,anthropic.com,.anthropic.com,*.anthropic.com,registry.npmjs.org,jsr.io,npm.jsr.io,pypi.org,files.pythonhosted.org,index.crates.io,proxy.golang.org,host.docker.internal,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,100.64.0.0/10,.svc.cluster.local,*.svc.cluster.local'
* Uses proxy env variable https_proxy == 'http://127.0.0.1:46573'
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying 127.0.0.1:46573...
* Connected to 127.0.0.1 (127.0.0.1) port 46573
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
```

Exit code: 56 (`CONNECT tunnel failed, response 403`)

## 4. `curl -v --max-time 15 https://github.com`

```
* Uses proxy env variable no_proxy == 'localhost,127.0.0.1,::1,127.0.0.0/8,0.0.0.0/8,::,169.254.0.0/16,anthropic.com,.anthropic.com,*.anthropic.com,registry.npmjs.org,jsr.io,npm.jsr.io,pypi.org,files.pythonhosted.org,index.crates.io,proxy.golang.org,host.docker.internal,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,100.64.0.0/10,.svc.cluster.local,*.svc.cluster.local'
* Uses proxy env variable https_proxy == 'http://127.0.0.1:46573'
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0*   Trying 127.0.0.1:46573...
* Connected to 127.0.0.1 (127.0.0.1) port 46573
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
{ [2483 bytes data]
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
*  start date: Aug 12 16:37:34 2026 GMT
*  expire date: Aug 12 17:37:34 2027 GMT
*  subjectAltName: host "github.com" matched cert's "github.com"
*  issuer: CN=CCR Upstream Proxy CA (staging); O=Anthropic
*  SSL certificate verify ok.
*   Certificate level 0: Public key type RSA (2048/112 Bits/secBits), signed using sha256WithRSAEncryption
*   Certificate level 1: Public key type RSA (4096/152 Bits/secBits), signed using sha256WithRSAEncryption
* using HTTP/1.x
} [5 bytes data]
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
100   138  100   138    0     0    448      0 --:--:-- --:--:-- --:--:--   449
* Closing connection
} [5 bytes data]
} [5 bytes data]
* TLSv1.3 (OUT), TLS alert, close notify (256):
} [2 bytes data]
{"message":"Request path could not be canonicalized.","documentation_url":"https://docs.anthropic.com/en/docs/claude-code/github-actions"}
```

Exit code: 0 (curl completed; note the TLS certificate is issued by `CCR Upstream Proxy CA (staging)`, i.e. the proxy performs TLS interception/termination for allowed hosts, and the response body is generated by an Anthropic-controlled endpoint, not by github.com itself.)

## 5. `nslookup graph.instagram.com` / `getent hosts graph.instagram.com`

```
/bin/bash: line 3: nslookup: command not found
2a03:2880:f275:1cd:face:b00c:0:43fe instagram.c10r.instagram.com graph.instagram.com
```

DNS resolution succeeds (via `getent`, `nslookup` binary is not installed in this environment).

## 6. Proxy environment variables

```
http_proxy= https_proxy=http://127.0.0.1:46573 HTTP_PROXY= HTTPS_PROXY=http://127.0.0.1:46573
```

(`no_proxy` value, captured as part of curl's verbose output above, includes: `localhost,127.0.0.1,::1,127.0.0.0/8,0.0.0.0/8,::,169.254.0.0/16,anthropic.com,.anthropic.com,*.anthropic.com,registry.npmjs.org,jsr.io,npm.jsr.io,pypi.org,files.pythonhosted.org,index.crates.io,proxy.golang.org,host.docker.internal,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16,100.64.0.0/10,.svc.cluster.local,*.svc.cluster.local`)
