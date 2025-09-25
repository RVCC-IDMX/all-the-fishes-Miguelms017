# All The Fishes
*By: Miguelms017*

## What does this do?
This is an aquarium created with pixi.js 

## How was made?
**For the background**
1. The background was loaded as an sprite
2. Then. The scale was set up at 125%, the position was set up at the center of the scene and the anchor point was set up at the center of the sprite to avoid any mistake.
3. Finally on the stage, the background was added at the beginning of the section "//container on stage" so the background will load first and will not cover all fishes.

**for the fishes**

1. the fishes were loaded as sprites
2. then, the sprites where set up which its respective scales (25% for the group, 55% for the rest). Also the anchor where set up at certain point to make animations real. For the group, the fisher ase set up with different positions to merge in a group.
3. all fishes have their own bobbling animation, also the groups were assigned with a movement animation. Also a function for the fish movement was added and then implemented independent of its scales.
4. then the containers was set up with its respective position.
5. the fishes 2, 3 and 4 share a same container so they move syncronized. for the others, they have their own container.
6. finally, the containers were loaded after the background so none of the fishes are hidden.


