# decode-base64-github-action

This action sets a Base64 string to an environment variable or writes it to a file.

## Usage

### Simple usage

```yml
- uses: leo-Xtell/decode-base64-github-action@v0.1.0
  id: decode-base64
  with:
    base64: <Base64>
- run: |
    echo ${{ steps.decode-base64.outputs.decoded }}
```

### Example of default output path

```yml
- uses: leo-Xtell/decode-base64-github-action@v0.1.0
  id: decode-base64
  with:
    base64: <Base64>
- run: |
    echo "Path=${{ steps.decode-base64.outputs.output-path }}"
    cat ${{ steps.decode-base64.outputs.output-path }}
```

### Example of specifying a file path for output

```yml
- uses: leo-Xtell/decode-base64-github-action@v0.1.0
  id: decode-base64
  with:
    base64: <Base64>
    output-path: ${{ runner.temp }}/tmp.txt
- run: |
    echo "Path=${{ steps.decode-base64.outputs.output-path }}"
    cat ${{ steps.decode-base64.outputs.output-path }}
```

### Example of setting an environment variable

```yml
- uses: leo-Xtell/decode-base64-github-action@v0.1.0
  with:
    base64: <Base64>
    environment: DECODED
- run: |
    echo $DECODED
```

## Parameters

### inputs

|Name|Required|Type|Default|Description|
|:--|:--|:--|:--|:--|
|`base64`|`true`|`string`||Specifies a Base64 string to decode.|
|`environment`|`false`|`string`|`''`|To also set the decoded string to an environment variable, specify the name of the environment variable in this parameter.If this value is set, the environment variable will be set to the decoded result.If omitted, the environment variable will not be set.|
|`output-path`|`false`|`string`|`''`|To output the decoded string to the specified file, specify a path in this parameter.If omitted, the internally set path is used and passed to `outputs.output-path`.|

### outputs

|Name|Type|Description|
|:--|:--|:--|
|`decoded`|`string`|The decoded string is set.|
|`output-path`|`string`|The file path where the decoded string was written out.|

## License

Any contributions made under this project will be governed by the [MIT License](https://github.com/leo-Xtell/decode-base64-github-action/blob/main/LICENSE).
