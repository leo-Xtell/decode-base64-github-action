# decode-base64-github-action

This action sets a Base64 string to an environment variable or writes it to a file.

## Usage

### Simple usage

```yml
- uses: akiojin/decode-base64-github-action@v0.1.0
  id: decode-base64
  with:
    base64: <Base64>
- run: |
    echo ${{ steps.decode-base64.outputs.decoded }}
    cat ${{ steps.decode-base64.outputs.output-path }}
```

### 環境変数に設定する例

```yml
- uses: akiojin/decode-github-action@v0.1.0
  with:
    base64: <Base64>
    environment: DECODED
- run: |
    echo $DECODED
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
