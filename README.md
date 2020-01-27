# snippet-shortcut-binder README

Add console.log insertion and placing the cursor between the quotes #.

## 0.0.1

This extension can add 'console.log('')'. You can bind a shortcut to it.

---

**Note:** I personaly like to link it to: Ctrl+Shift+C.

Add this to you keybindings:
{
"key": "ctrl+shift+c",
"command": "extension.ssbConsolelog",
"when": "editorFocus"
},
