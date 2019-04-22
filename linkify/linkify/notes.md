

VS Code API | Visual Studio Code Extension API (https://code.visualstudio.com/api/references/vscode-api)
    VS Code API | Visual Studio Code Extension API (https://code.visualstudio.com/api/references/vscode-api#TextEditor)

https://code.visualstudio.com/api/references/vscode-api#SelectionRange


## do


take out e.g. `(21) ` from YouTube
take out e.g. `&rlz=1C5CHFA_enGB838GB838&oq=...&aqs=chrome..69i57.14693j0j7&sourceid=chrome&ie=UTF-8` from Google search query string
query string parser/filter?

if it has `https://www.google.com/search?`:
  remove everything until `oq=`
  remove everything the rest


## defer

```js
/* sample text for testing:
asdfafd
	asdfafd
		asdfasdf(http)
		asdfafd
		[asd]fds (https://asdfasdfds)
[asd]fds    (https://asdfasdfds)
		sdf
*/
```

auto-linkify on paste into vscode?

## done

foreach line that has `(http` in it:
  remove [] brackets, ` - YouTube`, ` - Google Search` etc
  trim whitespace
  add square brackets

2019-04-21 23:35:32
bound `linkify` command to `shift+cmd+i`