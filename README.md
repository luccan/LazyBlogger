# LazyBlogger
Static javascript blog template

When I want to create my own blog on github, I was very appalled to figure out that github only host static webpages - with the exception of jekyll.
As a windows user, I am too lazy to install ruby, jekyll server and whatnot.
I find static blog frameworks out there are too troublesome for my needs. I only want to have a static template where I can modify my navbars, and a content area where I can freely populate with my posts.

Well, it was more complicated than expected, but here it is, a javascript rendered blog framework.

# Usage
Requirements:
- js/lazyblogger.js
- js/lazyblogger_layout.js
- content/ directory in your root directory (containing any directory and .html)
- layout.html

Include this code in layout.html after loading jQuery
```
<!-- lazyBlogger -->
	<script src="./js/lazyblogger_layout.js"></script>
	<script>
		$( document ).ready(function(){
			lazyblogger_init($("#content"));
		});
	</script>
```
Include this code in all content .html files (careful on lazyblogger.js location as you may want to nest content folder):
```
<body style="display: none;"><div id="content">
  <!-- your content here -->
</div><script src="../js/lazyblogger.js"></script></body>
```
Unfortunately, we can only debug this locally using Mozilla Firefox (due to ActiveX restriction).
But once you push it to git, it will work cross browser.

That's it! Happy Blogging!

# Tips
You might want to consider adding an index.html under content/ folder that only contains a script to redirect to your default content.
This is to prevent an error when user manually go to luccan.github.io/LazyBlogger/content

# Technical Section
The core idea of LazyBlogger revolves around the use of iFrame. As such, hrefs can be tricky.
LazyBlogger automatically add onclick functions to normal \<a href\> links (excluding href="#" or href="javascript:"), but it will not override \<a href\> with onClick events.
In such event, you will have to redirect the parent window manually.

```
window.top.location = $(this).attr('href')
```

LazyBlogger is developed using jQuery v.2.1.4
