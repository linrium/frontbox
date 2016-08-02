# frontbox
Static Site Generators

![frontbox](http://i.imgur.com/vZTp0QW.png)

# Info

This is using Jade, CSS processor like SASS, SCSS, Stylus, BrowserSync, Minify, ext to build a static website very easy.

# Install
`$ npm install frontbox -g`

# Usage
Choose one with them

    $ frontbox [sass | scss | styl | stylus]

install npm package

    $ npm install

after that you must run

    $ frontbox fixmd

and run

    $ gulp

# Optimize code

If you want optimize js. Notice, if you use ES6, you must run

    $ gulp es5
    $ gulp optimize-js

And optimize css

    $ gulp optimize-css

Or both

    $ gulp optimize

# CSS

You can use assets very easily. You just use `resolve`
```css
body {
  background: resolve('foobar.jpg');
  background: resolve('icons/baz.png');
}
```

# Example with Config.yml
If you want to use config file. Easily, you just call it.

`_templates\config.yml`
```yaml
title: frontbox
author: lynkxyz
menu:
- {name: About Me, url: '#about-me'}
- {name: Work, url: '#work'}
- {name: Clients, url: '#clients'}
```

You can call it in every jade files in `_templates`

`_templates\componets\_header.jade`
```jade
head
    title #{title}
body
    h1 #{author}
    each val in menu
        li
            a(href="#{val.url}") #{val.name}
```

And it will render to html

```html
<head>
    <title>frontbox</title>
</head>
<body>
    <h1>lynkxyz</h1>
    <ul>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#clients">Clients</a></li>
    </ul>
</body>
```

# Example with Data
You can create Markdown file in `_templates\posts`.

`_templates\posts\test1.md`
```yaml
---
title: fontbox
year: 2016
---
### Hello world
```

`_templates\componets\_header.jade`
```jade
h1 #{test1.title}
span #{test1.year}
div!= test1.body
```

And it will render to html
```html
<h1>fontbox</h1>
<span>2016</span>
<div>
    <h3>Hello world</h3>
</div>
```

You can also using Iteration to many files
In `_templates\componets\_header.jade`
```jade
- var files = [test1, test2, test3]
ul
    each val in files
        li #{test1.title}
```
And it will render to html
```html
<ul>
    <li>frontbox</li>
    <li>lynkxyz</li>
    <li>foo</li>
</ul>
```
Using with sub folder in `_templates\posts`
Create folder `blog` in `_templates\posts`

`_templates\posts\blog\test1.md`
```yaml
---
title: fontbox
year: 2016
---
### Hello world
```
In `_templates\componets\_header.jade`
```jade
h1 #{blog.test1.title}
span #{blog.test1.year}
div!= tblog.est1.body
```

And it will render to html
```html
<h1>fontbox</h1>
<span>2016</span>
<div>
    <h3>Hello world</h3>
</div>
```

# More

Follow [jade](http://jade-lang.com/reference), [yaml](http://www.yaml.org/start.html)

# Contact

[https://www.facebook.com/lynkxyz](https://www.facebook.com/lynkxyz)

# LICENSE
(MIT License)

Copyright (c) 2016 lynkxyz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
