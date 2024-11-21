# Desafio 60

Criação de Addons Nativos com Node.js

## Explicação

### Ferramentas Utilizadas

- `N-API`: API para criação de addons nativos no Node.js.

### Funções Principais

- `Napi::String::New()`: Cria uma nova string N-API.
- `Napi::Function::New()`: Cria uma nova função N-API.
- `NODE_API_MODULE()`: Define o ponto de entrada do módulo N-API.

## Arquivos

### `day060.js`

```js
const addon = require('./build/Release/addon');

console.log(addon.hello());
```

### `addon.cpp`

```cpp
#include <napi.h>

Napi::String HelloWorld(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  return Napi::String::New(env, "Hello, N-API!");
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
  exports.Set(Napi::String::New(env, "hello"), Napi::Function::New(env, HelloWorld));
  return exports;
}

NODE_API_MODULE(addon, Init)
```

### `binding.gyp`

```gyp
{
  "targets": [
    {
      "target_name": "addon",
      "sources": [ "addon.cpp" ]
    }
  ]
}
```