# Change Log - @griffel/webpack-extraction-plugin

This log was last generated on Fri, 26 Jan 2024 10:01:06 GMT and should not be manually modified.

<!-- Start content -->

## 0.5.0

Fri, 26 Jan 2024 10:01:06 GMT

### Minor changes

- feat: add "unstable_attachToEntryPoint" option (olfedias@microsoft.com)

## 0.4.5

Fri, 12 Jan 2024 11:08:40 GMT

### Patches

- Bump @griffel/core to v1.15.2

## 0.4.4

Thu, 30 Nov 2023 16:42:15 GMT

### Patches

- Bump @griffel/core to v1.15.1

## 0.4.3

Mon, 13 Nov 2023 15:16:05 GMT

### Patches

- fix: replace null inputSourceMap with undefined (olfedias@microsoft.com)

## 0.4.2

Thu, 09 Nov 2023 14:35:07 GMT

### Patches

- Bump @griffel/core to v1.15.0

## 0.4.1

Mon, 30 Oct 2023 14:08:55 GMT

### Patches

- chore: bump Babel dependencies (olfedias@microsoft.com)
- Bump @griffel/core to v1.14.4

## 0.4.0

Wed, 18 Oct 2023 09:11:01 GMT

### Minor changes

- feat(webpack-extraction-plugin): add compat for Rspack (olfedias@microsoft.com)

## 0.3.22

Tue, 03 Oct 2023 19:09:32 GMT

### Patches

- Bump @griffel/core to v1.14.3

## 0.3.21

Fri, 15 Sep 2023 08:08:43 GMT

### Patches

- Bump @griffel/core to v1.14.2

## 0.3.20

Fri, 01 Sep 2023 12:27:27 GMT

### Patches

- chore: remove experimental_resetModuleIndexes (olfedias@microsoft.com)

## 0.3.19

Mon, 28 Aug 2023 17:17:47 GMT

### Patches

- chore: stop inlining the styles in the virtual CSS module request (miclo@microsoft.com)

## 0.3.18

Mon, 31 Jul 2023 12:18:47 GMT

### Patches

- Bump @griffel/core to v1.14.1

## 0.3.17

Mon, 31 Jul 2023 09:05:33 GMT

### Patches

- fix: do not emit empty CSS files (olfedias@microsoft.com)
- chore: add support for different buckets in makeResetStyles (olfedias@microsoft.com)
- Bump @griffel/core to v1.14.0

## 0.3.16

Wed, 19 Jul 2023 07:32:54 GMT

### Patches

- Bump @griffel/core to v1.13.1

## 0.3.15

Thu, 13 Jul 2023 11:31:22 GMT

### Patches

- Bump @griffel/core to v1.13.0

## 0.3.14

Thu, 29 Jun 2023 12:49:54 GMT

### Patches

- Bump @griffel/core to v1.12.2

## 0.3.13

Wed, 28 Jun 2023 16:07:13 GMT

### Patches

- Bump @griffel/core to v1.12.1

## 0.3.12

Tue, 27 Jun 2023 14:18:04 GMT

### Patches

- feat: add experimental_resetModuleIndexes (olfedias@microsoft.com)
- chore: bump stylis (olfedias@microsoft.com)
- Bump @griffel/core to v1.12.0

## 0.3.11

Tue, 25 Apr 2023 14:34:44 GMT

### Patches

- fix: cleanup imports properly (olfedias@microsoft.com)

## 0.3.10

Fri, 14 Apr 2023 07:58:49 GMT

### Patches

- Bump @griffel/core to v1.11.0

## 0.3.9

Wed, 29 Mar 2023 12:45:13 GMT

### Patches

- Bump @griffel/core to v1.10.1

## 0.3.8

Tue, 28 Mar 2023 13:04:53 GMT

### Patches

- chore(extraction-plugin): redo chunk attachment (olfedias@microsoft.com)
- chore(extraction-plugin): use ESM imports (olfedias@microsoft.com)
- chore(extraction-plugin): re-implement unstable_keepOriginalCode (olfedias@microsoft.com)

## 0.3.7

Thu, 02 Mar 2023 14:51:11 GMT

### Patches

- chore: move @griffel/core to dependencies (olfedias@microsoft.com)
- Bump @griffel/core to v1.10.0

