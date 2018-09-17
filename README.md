# Animated Label
Add life to your form inputs! This plugin add a elegant animation in label form.

## How to use
 **This plugin requires jQuery!**
 - Install the plugin:
 `npm i animated-label` or `npm i developmatt/animated-label-plugin`

 - Include the plugin in your script:
 `require('animated-label')`

- In HTML create your form input container. In this container must be the input text file and it's respective label:

![Implementation example](https://image.ibb.co/gtfaWe/label.png) 

 - Now, it's just inform to the **Animated Label Plugin** wich label you want animate through the plugin method `animatedLabelPlugin()` (inform the label parent):
 `$('.animated-label-container').animatedLabelPlugin();`