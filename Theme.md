# Theme.js

The `theme.js` file defines a JavaScript object called theme which contains color codes for different parts of `Ground Floor v2` project. It can be imported and used in other JavaScript files.

This file is located at `"../utils/theme.js"`

<h3>There are 7 types of Color Palette described here, they are listed below:</h3>

| Palette        | Color            | Hexadecimal Code                                                                                     | Copy Code            |
| -------------- | ---------------- | ---------------------------------------------------------------------------------------------------- | -------------------- |
| graphColor     | `graph-1`        | <span style="color: #2E56F4; background-color: white; padding: 2px">#2E56F4</span>                   | ```variant['graph-1']``` |
|                | `graph-2`        | <span style="color: #00D7F7; background-color: white; padding: 2px">#00D7F7</span>                   | `variant['graph-2']` |
|                | `graph-3`        | <span style="color: #6B747F; background-color: white; padding: 2px">#6B747F</span>                   | `variant['graph-3']` |
|                | `graph-4`        | <span style="color: #FB9A00; background-color: white; padding: 2px">#FB9A00</span>                   | `variant['graph-4']` |
|                | `graph-5`        | <span style="color: #081348; background-color: white; padding: 2px">#081348</span>                   | `variant['graph-5']` |
|                | `graph-6`        | <span style="color: #2444D8; background-color: white; padding: 2px">#2444D8</span>                   | `variant['graph-6']` |
| shadeColor     | `insight-purple` | <span style="color: #6B747F; background-color: white; padding: 2px">#6B747F</span>                   |
|                | `insight-yellow` | <span style="color: #6B747F; background-color: white; padding: 2px">#6B747F</span>                   |
|                | `error-bg`       | <span style="color: #6B747F; background-color: white; padding: 2px">#6B747F</span>                   |
|                | `selection-bg`   | <span style="color: #6B747F; background-color: white; padding: 2px">#6B747F</span>                   |
| neutralColor   | `neutral-1`      | <span style="color: #39424D; background-color: white; padding: 2px">#39424D</span>                   |
|                | `neutral-2`      | <span style="color: #6B747F; background-color: white; padding: 2px">#6B747F</span>                   |
|                | `neutral-3`      | <span style="color: #BBC4CF; padding: 2px">#BBC4CF</span>                                            |
|                | `neutral-4`      | <span style="color: #E2E6F5; padding: 2px">#E2E6F5</span>                                            |
|                | `neutral-5`      | <span style="color: #2444D8; background-color: white; padding: 2px">#F0F3F8</span>                   |
| uiColor        | `error`          | <span style="color: #DD0000; background-color: white; padding: 2px">#DD0000</span>                   |
|                | `success`        | <span style="color: #00B904; background-color: white; padding: 2px">#00B904</span>                   |
|                | `deepRed`        | <span style="color: #8D3131; background-color: white; padding: 2px">#8D3131</span>                   |
| primaryColor   | `primary-1`      | <span style="color: #2E56F4; background-color: white; padding: 2px">#2E56F4</span>                   |
|                | `primary-2`      | <span style="color: #081348; background-color: white; padding: 2px">#081348</span>                   |
| othersColor    | `bgColorBlack`   | <span style="color: #000000; background-color: white; padding: 2px">#000000</span>                   |
|                | `bgColorWhite`   | <span style="color: #FFFFFF; padding: 2px">#FFFFFF</span>                                            |
| coreThemeColor | `textColor`      | <span style="color: #081348; background-color: white; padding: 2px">primaryColor['primary-2']</span> |
|                | `bgColor`        | <span style="color: #FFFFFF; padding: 2px">#FFFFFF</span>                                            |
|                | `black`          | <span style="color: #000000; background-color: white; padding: 2px">#000000</span>                   |
|                | `border`         | <span style="color: #D4D7E3; padding: 2px">#D4D7E3</span>                                            |

## Usage

to use the colors declared in the `theme.js` file, you can simply reference them by their key name in the theme object. For example, if you want to use the `deepRed` color in your component, you can access it like this: <br>`backgroundColor: "variant['graph-1']"`

These rule also apply for other CSS styling with colors. Here is the list of css color properties,

<ul>
<li> color </li>
<li> background-color </li>
<li> border-color </li>
<li> outline-color </li>
<li> caret-color </li>
<li>column-rule-color </li>
<li> fill </li>
<li> stroke </li>
<li> text-decoration-color </li>
<li> box-shadow </li>
<li> text-shadow </li>
<li> filter </li>
</ul>

<h2 style="color: #ff8090">Note:</h2>

Don't use any `HexaDecimal` color or color codes in this project. You must use the colors defined in the `theme.js` file.