## 0.3.6

Fri, 10 Feb 2023 10:23:25 GMT

### Patches

- refactor: update how griffel chunk is attached (olfedias@microsoft.com)
- fix: handling modules with SplitChunksPlugin (olfedias@microsoft.com)
- Bump @griffel/core to v1.9.2

## 0.3.5

Wed, 01 Feb 2023 10:47:40 GMT

### Patches

- fix: avoid conflicts with SplitChunksPlugin (olfedias@microsoft.com)

## 0.3.4

Thu, 26 Jan 2023 14:06:28 GMT

### Patches

- feat: implement "unstable_keepOriginalCode" for extraction plugin (olfedias@microsoft.com)
- fix: properly handle @media in __resetStyles() (olfedias@microsoft.com)
- fix: support aliased imports (olfedias@microsoft.com)
- Bump @griffel/core to v1.9.1

## 0.3.3

Tue, 20 Dec 2022 11:48:33 GMT

### Patches

- Bump @griffel/core to v1.9.0

## 0.3.2

Fri, 09 Dec 2022 11:15:19 GMT

### Patches

- fix: avoid empty CSS imports (olfedias@microsoft.com)
- chore: remove loader-utils & schema-utils from dependencies (olfedias@microsoft.com)
- chore: remove path magic in extraction process (olfedias@microsoft.com)
- Bump @griffel/core to v1.8.3

## 0.3.1

Wed, 30 Nov 2022 17:14:53 GMT

### Patches

- chore: update loader-utils dependency (olfedias@microsoft.com)
- fix: don't throw in the plugin (olfedias@microsoft.com)

## 0.3.0

Wed, 30 Nov 2022 09:32:24 GMT

### Minor changes

- chore: rework plugin to avoid dependency on splitChunks.cacheGroups (olfedias@microsoft.com)

## 0.2.2

Thu, 24 Nov 2022 10:05:12 GMT

### Patches

- fix: use style buckets in CSS extraction (olfedias@microsoft.com)
- Bump @griffel/core to v1.8.2

## 0.2.1

Wed, 26 Oct 2022 11:06:03 GMT

### Patches

- Bump @griffel/core to v1.8.1

## 0.2.0

Thu, 13 Oct 2022 08:36:18 GMT

### Minor changes

- feat: add support for makeResetStyles (olfedias@microsoft.com)
- Bump @griffel/core to v1.8.0

### Patches

- fix: handle multiple url() (olfedias@microsoft.com)

## 0.1.8

Wed, 05 Oct 2022 14:28:43 GMT

### Patches

- Bump @griffel/core to v1.7.0

## 0.1.7

Tue, 04 Oct 2022 08:44:33 GMT

### Patches

- chore: adopt API changes from @griffel/core (olfedias@microsoft.com)
- Bump @griffel/core to v1.6.1

## 0.1.6

Tue, 16 Aug 2022 11:16:00 GMT

### Patches

- Bump @griffel/core to v1.6.0

## 0.1.5

Fri, 05 Aug 2022 09:44:44 GMT

### Patches

- feat: add NextJS plugin for CSS extraction (dwlad90@gmail.com)

## 0.1.4

Wed, 03 Aug 2022 13:28:05 GMT

### Patches

- fix: assets handling in Windows env (olfedias@microsoft.com)

## 0.1.3

Wed, 27 Jul 2022 13:03:12 GMT

### Patches

- fix: handle asset imports (olfedias@microsoft.com)
- Bump @griffel/core to v1.5.1

## 0.1.2

Tue, 19 Jul 2022 10:20:09 GMT

### Patches

- fix: handle comments in output (olfedias@microsoft.com)
- Bump @griffel/core to v1.5.0

## 0.1.1

Tue, 28 Jun 2022 15:47:33 GMT

### Patches

- fix: improve getElementReference() to handle multiple childen (olfedias@microsoft.com)

## 0.1.0

Tue, 28 Jun 2022 09:50:50 GMT

### Minor changes

- chore: initial release (olfedias@microsoft.com)
- Bump @griffel/core to v1.4.1

## 0.0.1

Thu, 23 Jun 2022 08:37:05 GMT

### Patches

- Bump @griffel/core to v1.4.0
