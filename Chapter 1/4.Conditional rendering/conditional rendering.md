There is a difference between { v-if / v-else } and { v-show }.
- v-if will completely remove the element from the DOM 
- v-show will not remove it, but will give a style: display hidden in CSS values.

There for dropdown menus and things that need to change quickly will often use v-show instead of an if statement.
