project_path: /blog/_project.yaml
book_path: /blog/_book.yaml
description: A list of all CTF challenges that I wrote (keep updating)

{# updated_on: 2020-04-10 #}
{# published_on: 2020-04-10 #}
{# tags: ctf #}
{# featured_image: /blog/images/2020/04/ctf.png #}
{# featured_snippet: A list of all CTF challenges that I wrote (keep updating) #}

# My CTF Challenges

Below are a list of all CTF challenges that I wrote. I'll keep updating this list.

### API Service Proxy
A vulnerable API Gateway infra with 4 flags: easyssrf, sqli, hardssrf, bac. This was designed as an assignment for UNSW COMP6843 (Extended Web Application Security) course.

Source Code & Solution: [https://github.com/adamyi/comp6443_asp_challenge](https://github.com/adamyi/comp6443_asp_challenge)

### Geegle3 Infra
A set of company infrastructure for a BeyondCorp-like zero-trust network, flag submission via working email server (can phish flags from other teams), binary challenges tunneling over websocket, monorepo CTF bazel building and deployment with team isolation, etc.

This was for SECedu CTF 2019, a national CTF competition with students from Sydney, Melbourne, as well as employees from Commonwealth Bank of Australia.

Source Code: [https://github.com/adamyi/Geegle3/tree/master/infra](https://github.com/adamyi/Geegle3/tree/master/infra)

### Docs
A LaTeX injection web challenge with incremental steps (from arbitrary file read to RCE). This was part of SECedu CTF 2019.

Source Code & Solution: [https://github.com/adamyi/Geegle3/tree/master/chals/web/docs](https://github.com/adamyi/Geegle3/tree/master/chals/web/docs)

### PasteWeb
A XSS challenge with a 5-step chain and script gadget. This was part of SECedu CTF 2019.

Source Code & Solution: [https://github.com/adamyi/Geegle3/tree/master/chals/web/pasteweb](https://github.com/adamyi/Geegle3/tree/master/chals/web/pasteweb)

### SecLearn
A XSS challenge by abusing Chrome XSS Auditor and browser side channel. This was part of SECedu CTF 2019.

Source Code & Solution: [https://github.com/adamyi/Geegle3/tree/master/chals/web/seclearn](https://github.com/adamyi/Geegle3/tree/master/chals/web/seclearn)

### Search
A working search engine with a simple SSRF vulnerability. This was part of SECedu CTF 2019.

Source Code: [https://github.com/adamyi/Geegle3/tree/master/chals/web/search](https://github.com/adamyi/Geegle3/tree/master/chals/web/search)

### bugreport
A XXE challenge, in which you need to use FTP to bypass HTTP(S) filters. This was part of SECedu CTF 2019.

Source Code & Solution: [https://github.com/adamyi/Geegle3/tree/master/chals/web/bugreport](https://github.com/adamyi/Geegle3/tree/master/chals/web/bugreport)

### FlatEarth
A PHP challenge (switch weak typing + SQLi + assert RCE). This was part of SECedu CTF 2019.

Source Code & Solution: [https://github.com/adamyi/Geegle3/tree/master/chals/web/flatearth](https://github.com/adamyi/Geegle3/tree/master/chals/web/flatearth)

### memegen
PHP LD_PRELOAD injection to get RCE. This was part of SECedu CTF 2019.

Source Code & Solution: [https://github.com/adamyi/Geegle3/tree/master/chals/web/memegen](https://github.com/adamyi/Geegle3/tree/master/chals/web/memegen)

### Unhackable App Engine
A serverless app infra that doesn't scale lol. Hijack arbitrary page via cache key injection. This was for SecTalks Sydney Ninja Night 0x04.

Source Code: [https://github.com/sectalks/sectalks/tree/master/ctfs/NN0x04](https://github.com/sectalks/sectalks/tree/master/ctfs/NN0x04)

Solution: [https://github.com/sectalks/sectalks/tree/master/ctf-solutions/NN0x04](https://github.com/sectalks/sectalks/tree/master/ctf-solutions/NN0x04)

### K17Coins
A web challenge for exploiting race conditions. This was part of UNSW Security Society internal CTF.

Source Code & Solution: [https://github.com/unswsecuritysociety/writeups/tree/master/2019/t2internal/web/K17Coins](https://github.com/unswsecuritysociety/writeups/tree/master/2019/t2internal/web/K17Coins)

### Guess
A Number guessing game CTF challenge. Exploit weak pseudo-random number generator, and reverse engineer gRPC/Protobuf traffic. This was part of UNSW Security Society internal CTF.

Source Code & Solution: [https://github.com/unswsecuritysociety/writeups/tree/master/2019/t2internal/misc/guess](https://github.com/unswsecuritysociety/writeups/tree/master/2019/t2internal/misc/guess)
