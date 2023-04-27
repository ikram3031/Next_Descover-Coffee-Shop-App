# Theme.js

The `theme.js` file defines a JavaScript object called theme which contains color codes for different parts of `Ground Floor v2` project. It can be imported and used in other JavaScript files.

This file is located at `"../utils/theme.js"`

<!-- Copy code function -->
<script>
    function copyText(text) {
    var textToCopy = text;

    var textarea = document.createElement("textarea");
    textarea.value = textToCopy;

    // Make sure we can copy the text
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);

    // Select the text
    textarea.select();

    document.execCommand("copy");

    // Remove the textarea
    document.body.removeChild(textarea);
}

</script>

<!-- Styles -->
<style>
    button{
        cursor: pointer;
        padding: 5px 10px;
        font-weight: bold;
    }

    li{
        font-weight: 600;
        color: #d7ba7d;
    }

    .code{
        display:flex;
        gap: 1rem;
        background-color: white; 
        padding: 3px;
        width:200px;
    }

    .code2{
        display:flex;
        gap: 1rem;
        background-color: back; 
        padding: 3px;
        width:200px;
    }

    .color{
        padding: 5px 10px;
        width: 15%;
        font-weight: 600;
        border-radius: 5px;
    }
</style>

<h3>There are 7 types of Color Palette described here, they are listed below:</h3>

| Palette          | Color            | Hexadecimal Code                                                                                                                | Copy Code                                                             |
| ---------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| graphColor       | `graph-1`        | <div class="code" class="code" style="color: #2E56F4"><div class="color" style="background-color: #2E56F4"> </div>#2E56F4</div> | <button onclick="copyText(`variant['graph-1']`)">Copy</button>        |
|                  | `graph-2`        | <div class="code" style="color: #00D7F7"><div class="color" style="background-color: #00D7F7"> </div>#00D7F7</div>              | <button onclick="copyText(`variant['graph-2']`)">Copy</button>        |
|                  | `graph-3`        | <div class="code" style="color: #8b2dff"><div class="color" style="background-color: #8b2dff"> </div>#8b2dff</div>              | <button onclick="copyText(`variant['graph-3']`)">Copy</button>`       |
|                  | `graph-4`        | <div class="code" style="color: #FB9A00"><div class="color" style="background-color: #FB9A00"> </div>#FB9A00</div>              | <button onclick="copyText(`variant['graph-4']`)">Copy</button>        |
|                  | `graph-5`        | <div class="code" style="color: #00b904"><div class="color" style="background-color: #00b904"> </div>#00b904</div>              | <button onclick="copyText(`variant['graph-5']`)">Copy</button>        |
| shadeColor       | `insight-purple` | <div class="code2" style="color: #f8f2ff"><div class="color" style="background-color: #f8f2ff"> </div>#f8f2ff</div>             | <button onclick="copyText(`variant['insight-purple']`)">Copy</button> |
|                  | `insight-yellow` | <div class="code2" style="color: #fffaf2"><div class="color" style="background-color: #fffaf2"> </div>#fffaf2</div>             | <button onclick="copyText(`variant['insight-yellow']`)">Copy</button> |
|                  | `error-bg`       | <div class="code2" style="color: #fcf2f2"><div class="color" style="background-color: #fcf2f2"> </div>#fcf2f2</div>             | <button onclick="copyText(`variant['error-bg']`)">Copy</button>       |
|                  | `selection-bg`   | <div class="code2" style="color: #f2f4fe"><div class="color" style="background-color: #f2f4fe"> </div>#f2f4fe</div>             | <button onclick="copyText(`variant['section-bg']`)">Copy</button>     |
| neutralColor     | `neutral-1`      | <div class="code" style="color: #39424D"><div class="color" style="background-color: #39424D"> </div>#39424D</div>              | <button onclick="copyText(`variant['neutral-1']`)">Copy</button>      |
|                  | `neutral-2`      | <div class="code2" style="color: #6B747F"><div class="color" style="background-color: #6B747F"> </div>#6B747F</div>             | <button onclick="copyText(`variant['neutral-2']`)">Copy</button>      |
|                  | `neutral-3`      | <div class="code2" style="color: #BBC4CF"><div class="color" style="background-color: #BBC4CF"> </div>#BBC4CF</div>             | <button onclick="copyText(`variant['neutral-3']`)">Copy</button>      |
|                  | `neutral-4`      | <div class="code2" style="color: #E2E6F5"><div class="color" style="background-color: #E2E6F5"> </div>#E2E6F5</div>             | <button onclick="copyText(`variant['neutral-4']`)">Copy</button>      |
|                  | `neutral-5`      | <div class="code2" style="color: #F0F3F8"><div class="color" style="background-color: #F0F3F8"> </div>#F0F3F8</div>             | <button onclick="copyText(`variant['neutral-5']`)">Copy</button>      |
| uiColor          | `error`          | <div class="code" style="color: #DD0000"><div class="color" style="background-color: #DD0000"> </div>#DD0000</div>              | <button onclick="copyText(`variant['error']`)">Copy</button>          |
|                  | `success`        | <div class="code" style="color: #00B904"><div class="color" style="background-color: #00B904"> </div>#00B904</div>              | <button onclick="copyText(`variant['success']`)">Copy</button>        |
| primaryColor     | `primary-1`      | <div class="code" style="color: #2a50fd"><div class="color" style="background-color: #2a50fd"> </div>#2a50fd</div>              | <button onclick="copyText(`variant['primary-1']`)">Copy</button>      |
|                  | `primary-2`      | <div class="code" style="color: #081348"><div class="color" style="background-color: #081348"> </div>#081348</div>              | <button onclick="copyText(`variant['primary-2']`)">Copy</button>      |
| additionalColors | `white`          | <div class="code2" style="color: #FFFFFF"><div class="color" style="background-color: #FFFFFF"> </div>#FFFFFF</div>             | <button onclick="copyText(`variant['white']`)">Copy</button>          |
|                  | `black`          | <div class="code" style="color: #000000"><div class="color" style="background-color: #000000"> </div>#000000</div>              | <button onclick="copyText(`variant['black']`)">Copy</button>          |
|                  | `text-color`     | <div class="code" style="color: #081348"><div class="color" style="background-color: #081348"> </div>'primary-2'</div>          | <button onclick="copyText(`variant['text-color']`)">Copy</button>     |
|                  | `border`         | <div class="code2" style="color: #BBC4CF"><div class="color" style="background-color: #BBC4CF"> </div>'neutral-3'</div>         | <button onclick="copyText(`variant['border']`)">Copy</button>         |

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
