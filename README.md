# text-dropper-animation
> Animation for dropping text
## Table of contents
* [Use](#use)
* [Requirements](#requirements)
* [Features](#features)
* [Main](#main)
* [Getting started](#getting-started)
* [Browser support](#browser-support)
* [Support](#support)
* [License](#license)
* [Code example](#code-example)
## Use
This library use plain javascript and css.
## Requirements
This script requires HTML5
## Main
``
	dropper.css
	dropper.js
``
## Getting started
Four quick start options are available:
* [Download the latest release](https://github.com/Ajjya/text-dropper-animation.git)
* Clone the repository: git clone (https://github.com/Ajjya/text-dropper-animation.git)
### Installation
Include files:
```html
	<link rel="stylesheet" href="/path/to/dropper.css">
	<script src="/path/to/dropper.js"></script>
```
### Usage
#### Basic usage
Use script for each block needed.
```js
     var dropper = new Dropper(parent_el, speed, animation);
```
* **parent_el:** - parent lement of blocking texts
* **speed:** - speed of dropping
* **animation:**  - object of animation config
{
  name: name of animation @keyframes, by default "dropper_slide_down",
  duration: animation duration,
  timing: animation timing function
}
Example:
```js
      var dropper = new Dropper(document.getElementById("parent_element"), 2000, { name: 'dropper_slide_down', speed: 2000, timing: "easing"});
      dropper.init();
```
## Browser support
* Chrome (latest)
* Firefox (latest)
* Safari (latest)
* Opera (latest)
* Edge (latest)
* Internet Explorer 9+
If you found a bug or have a feature suggestion, please submit it in the [Issues tracker](https://github.com/Ajjya/text-dropper-animation/issues).
## License
The plugin is available under the [MIT licens](http://opensource.org/licenses/MIT).
## Video example
You can download video example here:
https://github.com/Ajjya/block-twitcher/blob/master/ice_video_20190911-130845.mp4
