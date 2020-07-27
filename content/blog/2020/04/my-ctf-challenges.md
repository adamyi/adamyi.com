project_path: /blog/_project.yaml
book_path: /blog/_book.yaml
description: A list of all CTF challenges that I wrote (keep updating)

{# updated_on: 2020-07-27 #}
{# published_on: 2020-04-10 #}
{# tags: ctf #}
{# featured_image: /blog/images/2020/04/ctf.png #}
{# featured_snippet: A list of all CTF challenges that I wrote (keep updating) #}

# My CTF Challenges

Below are a list of all CTF challenges that I wrote. I'll keep updating this list.

I've deployed a demo site for most of the challenges. It's not guaranteed that the demo site works as intended though (they are not tested nor actively looked after)... The demo sites are offered as a courtesy, because I believe it's a great learning opportunity for others, and my way of giving back to the community. Congrats if you get RCE, but please do not use the server for other purposes (e.g. mining). If I found that out, I'll take down the server, and it won't benefit anyone :(

Update (2020-07-27): these servers are temporarily taken down and links are removed from this page.

### API Service Proxy

A vulnerable API Gateway infra with 4 flags: easyssrf, sqli, hardssrf, bac. This was designed as an assignment for students in UNSW's COMP6843 (Extended Web Application Security) course.

<!--
- Play it here: [https://asp.ctf.withadamyi.com](https://asp.ctf.withadamyi.com)
-->

- Source Code & Solution: [https://github.com/adamyi/comp6443_asp_challenge](https://github.com/adamyi/comp6443_asp_challenge)

### Geegle3 Infra

A set of company infrastructure for a BeyondCorp-like zero-trust network, flag submission via working email server (can phish flags from other teams), binary challenges tunneling over websocket, monorepo CTF bazel building and deployment with team isolation, etc.

This was for SECedu CTF 2019, a national CTF competition with students from Sydney, Melbourne, as well as employees from Commonwealth Bank of Australia.

<!--
- Play it here: [https://mail.corp.geegle.org](https://mail.corp.geegle.org) (SSO credentials: username adamsfriends password adamisgood)
- Scoreboard: [https://scoreboard.corp.geegle.org](https://scoreboard.corp.geegle.org) (SSO credentials: username adamsfriends password adamisgood)
-->

- Source Code (infra): [https://github.com/adamyi/Geegle3/tree/master/infra](https://github.com/adamyi/Geegle3/tree/master/infra)
- Source Code (everything, solution under each chal subdir): [https://github.com/adamyi/Geegle3/](https://github.com/adamyi/Geegle3/)
- All challenges description/emails (not all are unlocked for adamsfriends@): [https://docs.google.com/document/d/1pgIbiwRGKaQQROt0lFuDUrE3Tk7eFbq40aJhb5hx3wY/edit](https://docs.google.com/document/d/1pgIbiwRGKaQQROt0lFuDUrE3Tk7eFbq40aJhb5hx3wY/edit)
- Challenge List: [https://docs.google.com/spreadsheets/d/15xOhZdRnNxNbSMNUSxPG_8K92lHa4z5SKJWPPTy5tAc/edit](https://docs.google.com/spreadsheets/d/15xOhZdRnNxNbSMNUSxPG_8K92lHa4z5SKJWPPTy5tAc/edit)

### Unhackable App Engine

A serverless app infra that doesn't scale lol. Hijack arbitrary page via cache key injection. This was for SecTalks Sydney Ninja Night 0x04.

<!--
- Play it here: [https://unhackable.app](https://unhackable.app)
-->

- Source Code: [https://github.com/sectalks/sectalks/tree/master/ctfs/NN0x04](https://github.com/sectalks/sectalks/tree/master/ctfs/NN0x04)
- Solution: [https://github.com/sectalks/sectalks/tree/master/ctf-solutions/NN0x04](https://github.com/sectalks/sectalks/tree/master/ctf-solutions/NN0x04)

### K17Coins

A web challenge for exploiting race conditions. This was part of UNSW Security Society internal CTF.

<!--
- Play it here: [https://k17coins.ctf.withadamyi.com](https://k17coins.ctf.withadamyi.com)
-->

- Source Code & Solution: [https://github.com/unswsecuritysociety/writeups/tree/master/2019/t2internal/web/K17Coins](https://github.com/unswsecuritysociety/writeups/tree/master/2019/t2internal/web/K17Coins)

### Guess

A Number guessing game CTF challenge. Exploit weak pseudo-random number generator, and reverse engineer gRPC/Protobuf traffic. This was part of UNSW Security Society internal CTF.

- Source Code & Solution: [https://github.com/unswsecuritysociety/writeups/tree/master/2019/t2internal/misc/guess](https://github.com/unswsecuritysociety/writeups/tree/master/2019/t2internal/misc/guess)

### Docs

A LaTeX injection web challenge with incremental steps (from arbitrary file read to RCE). This was part of SECedu CTF 2019.

<!--
- Play it here: [https://docs.corp.geegle.org](https://docs.corp.geegle.org) (SSO credentials: username adamsfriends password adamisgood)
-->

- Source Code & Solution: [https://github.com/adamyi/Geegle3/tree/master/chals/web/docs](https://github.com/adamyi/Geegle3/tree/master/chals/web/docs)

### PasteWeb

A XSS challenge with a 5-step chain and script gadget. This was part of SECedu CTF 2019.

<!--
- Play it here: [https://pasteweb.corp.geegle.org](https://pasteweb.corp.geegle.org) (SSO credentials: username adamsfriends password adamisgood)
-->

- Source Code & Solution: [https://github.com/adamyi/Geegle3/tree/master/chals/web/pasteweb](https://github.com/adamyi/Geegle3/tree/master/chals/web/pasteweb)

### SecLearn

A XSS challenge by abusing Chrome XSS Auditor and browser side channel (xsssearch + timing). This was part of SECedu CTF 2019.

<!--
- Play it here: [https://seclearn.corp.geegle.org](https://seclearn.corp.geegle.org) (SSO credentials: username adamsfriends password adamisgood)
-->

- Source Code & Solution: [https://github.com/adamyi/Geegle3/tree/master/chals/web/seclearn](https://github.com/adamyi/Geegle3/tree/master/chals/web/seclearn)

### Search

A working search engine with a simple SSRF vulnerability. This was part of SECedu CTF 2019.

<!--
- Play it here: [https://geegle.org](https://geegle.org)
-->

- Source Code: [https://github.com/adamyi/Geegle3/tree/master/chals/web/search](https://github.com/adamyi/Geegle3/tree/master/chals/web/search)

### bugreport

A XXE challenge, in which you need to use FTP to bypass HTTP(S) filters. This was part of SECedu CTF 2019.

<!--
- Play it here: [https://bugreport.corp.geegle.org/api/bugreport/csp](https://bugreport.corp.geegle.org/api/bugreport/csp) (SSO credentials: username adamsfriends password adamisgood)
-->

- Source Code & Solution: [https://github.com/adamyi/Geegle3/tree/master/chals/web/bugreport](https://github.com/adamyi/Geegle3/tree/master/chals/web/bugreport)

### FlatEarth

A PHP challenge (switch weak typing + SQLi + assert RCE). This was part of SECedu CTF 2019.

<!--
- Play it here: [https://flatearth.corp.geegle.org](https://flatearth.corp.geegle.org) (SSO credentials: username adamsfriends password adamisgood)
-->

- Source Code & Solution: [https://github.com/adamyi/Geegle3/tree/master/chals/web/flatearth](https://github.com/adamyi/Geegle3/tree/master/chals/web/flatearth)

### memegen

PHP LD_PRELOAD injection to get RCE. This was part of SECedu CTF 2019.

<!--
- Play it here: [https://memegen.corp.geegle.org](https://memegen.corp.geegle.org) (SSO credentials: username adamsfriends password adamisgood)
-->

- Source Code & Solution: [https://github.com/adamyi/Geegle3/tree/master/chals/web/memegen](https://github.com/adamyi/Geegle3/tree/master/chals/web/memegen)
