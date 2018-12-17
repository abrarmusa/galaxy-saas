# react-print-tool

Provides methods to open print preview for a specific component

## Installation
  
```
npm install react-print-tool
```

## Usage

Import the react tool object and use one of the provided methods

## Example

```Typescript

 import { PrintTool } from "react-print-tool"

//use your own react component
 PrintTool.printFromReactComponent(<TheBestReactComponent prop={data} /> )

 // use html in a string
 PrintTool.printFromString("<div>Hello world</div>" )

// use selector to print an existing html element
 PrintTool.printExistingElement("div.elementClass #elementID")

```