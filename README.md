# decode-base64-github-action

このアクションはBase64文字列を環境変数に設定、またはファイルに書き出すアクションです。

## Usage

### Simple usage

```yml
- uses: akiojin/decode-github-action@v0.1.0
  with:
    base64: <Base64>
```

### Usage temporary keychain

```yml
- usas: setup-temporary-keychain-github-action@v1
  id: setup-temporary-keychain

- uses: akiojin/setup-xcode-environment-github-action@v2
  id: setup-xcode-environment
  with:
    type: 'enterprise'
    app-identifier: com.exmple.App
    team-id: ABC0123456
    git-url: 'https://github.com/certificates'
    git-passphase: ${{ secrets.APPLE_CERTIFICATE_GIT_PASSPHASE }}
    keychain: ${{ steps.setup-temporary-keychain.outputs.keychain }}
    keychain-password: ${{ steps.setup-temporary-keychain.outputs.keychain-password }}
```

## Arguments

### inputs

|Name|Required|Type|Default|Description|
|:--|:--|:--|:--|:--|
|`base64`|`true`|`string`||Define the profile type, can be `appstore`, `adhoc`, `development`, `enterprise`, `developer_id`, mac_installer_distribution.|
|`environment`|`false`|`string`||The bundle identifier(s) of your app (comma-separated string or array of strings).|

### outputs

|Name|Type|Default|Description|
|:--|:--|:--|:--|
|`decoded`|`string`||Define the profile type, can be `appstore`, `adhoc`, `development`, `enterprise`, `developer_id`, mac_installer_distribution.|
|`output-path`|`string`||The bundle identifier(s) of your app (comma-separated string or array of strings).|

## License

Any contributions made under this project will be governed by the [MIT License](https://github.com/akiojin/decode-base64-github-action/blob/main/LICENSE).
