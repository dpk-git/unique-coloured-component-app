# App name : Unique-coloured-component-app
This React app will produce an image in which each colour occurs exactly once -- with no repetition and no used colours. 

# Approch
Components are broken into Child-Parent concept,  each child component into 32 steps -- 8, 16,24, .. 256 -- which means it have 32,768 discrete colours. Parent component is of size 256px x 128px

Box is the child component and ColoredBox is the parent component.

# Test Cases
App.test.js and Box.test.js are having test cases for the app
