# history-stack

## install

```sh
npm install shoma2/history-stack#master
```

## usage

```js
import HistoryStack from "history-stack"

const historyStack = new HistoryStack({ url: "/" })

historyStack.push({ url: "/foo" })
historyStack.pop({ url: "/" })

console.log(historyStack.getStack())
console.log(historyStack.prevState) 
console.log(historyStack.canGoBack) // boolean
```